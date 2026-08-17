// lessonRenderer.js — WITH SLIDESHOW IFRAME SUPPORT
// Changes:
// 1. loadLesson() now detects slideshow URLs and renders iframes
// 2. Hybrid logic now includes slideshow as a third possible tab
// 3. buildSlideshowEmbed() creates safe iframes for Google Slides, Canva, etc.

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInline(text) {
  let out = escapeHtml(text);
  out = out.replace(/`([^`]+)`/g, (_, code) => `<code>${code}</code>`);
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    const safeUrl =
      /^https?:\/\//i.test(url) || url.startsWith("#") || url.startsWith("/")
        ? url
        : "#";
    return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

export function renderMarkdown(source) {
  if (!source || !source.trim()) return "";
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.trim().startsWith("```")) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      html.push(
        `<pre class="lesson-code-block"><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`,
      );
      continue;
    }

    const headerMatch = line.match(/^(#{1,3})\s+(.*)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      html.push(
        `<h${level} class="lesson-h${level}">${renderInline(headerMatch[2].trim())}</h${level}>`,
      );
      i++;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(
          `<li>${renderInline(lines[i].replace(/^[-*]\s+/, ""))}</li>`,
        );
        i++;
      }
      html.push(`<ul class="lesson-list">${items.join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(
          `<li>${renderInline(lines[i].replace(/^\d+\.\s+/, ""))}</li>`,
        );
        i++;
      }
      html.push(`<ol class="lesson-list">${items.join("")}</ol>`);
      continue;
    }

    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("```") &&
      !/^(#{1,3})\s+/.test(lines[i]) &&
      !/^[-*]\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i])
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    html.push(
      `<p class="lesson-paragraph">${renderInline(paraLines.join(" "))}</p>`,
    );
  }

  return html.join("\n");
}

function findLessonById(lessonId) {
  if (typeof SYLLABUS_DATA === "undefined") return null;
  for (const trackKey of Object.keys(SYLLABUS_DATA)) {
    const track = SYLLABUS_DATA[trackKey];
    for (const phase of track.phases) {
      for (const unit of phase.units) {
        const found = unit.lessons.find((l) => l.id === lessonId);
        if (found) return found;
      }
    }
  }
  return null;
}

function buildYoutubeEmbedUrl(youtubeId) {
  if (!/^[A-Za-z0-9_-]{6,20}$/.test(youtubeId)) return null;
  return `https://www.youtube.com/embed/${youtubeId}`;
}

// ---- NEW: Build iframe for Google Slides, Canva, or other embeddable URLs ----
// Supports Google Slides embed URLs (with /preview or /edit paths)
// and Canva design URLs (with /design/ path)
function buildSlideshowEmbed(url) {
  if (!url || !url.startsWith("http")) return null;

  // Google Slides: convert /edit or /view URLs to /preview for embedding
  if (url.includes("docs.google.com/presentation")) {
    const slideId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (slideId) {
      return `https://docs.google.com/presentation/d/${slideId}/embed?start=false&loop=false&delayms=3000`;
    }
  }

  // Canva: use the /design/ URL directly (Canva supports embed)
  if (url.includes("canva.com")) {
    // Canva design URLs can be embedded directly, but user must enable sharing
    return url.includes("design") ? url : null;
  }

  // Generic: if it's already an embed URL, use as-is (for future services)
  if (url.includes("embed")) return url;

  return null;
}

