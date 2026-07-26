/* =========================================================================
   MOCK DATA — stands in for a backend. Replace/expand these arrays if you
   later want to load real course content; everything below reads only
   from these objects plus localStorage, no network calls anywhere.
   ========================================================================= */

const COURSE_DATA = {
  unitId: 'unit-1-1',
  unitTitle: 'Unit 1.1: Primitive Types & Variables',
  courseLabel: 'AP CS A • Unit 1.1',
  lessons: [
    { id: 'java-basics', title: 'Java Basics: Compiling, Running, and main Method', minutes: 15, xp: 100 },
    { id: 'primitives', title: 'Primitives: int, double, and boolean Machine Representations', minutes: 15, xp: 100 },
    { id: 'declaring-vs-initializing', title: 'Declaring vs. Initializing Variables and Memory Assignment', minutes: 15, xp: 100 },
    { id: 'arithmetic-expressions', title: 'Arithmetic Expressions: Operators (+, -, *, /, %)', minutes: 15, xp: 100 },
    { id: 'compound-assignment', title: 'Compound Assignment Operators', minutes: 15, xp: 100 },
    { id: 'widening-narrowing', title: 'Widening and Narrowing Conversions', minutes: 15, xp: 100 },
  ],
};

const ACHIEVEMENTS = [
  { id: 'first-step', icon: '🚀', label: 'First Step', earned: true },
  { id: 'streak-7', icon: '🔥', label: '7-Day Streak', earned: true },
  { id: 'java-basics', icon: '☕', label: 'Java Basics', earned: true },
  { id: 'perfect-score', icon: '⭐', label: 'Perfect Score', earned: false },
  { id: 'speed-coder', icon: '⚡', label: 'Speed Coder', earned: false },
  { id: 'night-owl', icon: '🦉', label: 'Night Owl', earned: false },
  { id: 'early-bird', icon: '🌅', label: 'Up and Early', earned: false },
  { id: 'lv10-hero', icon: '🏅', label: 'Lv.10 Hero', earned: false },
];

const AVATAR_SHOP = {
  outfits: [
    { id: 'hoodie-maroon', label: 'Hoodie (Maroon)', unlockLevel: 1 },
    { id: 'hoodie-orange', label: 'Hoodie (Orange)', unlockLevel: 1 },
    { id: 'lab-coat', label: 'Lab Coat', unlockLevel: 8 },
    { id: 'cyber-suit', label: 'Cyber Suit', unlockLevel: 8 },
  ],
};

/* =========================================================================
   LOCAL STORAGE — all progress persistence lives here. No cookies, no
   sessions, no server: everything is read/written to the browser only.
   ========================================================================= */

const STORAGE_KEY = 'codepath_progress_v1';

const DEFAULT_PROGRESS = {
  xp: 1240,
  level: 7,
  xpToNextLevel: 2000,
  streak: 14,
  lastCheckIn: null,           // ISO date string (yyyy-mm-dd) of last visit counted toward streak
  completedLessons: ['java-basics', 'primitives'],
  currentLessonId: 'declaring-vs-initializing',
  equippedOutfit: 'hoodie-maroon',
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    // Merge with defaults so new fields added later don't break old saved data
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
  } catch (err) {
    console.warn('Could not read saved progress, starting fresh.', err);
    return { ...DEFAULT_PROGRESS };
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.warn('Could not save progress (localStorage unavailable/full).', err);
  }
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

/* --- Daily check-in / streak logic ------------------------------------- */
// Called once on load. If today hasn't been counted yet, bump the streak
// (or reset it to 1 if a day was missed), then stamp today as checked in.
function applyDailyCheckIn(progress) {
  const today = new Date().toISOString().slice(0, 10);

  if (progress.lastCheckIn === today) return progress; // already counted today

  if (progress.lastCheckIn) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysSince = Math.round((new Date(today) - new Date(progress.lastCheckIn)) / msPerDay);
    progress.streak = daysSince === 1 ? progress.streak + 1 : 1;
  } else {
    // First-ever visit: keep the seeded demo streak rather than dropping to 1
    progress.streak = progress.streak || 1;
  }

  progress.lastCheckIn = today;
  return progress;
}

/* --- Lesson completion / XP / leveling ---------------------------------- */
function getCurrentLesson(progress) {
  return COURSE_DATA.lessons.find((l) => l.id === progress.currentLessonId) || COURSE_DATA.lessons[0];
}

function getNextLessonId(progress) {
  const next = COURSE_DATA.lessons.find((l) => !progress.completedLessons.includes(l.id) && l.id !== progress.currentLessonId);
  return next ? next.id : progress.currentLessonId;
}

