// Heroicons Inline SVG Definitions Map
const ICONS = {
  home: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
  map: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689A1.125 1.125 0 0 0 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" /></svg>`,
  codeBracket: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>`,
  user: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
  chevronLeft: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>`,
  chevronRight: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>`,
  chevronDown: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>`,
  xMark: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`,
  trophy: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" /></svg>`,
  fire: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" /></svg>`,
  checkCircle: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  play: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" /></svg>`,
  check: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`,
  clock: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  bookOpen: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" /></svg>`,
  arrowPath: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`,
  magnifyingGlass: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>`,
  star: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" /></svg>`,
  lockClosed: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" /></svg>`,
  eye: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12c.729-2.37 2.152-4.22 4.1-5.403 1.884-1.144 4.148-1.597 6.364-1.597s4.48.453 6.364 1.597c1.948 1.183 3.371 3.033 4.1 5.403-.729 2.37-2.152 4.22-4.1 5.403-1.884 1.144-4.148 1.597-6.364 1.597s-4.48-.453-6.364-1.597c-1.948-1.183-3.371-3.033-4.1-5.403Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`
};

const STORAGE_KEY = 'codepath_dashboard_progress';
const DEFAULT_PROGRESS = {
  userName: 'Byte Scholar',
  avatar: '👩‍💻',
  xp: 1240,
  level: 3,
  streak: 5,
  completedLessons: ['apcsa-1-1', 'apcsa-1-2', 'java-basics'],
  currentLessonId: 'apcsa-1-3'
};

const ACHIEVEMENTS = [
  { id: 'first-step', label: 'First Step', desc: 'Complete 1 lesson', required: 1 },
  { id: 'streak-3', label: 'On Fire', desc: 'Maintain a 3-day streak', requiredStreak: 3 },
  { id: 'xp-1000', label: 'Kilobyte Club', desc: 'Earn 1,000 Total XP', requiredXp: 1000 },
  { id: 'mastery', label: 'Master Mind', desc: 'Complete 5 lessons', required: 5 }
];

let progress = loadProgress();
let currentTrack = 'ap-csa';

// --- PROGRESS PERSISTENCE ---
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULT_PROGRESS, ...JSON.parse(raw) } : { ...DEFAULT_PROGRESS };
  } catch (e) {
    return { ...DEFAULT_PROGRESS };
  }
}

function saveProgress(p) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  progress = { ...DEFAULT_PROGRESS };
  saveProgress(progress);
}

// --- DYNAMIC CALCULATIONS ---
function calculateLevel(xp) {
  const targetXp = 2000;
  const level = Math.floor(xp / 500) + 1;
  const currentLevelXp = xp % targetXp;
  return { level, currentLevelXp, targetXp };
}

// --- MAIN RENDER CONTROLLER ---
function render() {
  const { level, targetXp } = calculateLevel(progress.xp);

  // Dynamic Level Progress Circle stroke-dasharray matching XP fraction
  const radius = 48;
  const circumference = 2 * Math.PI * radius; // ~301.59
  const circle = document.getElementById('levelProgressCircle');

  if (circle) {
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const xpFraction = Math.min(progress.xp / targetXp, 1);
    const strokeOffset = circumference - (xpFraction * circumference);
    circle.style.strokeDashoffset = strokeOffset;
  }

  const pct = Math.min(Math.round((progress.xp / targetXp) * 100), 100);

  // Text Stats Displays
  document.getElementById('userLevelDisplay').textContent = `Lvl ${level}`;
  document.getElementById('userLevelPercent').textContent = `${pct}%`;
  document.getElementById('userXpDisplay').textContent = `${progress.xp} / ${targetXp} XP`;
  document.getElementById('xpBarFill').style.width = `${pct}%`;

  document.getElementById('welcomeUserName').textContent = progress.userName;
  document.getElementById('sidebarUserName').textContent = progress.userName;
  document.getElementById('profileUserName').textContent = progress.userName;

  document.getElementById('sidebarUserLevel').textContent = `Level ${level} · AP CS A`;
  document.getElementById('profileUserLevel').textContent = `Level ${level} · AP CS A Track`;

  document.getElementById('totalXpValue').textContent = progress.xp.toLocaleString();
  document.getElementById('dayStreakValue').textContent = progress.streak;
  document.getElementById('completedLessonsValue').textContent = progress.completedLessons.length;

  document.getElementById('profileTotalXp').textContent = progress.xp.toLocaleString();
  document.getElementById('profileStreak').textContent = progress.streak;
  document.getElementById('profileCompleted').textContent = progress.completedLessons.length;

  // Avatars
  const avatarButtons = document.querySelectorAll('.avatar-mini, #profileAvatarDisplay, #modalAvatarPreview');
  avatarButtons.forEach(el => el.textContent = progress.avatar);

  renderAchievements();
}

// --- RENDER ACHIEVEMENTS ---
function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;

  grid.innerHTML = ACHIEVEMENTS.map(ach => {
    let unlocked = false;
    if (ach.required) unlocked = progress.completedLessons.length >= ach.required;
    if (ach.requiredStreak) unlocked = progress.streak >= ach.requiredStreak;
    if (ach.requiredXp) unlocked = progress.xp >= ach.requiredXp;

    const iconSvg = unlocked ? ICONS.star : ICONS.lockClosed;

    return `
      <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
        <div class="achievement-badge-icon">
          ${iconSvg}
        </div>
        <div>
          <div class="achievement-name">${ach.label}</div>
          <div class="achievement-status">${ach.desc}</div>
        </div>
      </div>
    `;
  }).join('');
}

// --- RENDER COURSE MAP ---
function renderCourseMap() {
  const container = document.getElementById('courseMapUnits');
  const jumpList = document.getElementById('quickJumpList');
  if (!container || typeof SYLLABUS_DATA === 'undefined') return;

  const trackData = SYLLABUS_DATA[currentTrack];
  if (!trackData) return;

  let unitsHtml = '';
  let jumpHtml = '';

  trackData.phases.forEach((phase) => {
    phase.units.forEach((unit) => {
      const unitId = `unit-${unit.number}`;
      jumpHtml += `<a href="#${unitId}" class="quick-jump-item">Unit ${unit.number}: ${unit.title}</a>`;

      unitsHtml += `
        <div class="unit-card" id="${unitId}">
          <div class="unit-header" onclick="toggleUnitCollapse(this)">
            <div>
              <div class="unit-title">Unit ${unit.number}: ${unit.title}</div>
              <div class="unit-subtitle">${unit.subtitle || ''}</div>
            </div>
            <div class="unit-toggle-icon">${ICONS.chevronDown}</div>
          </div>
          <div class="lesson-grid">
      `;

      unit.lessons.forEach((lesson) => {
        const isCompleted = progress.completedLessons.includes(lesson.id);
        const isCurrent = progress.currentLessonId === lesson.id;

        let statusClass = 'not-started';
        let statusIcon = '<div class="lesson-dot-icon"></div>';

        if (isCompleted) {
          statusClass = 'completed';
          statusIcon = `<span class="lesson-status-icon">${ICONS.check}</span>`;
        } else if (isCurrent) {
          statusClass = 'in-progress';
          statusIcon = `<span class="lesson-status-icon">${ICONS.play}</span>`;
        }

        unitsHtml += `
          <div class="lesson-card ${statusClass}" data-lesson-id="${lesson.id}">
            <div class="lesson-card-header">
              <div class="lesson-card-title">${lesson.number} ${lesson.title}</div>
              ${statusIcon}
            </div>
            <div class="lesson-card-meta">
              <span class="lesson-meta-item">${ICONS.clock} 15m</span>
              <span class="lesson-meta-item">${ICONS.bookOpen} Reading</span>
            </div>
          </div>
        `;
      });

      unitsHtml += `
          </div>
        </div>
      `;
    });
  });

  container.innerHTML = unitsHtml;
  if (jumpList) jumpList.innerHTML = jumpHtml;

  applySearchFilter(document.getElementById('lesson-search').value);
}

function toggleUnitCollapse(headerEl) {
  const unitCard = headerEl.closest('.unit-card');
  if (unitCard) {
    unitCard.classList.toggle('collapsed');
  }
}

// --- SEARCH FILTER & COUNTER ---
function applySearchFilter(query) {
  const searchCounter = document.getElementById('searchCounter');
  const term = query.trim().toLowerCase();

  const lessonCards = document.querySelectorAll('.lesson-card');
  let matchCount = 0;
  const totalCount = lessonCards.length;

  lessonCards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    if (!term) {
      card.style.display = 'flex';
      matchCount++;
    } else if (text.includes(term)) {
      card.style.display = 'flex';
      matchCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (searchCounter) {
    if (!term) {
      searchCounter.textContent = `${totalCount} results found`;
    } else {
      searchCounter.textContent = `${matchCount} result${matchCount === 1 ? '' : 's'} found`;
    }
  }
}

// --- INITIALIZATION & EVENT HANDLERS ---
document.addEventListener('DOMContentLoaded', () => {
  render();
  renderCourseMap();

  // Dynamic Theme Property Test Compatibility
  document.documentElement.style.setProperty('--icon-color', 'currentColor');

  // Sidebar Collapse Toggle
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebarToggleBtn');

  toggleBtn?.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const isCollapsed = sidebar.classList.contains('collapsed');
    toggleBtn.innerHTML = isCollapsed ? ICONS.chevronRight : ICONS.chevronLeft;
    toggleBtn.setAttribute('aria-expanded', !isCollapsed);
  });

  // View Navigation Tabs
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.dataset.view;

      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      document.querySelectorAll('.view-content').forEach(view => {
        view.classList.remove('active');
      });
      document.getElementById(targetView)?.classList.add('active');
    });
  });

  // Search Input Listener
  const searchInput = document.getElementById('lesson-search');
  searchInput?.addEventListener('input', (e) => {
    applySearchFilter(e.target.value);
  });

  // Course Map Track Switching
  const trackTabs = document.querySelectorAll('.track-tab');
  trackTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      trackTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      currentTrack = tab.dataset.track;
      document.getElementById('lesson-search').value = '';
      renderCourseMap();
    });
  });

  // Character Modal Handling
  const modal = document.getElementById('characterModal');
  const openModalBtns = [
    document.getElementById('openCharacterModalSidebar'),
    document.getElementById('openCharacterModalProfile')
  ];
  const closeModalBtn = document.getElementById('closeCharacterModal');

  openModalBtns.forEach(btn => btn?.addEventListener('click', () => modal?.showModal()));
  closeModalBtn?.addEventListener('click', () => modal?.close());
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  // Avatar Selection inside Modal
  const avatarOptions = document.querySelectorAll('.avatar-option');
  avatarOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      avatarOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      progress.avatar = opt.dataset.avatar;
      saveProgress(progress);
      render();
    });
  });

  // Continue Lesson Action
  document.getElementById('continueLessonBtn')?.addEventListener('click', () => {
    progress.xp += 100;
    saveProgress(progress);
    render();
  });

  // Reset Progress Action
  document.getElementById('resetProgressBtn')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all progress?')) {
      resetProgress();
      render();
      renderCourseMap();
    }
  });

  // Workspace Actions
  document.getElementById('runCodeBtn')?.addEventListener('click', () => {
    const output = document.getElementById('codeOutput');
    output.textContent = 'Compiling Main.java...\nBuild Successful!\n\nWelcome to CodePath Sandbox!\nCurrent Level Progress: 62.0%';
  });

  document.getElementById('resetCodeBtn')?.addEventListener('click', () => {
    document.getElementById('codeEditor').value = `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Welcome to CodePath Sandbox!");\n    }\n}`;
    document.getElementById('codeOutput').textContent = 'Code reset to default template.';
  });
});