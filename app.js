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

// =========================================================================
// LAYERED CHARACTER AVATAR SYSTEM (replaces single-emoji avatar)
// =========================================================================
const AVATAR_PARTS = {
  body: [
    { id: 'body-fair', label: 'Fair', skin: '#F4C9A0' },
    { id: 'body-medium', label: 'Medium', skin: '#D9975C' },
    { id: 'body-tan', label: 'Tan', skin: '#B97A45' },
    { id: 'body-deep', label: 'Deep', skin: '#7A4A2B' },
    { id: 'body-cool', label: 'Cool', skin: '#8B6F5C' },
  ],
  outfit: [
    { id: 'outfit-teal', label: 'Teal Tee', color: '#1C7E9C' },
    { id: 'outfit-orange', label: 'Orange Zip', color: '#FEA983' },
    { id: 'outfit-navy', label: 'Navy Hoodie', color: '#155C73' },
    { id: 'outfit-purple', label: 'Violet Vest', color: '#7C6FDB' },
    { id: 'outfit-mono', label: 'Mono Black', color: '#2d3748' },
  ],
  hair: [
    { id: 'hair-none', label: 'Bald / None', color: 'transparent' },
    { id: 'hair-short', label: 'Short', color: '#3B2417' },
    { id: 'hair-curly', label: 'Curly', color: '#1C1C1C' },
    { id: 'hair-long', label: 'Long', color: '#8A5A2B' },
    { id: 'hair-buzz', label: 'Buzz', color: '#5C4033' },
  ],
  accessory: [
    { id: 'acc-none', label: 'None' },
    { id: 'acc-glasses', label: 'Glasses' },
    { id: 'acc-shades', label: 'Shades' },
    { id: 'acc-cap', label: 'Cap' },
    { id: 'acc-headband', label: 'Headband' },
  ]
};

const DEFAULT_CHARACTER = {
  body: 'body-medium',
  outfit: 'outfit-teal',
  hair: 'hair-short',
  accessory: 'acc-none'
};

function findAvatarPart(layer, id) {
  return AVATAR_PARTS[layer].find(p => p.id === id) || AVATAR_PARTS[layer][0];
}