function completeCurrentLesson(progress) {
  const lesson = getCurrentLesson(progress);
  if (!progress.completedLessons.includes(lesson.id)) {
    progress.completedLessons.push(lesson.id);
    progress.xp += lesson.xp;

    while (progress.xp >= progress.xpToNextLevel) {
      progress.xp -= progress.xpToNextLevel;
      progress.level += 1;
      progress.xpToNextLevel += 500; // each level requires a bit more XP than the last
    }
  }

  // Advance to the next unfinished lesson, if any are left
  const remaining = COURSE_DATA.lessons.filter((l) => !progress.completedLessons.includes(l.id));
  progress.currentLessonId = remaining.length ? remaining[0].id : lesson.id;

  return progress;
}

/* =========================================================================
   RENDERING — pure functions that read `progress` + the mock data and
   write into the DOM. No fetch, no backend: everything is local.
   ========================================================================= */

let progress = applyDailyCheckIn(loadProgress());
saveProgress(progress);

function render() {
  renderHeader();
  renderHero();
  renderStatsRow();
  renderRecommendations();
  renderMyCourses();
  renderCharacterPreview();
  renderUnlockProgress();
  renderAchievements();
  renderAvatarModal();
}

function renderHeader() {
  document.getElementById('welcomeSubtitle').textContent =
    `You're on a 🔥 ${progress.streak} day streak. Keep the momentum going!`;
  document.getElementById('xpTotalValue').textContent = totalXpEarned(progress).toLocaleString();
  document.getElementById('sidebarUserStats').textContent =
    `Lv.${progress.level} • ${totalXpEarned(progress).toLocaleString()} XP`;
}

// XP shown to the user is "lifetime" XP across all levels, for readability
function totalXpEarned(p) {
  // Reconstruct total from level/xpToNextLevel history isn't tracked exactly,
  // so for the demo we just show current-level XP + a rough lifetime estimate.
  return p.xp + (p.level - 1) * 3000;
}

function renderHero() {
  const lesson = getCurrentLesson(progress);
  document.getElementById('heroTitle').textContent = lesson.title;
  document.getElementById('heroSub').textContent = `${COURSE_DATA.unitTitle}`;
  const btn = document.getElementById('continueLessonBtn');
  btn.textContent = progress.completedLessons.length >= COURSE_DATA.lessons.length
    ? 'Unit Complete ✓'
    : 'Continue Lesson →';
  btn.disabled = progress.completedLessons.length >= COURSE_DATA.lessons.length;
}

function renderStatsRow() {
  document.getElementById('levelCircleValue').textContent = progress.level;
  document.getElementById('xpProgressText').textContent = `${progress.xp} / ${progress.xpToNextLevel} XP`;
  document.getElementById('streakStatValue').textContent = `🔥 ${progress.streak}`;
  document.getElementById('lessonsDoneValue').textContent = `✓ ${progress.completedLessons.length}`;
}

function renderRecommendations() {
  const list = document.getElementById('recommendationList');
  const items = COURSE_DATA.lessons.filter((l) => !progress.completedLessons.includes(l.id)).slice(0, 3);

  list.innerHTML = items.map((lesson) => {
    const isCurrent = lesson.id === progress.currentLessonId;
    return `
      <button class="recommendation-item" type="button" data-lesson-id="${lesson.id}">
        <div class="item-left">
          <div class="icon-circle ${isCurrent ? 'icon-circle--active' : ''}">${isCurrent ? '▶' : '📖'}</div>
          <div>
            <strong>${lesson.title}</strong>
            <div class="item-meta">
              <span>⏱ ${lesson.minutes} min</span>
              <span>⚡ +${lesson.xp} XP</span>
            </div>
          </div>
        </div>
      </button>
    `;
  }).join('') || `<p style="color: var(--text-muted); font-size: 0.9rem;">All lessons in this unit are complete 🎉</p>`;

  // Clicking a recommendation jumps the "current lesson" pointer to it
  list.querySelectorAll('[data-lesson-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      progress.currentLessonId = btn.dataset.lessonId;
      saveProgress(progress);
      render();
    });
  });
}

function renderMyCourses() {
  const total = COURSE_DATA.lessons.length;
  const done = progress.completedLessons.length;
  const percent = Math.round((done / total) * 100);

  document.getElementById('progressPercentValue').textContent = `${percent}%`;
  document.getElementById('progressBarFillEl').style.width = `${percent}%`;

  const list = document.getElementById('lessonJumpList');
  list.innerHTML = COURSE_DATA.lessons.map((lesson) => {
    const isDone = progress.completedLessons.includes(lesson.id);
    const isCurrent = !isDone && lesson.id === progress.currentLessonId;
    const status = isDone ? '✓' : isCurrent ? '▶' : '○';
    const stateClass = isDone ? 'done' : isCurrent ? 'current' : '';

    return `
      <li class="lesson-jump-item ${stateClass}">
        <span class="lesson-jump-status">${status}</span>
        ${isDone
        ? `<span class="lesson-jump-label">${lesson.title}</span>`
        : `<a href="#" class="lesson-jump-label" data-lesson-id="${lesson.id}">${lesson.title}</a>`}
      </li>
    `;
  }).join('');

  list.querySelectorAll('[data-lesson-id]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      progress.currentLessonId = link.dataset.lessonId;
      saveProgress(progress);
      render();
    });
  });
}