// ---- Main lesson loading with slideshow + video + article support ----
export async function loadLesson(lessonId, container) {
  const lesson = findLessonById(lessonId);
  if (!lesson) {
    container.innerHTML = '<p class="lesson-paragraph">Lesson not found.</p>';
    return null;
  }

  const content = lesson.content;
  if (!content) {
    container.innerHTML =
      '<p class="lesson-paragraph">Lesson content coming soon.</p>';
    return lesson;
  }

  // Detect what mediums are present
  const hasVideo = content.youtubeId && buildYoutubeEmbedUrl(content.youtubeId);
  const hasMarkdown = content.type === "markdown" && content.src;
  const hasSlideshow =
    content.type === "slideshow" && buildSlideshowEmbed(content.slideshowUrl);
  const hasVisualizer = content.type === "visualizer" && content.visualizerId;

  // Count how many mediums: if 2+ exist, show tabs
  const mediumCount = [
    hasVideo,
    hasMarkdown,
    hasSlideshow,
    hasVisualizer,
  ].filter(Boolean).length;
  const isHybrid = mediumCount > 1;

  if (isHybrid) {
    // ---- TAB UI for multiple mediums ----
    const tabsHtml = [];
    const contentsHtml = [];

    // VIDEO TAB
    if (hasVideo) {
      tabsHtml.push(`
				<button class="lesson-tab-btn lesson-tab-btn--video ${!hasSlideshow && !hasMarkdown ? "active" : ""}" data-tab="video">
					<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<polygon points="23 7 16 12 23 17 23 7"></polygon>
						<rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
					</svg>
					<span>Video</span>
				</button>
			`);
      contentsHtml.push(`
				<div class="lesson-tab-content lesson-tab-content--video ${!hasSlideshow && !hasMarkdown ? "active" : ""}" id="lesson-tab-video">
					<div class="lesson-video-wrap">
						<iframe src="${buildYoutubeEmbedUrl(content.youtubeId)}" 
							title="${escapeHtml(lesson.title)}"
							loading="lazy" allowfullscreen
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
					</div>
				</div>
			`);
    }

    // SLIDESHOW TAB
    if (hasSlideshow) {
      const slideUrl = buildSlideshowEmbed(content.slideshowUrl);
      tabsHtml.push(`
				<button class="lesson-tab-btn lesson-tab-btn--slideshow ${!hasMarkdown && !hasVideo ? "active" : ""}" data-tab="slideshow">
					<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="2" y="7" width="20" height="13" rx="2" ry="2"></rect>
						<path d="M16 19V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
					</svg>
					<span>Slides</span>
				</button>
			`);
      contentsHtml.push(`
				<div class="lesson-tab-content lesson-tab-content--slideshow ${!hasMarkdown && !hasVideo ? "active" : ""}" id="lesson-tab-slideshow">
					<div class="lesson-slideshow-wrap">
						<iframe src="${slideUrl}" 
							title="${escapeHtml(lesson.title)} - Slideshow"
							loading="lazy" allowfullscreen></iframe>
					</div>
				</div>
			`);
    }

    // ARTICLE TAB
    if (hasMarkdown) {
      tabsHtml.push(`
				<button class="lesson-tab-btn lesson-tab-btn--article active" data-tab="article">
					<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
						<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
					</svg>
					<span>Article</span>
				</button>
			`);
      contentsHtml.push(`
				<div class="lesson-tab-content lesson-tab-content--article active" id="lesson-tab-article">
					<p class="lesson-paragraph">Loading article…</p>
				</div>
			`);
    }

    // VISUALIZER TAB
    if (hasVisualizer) {
      tabsHtml.push(`
				<button class="lesson-tab-btn lesson-tab-btn--visualizer" data-tab="visualizer">
					<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
						<path d="M21 3v5h-5"></path>
						<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
						<path d="M3 21v-5h5"></path>
					</svg>
					<span>Interactive</span>
				</button>
			`);
      contentsHtml.push(`
				<div class="lesson-tab-content lesson-tab-content--visualizer" id="lesson-tab-visualizer">
					<div id="visualizer-container" data-visualizer-id="${escapeHtml(content.visualizerId)}">
						<p class="lesson-paragraph">Loading interactive visualizer…</p>
					</div>
				</div>
			`);
    }

    container.innerHTML = `
			<div class="lesson-tabs-wrapper">
				<div class="lesson-tabs">
					${tabsHtml.join("")}
				</div>
				${contentsHtml.join("")}
			</div>
		`;

    // Fetch markdown if present
    if (hasMarkdown) {
      const articleContainer = container.querySelector("#lesson-tab-article");
      try {
        const res = await fetch(content.src);
        if (!res.ok) throw new Error(`${res.status}`);
        const text = await res.text();
        articleContainer.innerHTML = renderMarkdown(text);
      } catch (err) {
        console.warn(
          `Lesson markdown not found for "${lessonId}" at ${content.src}:`,
          err.message,
        );
        articleContainer.innerHTML =
          '<p class="lesson-paragraph">Article content coming soon.</p>';
      }
    }

    // Initialize tab switching
    initLessonTabs(container);
    return lesson;
  }

  // ---- SINGLE MEDIUM: no tabs ----
  let html = "";

  if (hasVideo) {
    html += `<div class="lesson-video-wrap">
			<iframe src="${buildYoutubeEmbedUrl(content.youtubeId)}" 
				title="${escapeHtml(lesson.title)}"
				loading="lazy" allowfullscreen
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
		</div>`;
  }

  if (hasSlideshow) {
    const slideUrl = buildSlideshowEmbed(content.slideshowUrl);
    html += `<div class="lesson-slideshow-wrap">
			<iframe src="${slideUrl}" 
				title="${escapeHtml(lesson.title)} - Slideshow"
				loading="lazy" allowfullscreen></iframe>
		</div>`;
  }

  if (hasVisualizer) {
    html += `<div id="visualizer-container" data-visualizer-id="${escapeHtml(content.visualizerId)}">
			<p class="lesson-paragraph">Loading interactive visualizer…</p>
		</div>`;
  }

  if (hasMarkdown) {
    container.innerHTML =
      html + '<p class="lesson-paragraph">Loading lesson…</p>';
    try {
      const res = await fetch(content.src);
      if (!res.ok) throw new Error(`${res.status}`);
      const text = await res.text();
      html += renderMarkdown(text);
    } catch (err) {
      console.warn(
        `Lesson markdown not found for "${lessonId}" at ${content.src}:`,
        err.message,
      );
      html += '<p class="lesson-paragraph">Lesson content coming soon.</p>';
    }
  }

  container.innerHTML =
    html || '<p class="lesson-paragraph">Lesson content coming soon.</p>';
  return lesson;
}

// ---- Tab switching logic ----
export function initLessonTabs(container) {
  const tabBtns = container.querySelectorAll(".lesson-tab-btn");
  const tabContents = container.querySelectorAll(".lesson-tab-content");

  if (tabBtns.length === 0) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.getAttribute("data-tab");

      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      container
        .querySelector(`#lesson-tab-${tabName}`)
        ?.classList.add("active");
    });
  });
}