function buildAvatarSVG(character) {
  const body = findAvatarPart('body', character.body);
  const outfit = findAvatarPart('outfit', character.outfit);
  const hair = findAvatarPart('hair', character.hair);
  const accessory = character.accessory;

  let svg = `<svg class="avatar-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<rect width="100" height="100" fill="#FDE3C8"/>`;
  svg += `<ellipse cx="50" cy="66" rx="28" ry="22" fill="${outfit.color}"/>`;

  if (character.outfit === 'outfit-navy') {
    svg += `<path d="M38 50 Q50 58 62 50 L62 60 Q50 66 38 60 Z" fill="#0e3d4d"/>`;
  } else if (character.outfit === 'outfit-orange') {
    svg += `<line x1="50" y1="48" x2="50" y2="80" stroke="#c96b3f" stroke-width="2"/>`;
  } else if (character.outfit === 'outfit-purple') {
    svg += `<path d="M40 48 L50 62 L60 48" fill="none" stroke="#5b4fb8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
  }

  svg += `<rect x="44" y="42" width="12" height="12" fill="${body.skin}"/>`;
  svg += `<circle cx="50" cy="36" r="19" fill="${body.skin}"/>`;
  svg += `<circle cx="31" cy="36" r="3.2" fill="${body.skin}"/><circle cx="69" cy="36" r="3.2" fill="${body.skin}"/>`;
  svg += `<circle cx="43" cy="35" r="1.8" fill="#2d3748"/><circle cx="57" cy="35" r="1.8" fill="#2d3748"/>`;
  svg += `<path d="M44 43 Q50 47 56 43" stroke="#2d3748" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;

  if (character.hair === 'hair-short') {
    svg += `<path d="M29 34 Q26 14 50 14 Q74 14 71 34 Q71 20 50 20 Q29 20 29 34Z" fill="${hair.color}"/>`;
  } else if (character.hair === 'hair-curly') {
    svg += `<g fill="${hair.color}"><circle cx="33" cy="20" r="6"/><circle cx="42" cy="14" r="7"/><circle cx="52" cy="12" r="7.5"/><circle cx="62" cy="15" r="7"/><circle cx="69" cy="22" r="6"/></g>`;
  } else if (character.hair === 'hair-long') {
    svg += `<path d="M29 34 Q26 14 50 14 Q74 14 71 34 L71 58 Q66 60 64 54 L64 32 Q64 20 50 20 Q36 20 36 32 L36 54 Q34 60 29 58 Z" fill="${hair.color}"/>`;
  } else if (character.hair === 'hair-buzz') {
    svg += `<path d="M30 30 Q28 16 50 16 Q72 16 70 30 Q71 24 50 24 Q29 24 30 30Z" fill="${hair.color}" opacity="0.85"/>`;
  }

  if (accessory === 'acc-glasses') {
    svg += `<g stroke="#2d3748" stroke-width="2" fill="none"><circle cx="43" cy="35" r="6.5"/><circle cx="57" cy="35" r="6.5"/><line x1="49.5" y1="35" x2="50.5" y2="35"/></g>`;
  } else if (accessory === 'acc-shades') {
    svg += `<g fill="#1a1a1a"><rect x="36.5" y="31" width="13" height="8" rx="3"/><rect x="50.5" y="31" width="13" height="8" rx="3"/><rect x="49" y="33.5" width="2" height="2"/></g>`;
  } else if (accessory === 'acc-cap') {
    svg += `<path d="M29 26 Q29 12 50 12 Q71 12 71 26 L71 28 L29 28 Z" fill="${outfit.color}"/><ellipse cx="60" cy="28" rx="14" ry="4" fill="${outfit.color}"/>`;
  } else if (accessory === 'acc-headband') {
    svg += `<rect x="29" y="24" width="42" height="5" fill="${outfit.color}"/>`;
  }

  svg += `</svg>`;
  return svg;
}

function renderAvatarDisplays(character) {
  const svgMarkup = buildAvatarSVG(character);
  document.querySelectorAll('.avatar-mini, #profileAvatarDisplay, #modalAvatarPreview')
    .forEach(el => { el.innerHTML = svgMarkup; });
}

let activeCustomizeTab = 'body';

function renderAvatarItemGrid() {
  const grid = document.getElementById('avatarItemGrid');
  if (!grid) return;
  const layer = activeCustomizeTab;
  const selected = progress.character[layer];

  grid.innerHTML = AVATAR_PARTS[layer].map(part => {
    const previewChar = { ...progress.character, [layer]: part.id };
    const isActive = part.id === selected;
    return `
      <button type="button" class="avatar-option ${isActive ? 'active' : ''}" data-layer="${layer}" data-part-id="${part.id}">
        ${buildAvatarSVG(previewChar)}
        <span class="avatar-option-label">${part.label}</span>
      </button>
    `;
  }).join('');

  grid.querySelectorAll('.avatar-option').forEach(btn => {
    btn.addEventListener('click', () => {
      progress.character[btn.dataset.layer] = btn.dataset.partId;
      saveProgress(progress);
      renderAvatarDisplays(progress.character);
      renderAvatarItemGrid();
    });
  });
}

const STORAGE_KEY = 'codepath_dashboard_progress';
const DEFAULT_PROGRESS = {
  userName: 'Byte Scholar',
  avatar: '👩‍💻',
  xp: 165,
  streak: 4,
  streakFreezes: 1,
  completedLessons: ['apcsa-1-1', 'apcsa-1-2', 'apcsa-1-3', 'apcsa-1-4', 'apcsa-2-1'],
  currentLessonId: 'apcsa-2-2',
  achievementFlags: {},
  unlockedAchievements: []
};

function getLessonIdsForUnit(track, unitNumber) {
  const trackData = SYLLABUS_DATA[track];
  if (!trackData) return [];
  for (const phase of trackData.phases) {
    for (const unit of phase.units) {
      if (unit.number === unitNumber) return unit.lessons.map(l => l.id);
    }
  }
  return [];
}

function getLessonIdsForPhase(track, phaseNumber) {
  const trackData = SYLLABUS_DATA[track];
  if (!trackData) return [];
  const phase = trackData.phases.find(p => p.number === phaseNumber);
  return phase ? phase.units.flatMap(u => u.lessons.map(l => l.id)) : [];
}

function isAllComplete(ids) {
  return ids.length > 0 && ids.every(id => progress.completedLessons.includes(id));
}

function getTrackProgressPct(track) {
  const trackData = SYLLABUS_DATA[track];
  if (!trackData) return 0;
  const allIds = trackData.phases.flatMap(p => p.units.flatMap(u => u.lessons.map(l => l.id)));
  if (allIds.length === 0) return 0;
  const done = allIds.filter(id => progress.completedLessons.includes(id)).length;
  return Math.round((done / allIds.length) * 100);
}

const ACHIEVEMENTS = [
  // --- Streaks & Consistency ---
  { id: 'streak_1', category: 'Streaks & Consistency', name: 'First Step', desc: 'Complete your very first lesson', icon: '👣', xp: 25, check: p => p.completedLessons.length >= 1 },
  { id: 'streak_3', category: 'Streaks & Consistency', name: 'On a Roll', desc: 'Maintain a 3-day coding streak', icon: '🔥', xp: 50, check: p => p.streak >= 3 },
  { id: 'streak_7', category: 'Streaks & Consistency', name: 'Habit Builder', desc: 'Maintain a 7-day coding streak', icon: '📅', xp: 100, check: p => p.streak >= 7 },
  { id: 'streak_14', category: 'Streaks & Consistency', name: 'Two-Week Titan', desc: 'Maintain a 14-day coding streak', icon: '⚔️', xp: 200, check: p => p.streak >= 14 },
  { id: 'streak_30', category: 'Streaks & Consistency', name: 'Unstoppable', desc: 'Maintain a 30-day coding streak', icon: '⚡', xp: 500, check: p => p.streak >= 30 },
  { id: 'time_night', category: 'Streaks & Consistency', name: 'Night Owl', desc: 'Finish a lesson between 10 PM and 5 AM', icon: '🌙', xp: 30, check: p => !!p.achievementFlags?.time_night },
  { id: 'time_early', category: 'Streaks & Consistency', name: 'Early Bird', desc: 'Finish a lesson between 5 AM and 8 AM', icon: '🌅', xp: 30, check: p => !!p.achievementFlags?.time_early },
  { id: 'time_weekend', category: 'Streaks & Consistency', name: 'Weekend Warrior', desc: 'Complete 3 lessons over a single weekend', icon: '🛡️', xp: 75, check: p => !!p.achievementFlags?.time_weekend },

  // --- AP CS A Mastery ---
  { id: 'apcsa_p1', category: 'AP CS A Mastery', name: 'Primitive Pioneer', desc: 'Complete Phase 1: Objects & Methods', icon: '📦', xp: 150, check: p => isAllComplete(getLessonIdsForPhase('ap-csa', 1)) },
  { id: 'apcsa_p2', category: 'AP CS A Mastery', name: 'Logic Gatekeeper', desc: 'Complete Phase 2: Selection & Iteration', icon: '🔀', xp: 150, check: p => isAllComplete(getLessonIdsForPhase('ap-csa', 2)) },
  { id: 'apcsa_p3', category: 'AP CS A Mastery', name: 'Architect', desc: 'Complete Phase 3: Class Creation', icon: '🏗️', xp: 200, check: p => isAllComplete(getLessonIdsForPhase('ap-csa', 3)) },
  { id: 'apcsa_p4', category: 'AP CS A Mastery', name: 'Collection Master', desc: 'Complete Phase 4: Arrays, ArrayLists & 2D Grids', icon: '📊', xp: 250, check: p => isAllComplete(getLessonIdsForPhase('ap-csa', 4)) },
  { id: 'java_string', category: 'AP CS A Mastery', name: 'String Pooler', desc: 'Complete all String method lessons', icon: '🧵', xp: 60, check: p => isAllComplete(getLessonIdsForUnit('ap-csa', 2)) },
  { id: 'java_loop', category: 'AP CS A Mastery', name: 'Looping Legend', desc: 'Finish all While, For, and Nested Loop lessons', icon: '🔁', xp: 75, check: p => isAllComplete(getLessonIdsForUnit('ap-csa', 5)) },
  { id: 'java_recursion', category: 'AP CS A Mastery', name: 'Mirror Mirror', desc: 'Complete both AP CS A recursion modules', icon: '🪞', xp: 100, check: p => isAllComplete(getLessonIdsForUnit('ap-csa', 12)) },
  { id: 'apcsa_master', category: 'AP CS A Mastery', name: 'AP CS A Scholar', desc: 'Finish 100% of the AP CS A Track', icon: '🎓', xp: 1000, check: p => getTrackProgressPct('ap-csa') >= 100 },

  // --- DSA Mastery ---
  { id: 'dsa_p1', category: 'DSA Mastery', name: 'Linear Leader', desc: 'Complete Phase 1: Linear Structures & Big-O', icon: '📏', xp: 200, check: p => isAllComplete(getLessonIdsForPhase('dsa', 1)) },
  { id: 'dsa_p2', category: 'DSA Mastery', name: 'Divide & Conquer', desc: 'Complete Phase 2: Recursion & Sorting', icon: '⚔️', xp: 250, check: p => isAllComplete(getLessonIdsForPhase('dsa', 2)) },
  { id: 'dsa_p3', category: 'DSA Mastery', name: 'Hierarchical Hero', desc: 'Complete Phase 3: Trees, Heaps & Tries', icon: '🌳', xp: 300, check: p => isAllComplete(getLessonIdsForPhase('dsa', 3)) },
  { id: 'dsa_p4', category: 'DSA Mastery', name: 'Graph Navigator', desc: 'Complete Phase 4: Graphs & Dynamic Programming', icon: '🕸️', xp: 400, check: p => isAllComplete(getLessonIdsForPhase('dsa', 4)) },
  { id: 'dsa_bigo', category: 'DSA Mastery', name: 'Asymptotic Scientist', desc: 'Complete all Complexity Analysis lessons', icon: '⏱️', xp: 50, check: p => isAllComplete(getLessonIdsForUnit('dsa', 1)) },
  { id: 'dsa_bits', category: 'DSA Mastery', name: 'Bit Manipulator', desc: 'Master binary and low-level bit operations', icon: '⚙️', xp: 75, check: p => isAllComplete(getLessonIdsForUnit('dsa', 2)) },
  { id: 'dsa_linked', category: 'DSA Mastery', name: 'Chain Breaker', desc: 'Complete all Linked List mechanics', icon: '🔗', xp: 80, check: p => isAllComplete(getLessonIdsForUnit('dsa', 4)) },
  { id: 'dsa_master', category: 'DSA Mastery', name: 'Algorithm Architect', desc: 'Finish 100% of the DSA Track', icon: '🧠', xp: 1500, check: p => getTrackProgressPct('dsa') >= 100 },

  // --- Interactive Learning ---
  { id: 'viz_stack', category: 'Interactive Learning', name: 'Memory Inspector', desc: 'Step completely through a Memory Stack animation', icon: '🔍', xp: 40, check: p => !!p.achievementFlags?.stackVizCompleted },
  { id: 'viz_tree', category: 'Interactive Learning', name: 'Tree Climber', desc: 'Insert, delete, and traverse nodes in the BST widget', icon: '🌲', xp: 50, check: p => (p.achievementFlags?.bstInteractions || 0) >= 5 },
  { id: 'viz_graph', category: 'Interactive Learning', name: 'Pathfinder', desc: 'Execute both BFS and DFS visualizer traversals', icon: '🧭', xp: 60, check: p => !!(p.achievementFlags?.bfsRun && p.achievementFlags?.dfsRun) },
  { id: 'viz_array', category: 'Interactive Learning', name: 'Index Slider', desc: 'Perform a dynamic array shift in the array widget', icon: '↕️', xp: 30, check: p => !!p.achievementFlags?.arrayShiftExecuted },
  { id: 'viz_dp', category: 'Interactive Learning', name: 'Tabulator', desc: 'Fill out a Dynamic Programming matrix manually', icon: '🔢', xp: 75, check: p => !!p.achievementFlags?.dpMatrixSolved },

  // --- Quiz & Assessment ---
  { id: 'quiz_perfect_1', category: 'Quiz & Assessment', name: 'Sharp Mind', desc: 'Score 100% on any Progress Check', icon: '🎯', xp: 30, check: p => !!p.achievementFlags?.quiz_perfect_1 },
  { id: 'quiz_streak_5', category: 'Quiz & Assessment', name: 'Flawless Streak', desc: 'Score 100% on 5 Progress Checks in a row', icon: '💎', xp: 150, check: p => (p.achievementFlags?.consecutivePerfectQuizzes || 0) >= 5 },
  { id: 'quiz_fast', category: 'Quiz & Assessment', name: 'Lightning Fast', desc: 'Answer a Progress Check correctly in under 10s', icon: '⚡', xp: 40, check: p => !!p.achievementFlags?.quiz_fast },
  { id: 'quiz_comeback', category: 'Quiz & Assessment', name: 'Resilient Learner', desc: 'Retry a failed Progress Check and score 100%', icon: '🔄', xp: 35, check: p => !!p.achievementFlags?.failedThenPassed },

  // --- Level Milestones ---
  { id: 'lvl_5', category: 'Level Milestones', name: 'Rising Star', desc: 'Reach Level 5', icon: '⭐', xp: 100, check: p => calculateLevel(p.xp).level >= 5 },
  { id: 'lvl_10', category: 'Level Milestones', name: 'Code Prodigy', desc: 'Reach Level 10', icon: '🌟', xp: 250, check: p => calculateLevel(p.xp).level >= 10 },
  { id: 'lvl_25', category: 'Level Milestones', name: 'Grandmaster', desc: 'Reach Level 25', icon: '👑', xp: 500, check: p => calculateLevel(p.xp).level >= 25 },
];

let progress = loadProgress();
let currentTrack = 'ap-csa';

// --- PROGRESS PERSISTENCE ---
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const merged = raw ? { ...DEFAULT_PROGRESS, ...JSON.parse(raw) } : { ...DEFAULT_PROGRESS };
    if (merged.streakFreezes === undefined) merged.streakFreezes = 0;
    if (merged.achievementFlags === undefined) merged.achievementFlags = {};
    if (merged.unlockedAchievements === undefined) merged.unlockedAchievements = [];
    return merged;
  } catch (e) {
    return { ...DEFAULT_PROGRESS };
  }
}