function renderCharacterPreview() {
  document.getElementById('characterLevelBadge').textContent = `☆ Lv.${progress.level}`;
}

function renderUnlockProgress() {
  const percent = Math.min(100, Math.round((progress.xp / progress.xpToNextLevel) * 100));
  document.getElementById('unlockBarFill').style.width = `${percent}%`;
  document.getElementById('unlockXpCurrent').textContent = `${progress.xp} XP`;
  document.getElementById('unlockXpTarget').textContent = `${progress.xpToNextLevel} XP`;
}

function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  grid.innerHTML = ACHIEVEMENTS.map((a) => `
    <div style="${a.earned ? '' : 'opacity: 0.4;'}">
      <div class="achievement-icon">${a.icon}</div>
      <div>${a.label}</div>
    </div>
  `).join('');
}

function renderAvatarModal() {
  const grid = document.getElementById('avatarItemGrid');
  grid.innerHTML = AVATAR_SHOP.outfits.map((item) => {
    const locked = item.unlockLevel > progress.level;
    const selected = item.id === progress.equippedOutfit;
    const classes = ['grid-card', locked ? 'locked' : '', selected ? 'selected' : ''].filter(Boolean).join(' ');
    return `
      <div class="${classes}" data-outfit-id="${item.id}" data-locked="${locked}">
        <div>${item.label}</div>
        ${locked ? `<div style="font-size: 0.65rem; color: #aaa;">Level ${item.unlockLevel}</div>` : ''}
      </div>
    `;
  }).join('');

  grid.querySelectorAll('[data-outfit-id]').forEach((card) => {
    card.addEventListener('click', () => {
      if (card.dataset.locked === 'true') return;
      progress.equippedOutfit = card.dataset.outfitId;
      saveProgress(progress);
      renderAvatarModal();
    });
  });
}

render();

/* =========================================================================
   INTERACTIVITY / EVENT WIRING
   ========================================================================= */

// --- SIDEBAR COLLAPSE ---
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebarToggleBtn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  toggleBtn.classList.toggle('collapsed');
});

// --- SPA VIEW SWITCHING ---
// NOTE: named MapsToView per your spec, though it reads like autocorrect for
// "navigateToView" — happy to rename if that was a typo.
// Scope note: this still only switches between .view-container elements
// that exist in the DOM. Only #view-dashboard has been built out so far —
// Course Map / Workspace / Profile / code-walkthrough / quiz views are not
// implemented yet, so navigating to them will just log a console warning
// below rather than silently failing.
function MapsToView(viewId) {
  document.querySelectorAll('.view-container').forEach((view) => {
    view.classList.add('hidden');
  });

  const target = document.getElementById(viewId);
  if (target) {
    target.classList.remove('hidden');
  } else {
    console.warn(`MapsToView: no element with id "${viewId}" found (view not built yet).`);
  }
}

document.querySelectorAll('[data-view]').forEach((el) => {
  el.addEventListener('click', (e) => {
    if (el.tagName === 'A') e.preventDefault();
    MapsToView(el.dataset.view);
  });
});

// --- SIDEBAR NAV ACTIVE STATE ---
const primaryNavItems = document.querySelectorAll('.sidebar-nav .nav-item');
primaryNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    primaryNavItems.forEach((i) => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// --- CHARACTER CUSTOMIZATION MODAL ---
const characterModal = document.getElementById('characterModal');
const openCharacterModalBtn = document.getElementById('customizeCharacterBtn');
const closeCharacterModalBtn = document.getElementById('closeCharacterModal');

openCharacterModalBtn?.addEventListener('click', () => characterModal.showModal());
closeCharacterModalBtn?.addEventListener('click', () => characterModal.close());

characterModal?.addEventListener('click', (e) => {
  if (e.target === characterModal) characterModal.close(); // click on ::backdrop
});

// --- CONTINUE LESSON (completes the current lesson entirely client-side) ---
document.getElementById('continueLessonBtn').addEventListener('click', () => {
  progress = completeCurrentLesson(progress);
  saveProgress(progress);
  render();
});

// --- RESET PROGRESS ---
document.getElementById('resetProgressBtn').addEventListener('click', () => {
  const confirmed = window.confirm('Reset all saved progress? This clears your XP, streak, completed lessons, and avatar choices from this browser.');
  if (!confirmed) return;

  resetProgress();
  progress = applyDailyCheckIn(loadProgress());
  saveProgress(progress);
  render();
});