function addXp(amount) {
  const oldLevel = calculateLevel(progress.xp).level;
  progress.xp += amount;
  const newLevel = calculateLevel(progress.xp).level;

  if (newLevel > oldLevel) {
    progress.streakFreezes += (newLevel - oldLevel);
  }

  saveProgress(progress);
  render();
}
document.getElementById('continueLessonBtn')?.addEventListener('click', () => {
  addXp(10);
});

function saveProgress(p) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

function exportProgressData() {
  const payload = {
    v: 1,
    xp: progress.xp,
    completedLessons: progress.completedLessons
  };
  const json = JSON.stringify(payload);
  return `CODEPATH1:${btoa(unescape(encodeURIComponent(json)))}`;
}

function importProgressData(exportString) {
  const prefix = 'CODEPATH1:';
  if (!exportString.startsWith(prefix)) {
    throw new Error('Not a valid CodePath export code.');
  }

  const json = decodeURIComponent(escape(atob(exportString.slice(prefix.length).trim())));
  const data = JSON.parse(json);

  if (typeof data.xp !== 'number' || !Array.isArray(data.completedLessons)) {
    throw new Error('Export code is malformed.');
  }

  progress.xp = data.xp;
  progress.completedLessons = data.completedLessons;
  saveProgress(progress);
  render();
  renderCourseMap();
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  progress = { ...DEFAULT_PROGRESS };
  saveProgress(progress);
}

document.getElementById('exportDataBtn')?.addEventListener('click', () => {
  window.prompt('Copy your CodePath export code (select all, then Ctrl/Cmd+C):', exportProgressData());
});

document.getElementById('importDataBtn')?.addEventListener('click', () => {
  const input = window.prompt('Paste your CodePath export code:');
  if (!input) return;
  try {
    importProgressData(input.trim());
    alert('Progress imported successfully!');
  } catch (e) {
    alert(`Import failed: ${e.message}`);
  }
});



// --- DYNAMIC CALCULATIONS ---
function calculateLevel(xp) {
  let level = 1;
  let remaining = xp;
  let targetXp = 50;

  while (remaining >= targetXp) {
    remaining -= targetXp;
    level++;
    targetXp = 50 + 25 * (level - 1);
  }

  return { level, currentLevelXp: remaining, targetXp };
}

// --- MAIN RENDER CONTROLLER ---
function render() {
  checkAndAwardAchievements();

  const { level, currentLevelXp, targetXp } = calculateLevel(progress.xp);

  // Dynamic Level Progress Circle stroke-dasharray matching XP fraction *within this level*
  const radius = 48;
  const circumference = 2 * Math.PI * radius; // ~301.59
  const circle = document.getElementById('levelProgressCircle');

  if (circle) {
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const xpFraction = Math.min(currentLevelXp / targetXp, 1);
    const strokeOffset = circumference - (xpFraction * circumference);
    circle.style.strokeDashoffset = strokeOffset;
  }

  const pct = Math.min(Math.round((currentLevelXp / targetXp) * 100), 100);

  // Text Stats Displays
  document.getElementById('userLevelDisplay').textContent = `Lvl ${level}`;
  document.getElementById('userLevelPercent').textContent = `${pct}%`;
  document.getElementById('userXpDisplay').textContent = `${currentLevelXp} / ${targetXp} XP to next level`;
  document.getElementById('xpBarFill').style.width = `${pct}%`;

  document.getElementById('welcomeUserName').textContent = progress.userName;
  document.getElementById('sidebarUserName').textContent = progress.userName;
  document.getElementById('profileUserName').textContent = progress.userName;

  document.getElementById('sidebarUserLevel').textContent = `Level ${level} · AP CS A`;
  document.getElementById('profileUserLevel').textContent = `Level ${level} · AP CS A Track`;

  document.getElementById('totalXpValue').textContent = progress.xp.toLocaleString();
  document.getElementById('dayStreakValue').textContent = progress.streak;
  document.getElementById('completedLessonsValue').textContent = progress.completedLessons.length;
  document.getElementById('streakFreezesValue').textContent = progress.streakFreezes;

  document.getElementById('profileTotalXp').textContent = progress.xp.toLocaleString();
  document.getElementById('profileStreak').textContent = progress.streak;
  document.getElementById('profileCompleted').textContent = progress.completedLessons.length;

  // Avatars
  const avatarButtons = document.querySelectorAll('.avatar-mini, #profileAvatarDisplay, #modalAvatarPreview');
  avatarButtons.forEach(el => el.textContent = progress.avatar);

  renderAchievements();
  renderCalendar();
}

// --- RENDER ACHIEVEMENTS ---
function checkAndAwardAchievements() {
  if (!progress.unlockedAchievements) progress.unlockedAchievements = [];
  const oldLevel = calculateLevel(progress.xp).level;
  let unlockedAny = false;

  ACHIEVEMENTS.forEach(ach => {
    if (!progress.unlockedAchievements.includes(ach.id) && ach.check(progress)) {
      progress.unlockedAchievements.push(ach.id);
      progress.xp += ach.xp;
      unlockedAny = true;
    }
  });

  if (unlockedAny) {
    const newLevel = calculateLevel(progress.xp).level;
    if (newLevel > oldLevel) progress.streakFreezes += (newLevel - oldLevel);
    saveProgress(progress);
  }
}

function renderAchievements() {
  const buildCard = (ach) => {
    const unlocked = progress.unlockedAchievements?.includes(ach.id);
    return `
      <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
        <div class="achievement-badge-icon">${ach.icon}</div>
        <div>
          <div class="achievement-name">${ach.name}</div>
          <div class="achievement-status">${ach.desc}</div>
          <div class="achievement-xp">${unlocked ? 'Unlocked' : 'Locked'} · +${ach.xp} XP</div>
        </div>
      </div>
    `;
  };

  const dashboardGrid = document.getElementById('achievementsGrid');
  if (dashboardGrid) {
    const preview = [...ACHIEVEMENTS]
      .sort((a, b) => (progress.unlockedAchievements?.includes(a.id) ? 0 : 1) - (progress.unlockedAchievements?.includes(b.id) ? 0 : 1))
      .slice(0, 6);
    dashboardGrid.innerHTML = preview.map(buildCard).join('');
  }

  const fullGrid = document.getElementById('allAchievementsGrid');
  if (fullGrid) {
    const categories = [...new Set(ACHIEVEMENTS.map(a => a.category))];
    fullGrid.innerHTML = categories.map(cat => `
      <div class="achievement-category">
        <h3 class="achievement-category-title">${cat}</h3>
        <div class="achievements-grid">
          ${ACHIEVEMENTS.filter(a => a.category === cat).map(buildCard).join('')}
        </div>
      </div>
    `).join('');
  }
}

// --- DYNAMIC STREAK CALENDAR (bounded July 2026 → month after current) ---
const CALENDAR_MIN = { year: 2026, month: 6 }; // July 2026 (0-indexed)
let calendarView = null;

function normalizeYM(year, month) {
  year += Math.floor(month / 12);
  month = ((month % 12) + 12) % 12;
  return { year, month };
}

function getCalendarMax() {
  const now = new Date();
  return normalizeYM(now.getFullYear(), now.getMonth() + 1); // one month after today
}

function clampCalendarView(year, month) {
  ({ year, month } = normalizeYM(year, month));
  const max = getCalendarMax();
  const minVal = CALENDAR_MIN.year * 12 + CALENDAR_MIN.month;
  const maxVal = max.year * 12 + max.month;
  const val = Math.max(minVal, Math.min(year * 12 + month, maxVal));
  return { year: Math.floor(val / 12), month: val % 12 };
}

function populateCalendarMonthSelect() {
  const select = document.getElementById('calendarMonthSelect');
  if (!select) return;
  const max = getCalendarMax();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let options = '';
  let y = CALENDAR_MIN.year, m = CALENDAR_MIN.month;
  while (y * 12 + m <= max.year * 12 + max.month) {
    options += `<option value="${y}-${m}">${monthNames[m]} ${y}</option>`;
    m++;
    if (m > 11) { m = 0; y++; }
  }
  select.innerHTML = options;
}

function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  const select = document.getElementById('calendarMonthSelect');
  const prevBtn = document.getElementById('calendarPrevBtn');
  const nextBtn = document.getElementById('calendarNextBtn');
  if (!grid) return;

  if (!calendarView) {
    const now = new Date();
    calendarView = clampCalendarView(now.getFullYear(), now.getMonth());
  }

  const { year, month } = calendarView;
  if (select) select.value = `${year}-${month}`;

  const min = CALENDAR_MIN, max = getCalendarMax();
  if (prevBtn) prevBtn.disabled = (year * 12 + month) <= (min.year * 12 + min.month);
  if (nextBtn) nextBtn.disabled = (year * 12 + month) >= (max.year * 12 + max.month);

  const now = new Date();
  const isCurrentMonth = year === now.getFullYear() && month === now.getMonth();
  const today = now.getDate();

  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const streakStart = isCurrentMonth ? today - progress.streak + 1 : null;

  let html = '';
  ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach(d => html += `<div class="calendar-daylabel">${d}</div>`);
  for (let i = 0; i < firstDayIndex; i++) html += `<div class="calendar-cell empty"></div>`;

  for (let day = 1; day <= daysInMonth; day++) {
    const isStreakDay = isCurrentMonth && streakStart !== null && day >= streakStart && day <= today;
    const isToday = isCurrentMonth && day === today;
    html += `<div class="calendar-cell ${isStreakDay ? 'streak-day' : ''} ${isToday ? 'today' : ''}">${day}</div>`;
  }

  grid.innerHTML = html;
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
  populateCalendarMonthSelect();
  document.getElementById('calendarPrevBtn')?.addEventListener('click', () => {
    calendarView = clampCalendarView(calendarView.year, calendarView.month - 1);
    renderCalendar();
  });
  document.getElementById('calendarNextBtn')?.addEventListener('click', () => {
    calendarView = clampCalendarView(calendarView.year, calendarView.month + 1);
    renderCalendar();
  });
  document.getElementById('calendarMonthSelect')?.addEventListener('change', (e) => {
    const [y, m] = e.target.value.split('-').map(Number);
    calendarView = clampCalendarView(y, m);
    renderCalendar();
  });
  document.getElementById('viewAllAchievementsBtn')?.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector('.nav-item[data-view="view-profile"]')?.classList.add('active');
    document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
    document.getElementById('view-profile')?.classList.add('active');
    document.getElementById('allAchievementsSection')?.scrollIntoView({ behavior: 'smooth' });
  });
});