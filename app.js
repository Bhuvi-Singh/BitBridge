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
// LAYERED CHARACTER AVATAR SYSTEM (v2 — full customization + XP unlocks)
// =========================================================================

const NAME_BANK = [
  'Byte Scholar', 'Pixel Pioneer', 'Logic Luminary', 'Recursive Ranger',
  'Stack Smasher', 'Loop Legend', 'Array Ace', 'Binary Baron',
  'Syntax Sage', 'Debug Dynamo', 'Code Comet', 'Null Ninja',
  'Vector Voyager', 'Query Quartz', 'Cache Champion'
];

const SKIN_TONES = [
  { id: 'skin-1', label: 'Porcelain', hex: '#FFE0C7', unlockXp: 0 },
  { id: 'skin-2', label: 'Fair', hex: '#F4C9A0', unlockXp: 0 },
  { id: 'skin-3', label: 'Light Tan', hex: '#E5B183', unlockXp: 0 },
  { id: 'skin-4', label: 'Medium', hex: '#D9975C', unlockXp: 0 },
  { id: 'skin-5', label: 'Tan', hex: '#C68642', unlockXp: 0 },
  { id: 'skin-6', label: 'Golden', hex: '#B97A45', unlockXp: 0 },
  { id: 'skin-7', label: 'Deep', hex: '#8D5524', unlockXp: 0 },
  { id: 'skin-8', label: 'Espresso', hex: '#5C3A21', unlockXp: 0 },
];

const BODY_SHAPES = [
  { id: 'body-slim', label: 'Slim', unlockXp: 0 },
  { id: 'body-average', label: 'Average', unlockXp: 0 },
  { id: 'body-broad', label: 'Broad', unlockXp: 0 },
];

const HAIR_STYLES = [
  { id: 'hair-none', label: 'Bald', unlockXp: 0 },
  { id: 'hair-short', label: 'Short Crop', unlockXp: 0 },
  { id: 'hair-side-part', label: 'Side Part', unlockXp: 0 },
  { id: 'hair-curly', label: 'Curly', unlockXp: 0 },
  { id: 'hair-long', label: 'Long Wavy', unlockXp: 0 },
  { id: 'hair-buzz', label: 'Buzz Cut', unlockXp: 0 },
  { id: 'hair-bun', label: 'Top Bun', unlockXp: 0 },
  { id: 'hair-afro', label: 'Afro', unlockXp: 0 },
  { id: 'hair-mohawk', label: 'Mohawk', unlockXp: 0 },
  { id: 'hair-pigtails', label: 'Pigtails', unlockXp: 0 },
];

const HAIR_COLORS = [
  { id: 'haircolor-black', label: 'Black', hex: '#1C1C1C', unlockXp: 0 },
  { id: 'haircolor-darkbrown', label: 'Dark Brown', hex: '#3B2417', unlockXp: 0 },
  { id: 'haircolor-brown', label: 'Brown', hex: '#6F4E37', unlockXp: 0 },
  { id: 'haircolor-auburn', label: 'Auburn', hex: '#8A3B24', unlockXp: 0 },
  { id: 'haircolor-blonde', label: 'Blonde', hex: '#D9B26F', unlockXp: 0 },
  { id: 'haircolor-red', label: 'Red', hex: '#B84C2E', unlockXp: 0 },
  { id: 'haircolor-gray', label: 'Silver', hex: '#B5B8BD', unlockXp: 0 },
  { id: 'haircolor-teal', label: 'Teal', hex: '#1C7E9C', unlockXp: 0 },
  { id: 'haircolor-violet', label: 'Violet', hex: '#7C6FDB', unlockXp: 0 },
];

const FACIAL_HAIR = [
  { id: 'facial-none', label: 'None', unlockXp: 0 },
  { id: 'facial-stubble', label: 'Stubble', unlockXp: 0 },
  { id: 'facial-mustache', label: 'Mustache', unlockXp: 0 },
  { id: 'facial-goatee', label: 'Goatee', unlockXp: 0 },
  { id: 'facial-full-beard', label: 'Full Beard', unlockXp: 0 },
];

const EYES = [
  { id: 'eyes-round', label: 'Round', unlockXp: 0 },
  { id: 'eyes-cute', label: 'Cute', unlockXp: 0 },
  { id: 'eyes-serious', label: 'Serious', unlockXp: 0 },
  { id: 'eyes-anime', label: 'Anime', unlockXp: 0 },
  { id: 'eyes-dot', label: 'Dot Eyes', unlockXp: 0 },
];

const EYEBROWS = [
  { id: 'brows-neutral', label: 'Neutral', unlockXp: 0 },
  { id: 'brows-raised', label: 'Raised', unlockXp: 0 },
  { id: 'brows-thick', label: 'Thick', unlockXp: 0 },
  { id: 'brows-angled', label: 'Angled', unlockXp: 0 },
];

const MOUTHS = [
  { id: 'mouth-smile', label: 'Smile', unlockXp: 0 },
  { id: 'mouth-grin', label: 'Grin', unlockXp: 0 },
  { id: 'mouth-neutral', label: 'Neutral', unlockXp: 0 },
  { id: 'mouth-smirk', label: 'Smirk', unlockXp: 0 },
  { id: 'mouth-open', label: 'Open', unlockXp: 0 },
  { id: 'mouth-cool', label: 'Cool', unlockXp: 0 },
];

const NOSES = [
  { id: 'nose-small', label: 'Small', unlockXp: 0 },
  { id: 'nose-button', label: 'Button', unlockXp: 0 },
  { id: 'nose-defined', label: 'Defined', unlockXp: 0 },
];

const TOPS = [
  { id: 'top-teal-tee', label: 'Teal Tee', color: '#1C7E9C', unlockXp: 0 },
  { id: 'top-orange-zip', label: 'Orange Zip', color: '#FEA983', unlockXp: 0 },
  { id: 'top-mono-black', label: 'Mono Black', color: '#2d3748', unlockXp: 0 },
  { id: 'top-navy-hoodie', label: 'Navy Hoodie', color: '#155C73', unlockXp: 50 },
  { id: 'top-violet-vest', label: 'Violet Vest', color: '#7C6FDB', unlockXp: 50 },
  { id: 'top-crimson-jacket', label: 'Crimson Jacket', color: '#B83B3B', unlockXp: 100 },
  { id: 'top-gold-blazer', label: 'Gold Blazer', color: '#C9972B', unlockXp: 150 },
  { id: 'top-forest-flannel', label: 'Forest Flannel', color: '#2F5233', unlockXp: 200 },
  { id: 'top-lab-coat', label: 'Lab Coat', color: '#F1F1F1', unlockXp: 300 },
  { id: 'top-graduation-robe', label: 'Grad Robe', color: '#1a1a2e', unlockXp: 500 },
];

const GLASSES = [
  { id: 'glasses-none', label: 'None', unlockXp: 0 },
  { id: 'glasses-round', label: 'Round', unlockXp: 0 },
  { id: 'glasses-square', label: 'Square', unlockXp: 0 },
  { id: 'glasses-shades', label: 'Shades', unlockXp: 0 },
  { id: 'glasses-cat-eye', label: 'Cat Eye', unlockXp: 0 },
];

const HATS = [
  { id: 'hat-none', label: 'None', unlockXp: 0 },
  { id: 'hat-cap', label: 'Cap', unlockXp: 75 },
  { id: 'hat-beanie', label: 'Beanie', unlockXp: 75 },
  { id: 'hat-headband', label: 'Headband', unlockXp: 125 },
  { id: 'hat-grad-cap', label: 'Grad Cap', unlockXp: 400 },
];

const JEWELRY = [
  { id: 'jewelry-none', label: 'None', unlockXp: 0 },
  { id: 'jewelry-stud', label: 'Ear Studs', unlockXp: 60 },
  { id: 'jewelry-chain', label: 'Chain', unlockXp: 175 },
];

const PROPS = [
  { id: 'prop-none', label: 'None', unlockXp: 0 },
  { id: 'prop-coffee', label: 'Coffee Cup', unlockXp: 40 },
  { id: 'prop-backpack', label: 'Backpack', unlockXp: 90 },
  { id: 'prop-cat', label: 'Pet Cat', unlockXp: 250 },
  { id: 'prop-laptop', label: 'Laptop', unlockXp: 350 },
  { id: 'prop-trophy', label: 'Trophy', unlockXp: 600 },
];

const AVATAR_PARTS = {
  skinTone: SKIN_TONES,
  bodyShape: BODY_SHAPES,
  hairStyle: HAIR_STYLES,
  hairColor: HAIR_COLORS,
  facialHair: FACIAL_HAIR,
  eyes: EYES,
  eyebrows: EYEBROWS,
  mouth: MOUTHS,
  nose: NOSES,
  top: TOPS,
  glasses: GLASSES,
  hat: HATS,
  jewelry: JEWELRY,
  prop: PROPS
};

const CHARACTER_TABS = [
  {
    id: 'skin', label: 'SKIN', groups: [
      { layer: 'skinTone', label: 'Skin Tone' },
      { layer: 'bodyShape', label: 'Body Shape' }
    ]
  },
  {
    id: 'hair', label: 'HAIR', groups: [
      { layer: 'hairStyle', label: 'Hairstyle' },
      { layer: 'hairColor', label: 'Hair Color' },
      { layer: 'facialHair', label: 'Facial Hair' }
    ]
  },
  {
    id: 'face', label: 'FACE', groups: [
      { layer: 'eyes', label: 'Eyes' },
      { layer: 'eyebrows', label: 'Eyebrows' },
      { layer: 'mouth', label: 'Mouth' },
      { layer: 'nose', label: 'Nose' }
    ]
  },
  { id: 'top', label: 'TOP', groups: [{ layer: 'top', label: 'Tops' }] },
  { id: 'glasses', label: 'GLASSES', groups: [{ layer: 'glasses', label: 'Glasses' }] },
  { id: 'hat', label: 'HATS', groups: [{ layer: 'hat', label: 'Hats' }] },
  { id: 'jewelry', label: 'JEWELRY', groups: [{ layer: 'jewelry', label: 'Jewelry' }] },
  { id: 'prop', label: 'PROPS', groups: [{ layer: 'prop', label: 'Props' }] },
];

const DEFAULT_CHARACTER = {
  skinTone: 'skin-4',
  bodyShape: 'body-average',
  hairStyle: 'hair-short',
  hairColor: 'haircolor-darkbrown',
  facialHair: 'facial-none',
  eyes: 'eyes-round',
  eyebrows: 'brows-neutral',
  mouth: 'mouth-smile',
  nose: 'nose-button',
  top: 'top-teal-tee',
  glasses: 'glasses-none',
  hat: 'hat-none',
  jewelry: 'jewelry-none',
  prop: 'prop-none'
};

function findAvatarPart(layer, id) {
  const list = AVATAR_PARTS[layer];
  if (!list) return null;
  return list.find(p => p.id === id) || list[0];
}

function renderEyes(id) {
  return [[43, 33], [57, 33]].map(([cx, cy]) => {
    switch (id) {
      case 'eyes-cute':
        return `<circle cx="${cx}" cy="${cy}" r="2.8" fill="#2d3748"/><circle cx="${cx + 1}" cy="${cy - 1}" r="0.9" fill="#fff"/>`;
      case 'eyes-serious':
        return `<line x1="${cx - 2.5}" y1="${cy}" x2="${cx + 2.5}" y2="${cy}" stroke="#2d3748" stroke-width="1.8" stroke-linecap="round"/>`;
      case 'eyes-anime':
        return `<ellipse cx="${cx}" cy="${cy}" rx="2.6" ry="3.4" fill="#2d3748"/><ellipse cx="${cx}" cy="${cy}" rx="1.1" ry="1.6" fill="#5b8cff"/><circle cx="${cx + 0.8}" cy="${cy - 1.3}" r="0.7" fill="#fff"/>`;
      case 'eyes-dot':
        return `<circle cx="${cx}" cy="${cy}" r="1.1" fill="#2d3748"/>`;
      case 'eyes-round':
      default:
        return `<circle cx="${cx}" cy="${cy}" r="1.9" fill="#2d3748"/>`;
    }
  }).join('');
}

function renderEyebrows(id) {
  switch (id) {
    case 'brows-raised':
      return `<path d="M39 27 Q43.5 24 48 27" stroke="#2d3748" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M52 27 Q56.5 24 61 27" stroke="#2d3748" stroke-width="1.5" fill="none" stroke-linecap="round"/>`;
    case 'brows-thick':
      return `<rect x="39" y="27.5" width="9" height="2.2" rx="1.1" fill="#2d3748"/><rect x="52" y="27.5" width="9" height="2.2" rx="1.1" fill="#2d3748"/>`;
    case 'brows-angled':
      return `<line x1="39" y1="26" x2="48" y2="29" stroke="#2d3748" stroke-width="1.6" stroke-linecap="round"/><line x1="61" y1="26" x2="52" y2="29" stroke="#2d3748" stroke-width="1.6" stroke-linecap="round"/>`;
    case 'brows-neutral':
    default:
      return `<line x1="39" y1="28" x2="48" y2="28" stroke="#2d3748" stroke-width="1.4" stroke-linecap="round"/><line x1="52" y1="28" x2="61" y2="28" stroke="#2d3748" stroke-width="1.4" stroke-linecap="round"/>`;
  }
}

function renderNose(id) {
  switch (id) {
    case 'nose-button':
      return `<circle cx="50" cy="37" r="1.3" fill="rgba(0,0,0,0.18)"/>`;
    case 'nose-defined':
      return `<path d="M49 34 L48 38 Q50 39 52 38" stroke="rgba(0,0,0,0.25)" stroke-width="1" fill="none" stroke-linecap="round"/>`;
    case 'nose-small':
    default:
      return `<line x1="50" y1="35" x2="50" y2="38" stroke="rgba(0,0,0,0.2)" stroke-width="1.2" stroke-linecap="round"/>`;
  }
}

function renderMouth(id) {
  switch (id) {
    case 'mouth-grin':
      return `<path d="M44 42 Q50 47 56 42 Q50 45 44 42Z" fill="#fff" stroke="#b8543f" stroke-width="1"/>`;
    case 'mouth-neutral':
      return `<line x1="45" y1="43" x2="55" y2="43" stroke="#b8543f" stroke-width="1.6" stroke-linecap="round"/>`;
    case 'mouth-smirk':
      return `<path d="M45 43 Q50 44 55 41" stroke="#b8543f" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
    case 'mouth-open':
      return `<ellipse cx="50" cy="43.5" rx="3.4" ry="2.4" fill="#7a2e2e"/>`;
    case 'mouth-cool':
      return `<path d="M44 42.5 Q50 44.5 56 42.5" stroke="#b8543f" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    case 'mouth-smile':
    default:
      return `<path d="M44 42 Q50 46.5 56 42" stroke="#b8543f" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  }
}

function renderFacialHair(id, hairHex) {
  switch (id) {
    case 'facial-stubble':
      return `<path d="M33 40 Q50 52 67 40 Q67 48 50 50 Q33 48 33 40Z" fill="${hairHex}" opacity="0.18"/>`;
    case 'facial-mustache':
      return `<path d="M44 40.5 Q50 39 56 40.5 Q50 41.5 44 40.5Z" fill="${hairHex}"/>`;
    case 'facial-goatee':
      return `<path d="M46 44 Q50 51 54 44 Q50 46.5 46 44Z" fill="${hairHex}"/>`;
    case 'facial-full-beard':
      return `<path d="M32 40 Q33 55 50 56 Q67 55 68 40 Q67 48 50 49 Q33 48 32 40Z" fill="${hairHex}"/>`;
    case 'facial-none':
    default:
      return '';
  }
}

function renderHairLayers(id, hairHex) {
  const capDefault = `<ellipse cx="50" cy="29" rx="19" ry="20" fill="${hairHex}"/>`;
  switch (id) {
    case 'hair-none':
      return { back: '', cap: '', detail: '' };
    case 'hair-buzz':
      return { back: '', cap: `<ellipse cx="50" cy="29" rx="18.5" ry="19.5" fill="${hairHex}" opacity="0.55"/>`, detail: '' };
    case 'hair-afro':
      return { back: '', cap: `<circle cx="50" cy="27" r="23" fill="${hairHex}"/>`, detail: '' };
    case 'hair-curly':
      return {
        back: '',
        cap: capDefault,
        detail: `<g fill="${hairHex}"><circle cx="30" cy="20" r="5.5"/><circle cx="40" cy="11" r="6"/><circle cx="50" cy="9" r="6.5"/><circle cx="60" cy="11" r="6"/><circle cx="70" cy="20" r="5.5"/></g>`
      };
    case 'hair-long':
      return {
        back: `<path d="M31 26 Q28 55 34 78 L41 78 Q36 52 38 30 Z" fill="${hairHex}"/><path d="M69 26 Q72 55 66 78 L59 78 Q64 52 62 30 Z" fill="${hairHex}"/>`,
        cap: capDefault,
        detail: ''
      };
    case 'hair-bun':
      return { back: '', cap: capDefault, detail: `<circle cx="50" cy="8" r="5.5" fill="${hairHex}"/>` };
    case 'hair-mohawk':
      return { back: '', cap: '', detail: `<path d="M45 6 L55 6 L53 24 L47 24 Z" fill="${hairHex}"/>` };
    case 'hair-pigtails':
      return {
        back: `<circle cx="27" cy="40" r="6.5" fill="${hairHex}"/><circle cx="73" cy="40" r="6.5" fill="${hairHex}"/>`,
        cap: capDefault,
        detail: ''
      };
    case 'hair-side-part':
      return { back: '', cap: capDefault, detail: `<path d="M40 12 Q44 18 42 24" stroke="${hairHex}" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.6"/>` };
    case 'hair-short':
    default:
      return { back: '', cap: capDefault, detail: '' };
  }
}

function renderGlasses(id) {
  switch (id) {
    case 'glasses-round':
      return `<g stroke="#2d3748" stroke-width="1.6" fill="none"><circle cx="43" cy="33" r="5.5"/><circle cx="57" cy="33" r="5.5"/><line x1="48.5" y1="33" x2="51.5" y2="33"/></g>`;
    case 'glasses-square':
      return `<g stroke="#2d3748" stroke-width="1.6" fill="none"><rect x="37.5" y="29" width="11" height="8" rx="1.5"/><rect x="51.5" y="29" width="11" height="8" rx="1.5"/><line x1="48.5" y1="33" x2="51.5" y2="33"/></g>`;
    case 'glasses-shades':
      return `<g fill="#1a1a1a"><rect x="36.5" y="29" width="13" height="8" rx="3"/><rect x="50.5" y="29" width="13" height="8" rx="3"/><rect x="49" y="31.5" width="2" height="2"/></g>`;
    case 'glasses-cat-eye':
      return `<g stroke-linejoin="round"><g stroke="#2d3748" stroke-width="1.6" fill="none">
        <path d="M36.5 34 Q36 28.5 43 28.5 Q49 28.5 48.5 34 Q48 37.5 43 37.5 Q37 37.5 36.5 34 Z"/>
        <path d="M63.5 34 Q64 28.5 57 28.5 Q51 28.5 51.5 34 Q52 37.5 57 37.5 Q63 37.5 63.5 34 Z"/>
        <line x1="48.5" y1="33" x2="51.5" y2="33"/>
      </g>
      <path d="M36.5 30 L31.5 25.5 L37.5 28 Z" fill="#2d3748"/>
      <path d="M63.5 30 L68.5 25.5 L62.5 28 Z" fill="#2d3748"/></g>`;
    case 'glasses-none':
    default:
      return '';
  }
}

function renderTop(id) {
  const details = {
    'top-navy-hoodie': `<path d="M38 50 Q50 58 62 50 L62 60 Q50 66 38 60 Z" fill="#0e3d4d"/>`,
    'top-orange-zip': `<line x1="50" y1="48" x2="50" y2="80" stroke="#c96b3f" stroke-width="2"/>`,
    'top-violet-vest': `<path d="M40 48 L50 62 L60 48" fill="none" stroke="#5b4fb8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
    'top-crimson-jacket': `<line x1="50" y1="48" x2="50" y2="80" stroke="#7a1f1f" stroke-width="2"/><path d="M38 52 L44 58 M62 52 L56 58" stroke="#7a1f1f" stroke-width="2" stroke-linecap="round"/>`,
    'top-gold-blazer': `<path d="M42 50 L50 60 L58 50" fill="none" stroke="#8a6614" stroke-width="2"/>`,
    'top-forest-flannel': `<path d="M38 52 L62 52 M40 58 L60 58 M42 64 L58 64" stroke="#1f3a20" stroke-width="1.4"/>`,
    'top-lab-coat': `<line x1="50" y1="48" x2="50" y2="80" stroke="#c7c7c7" stroke-width="2"/><rect x="44" y="56" width="4" height="4" fill="#c7c7c7"/>`,
    'top-graduation-robe': `<path d="M35 50 Q50 62 65 50 L65 82 Q50 90 35 82 Z" fill="#0f0f1e"/><rect x="46" y="46" width="8" height="10" fill="#C9972B"/>`
  };
  return details[id] || '';
}

function renderHat(id, accentColor) {
  switch (id) {
    case 'hat-cap':
      return `<path d="M29 25 Q29 11 50 11 Q71 11 71 25 L71 27 L29 27 Z" fill="${accentColor}"/><ellipse cx="60" cy="27" rx="14" ry="4" fill="${accentColor}"/>`;
    case 'hat-beanie':
      return `<path d="M29 27 Q27 9 50 9 Q73 9 71 27 Z" fill="${accentColor}"/><rect x="27" y="24" width="46" height="5" rx="2" fill="${accentColor}" opacity="0.7"/>`;
    case 'hat-headband':
      return `<rect x="29" y="22" width="42" height="5" fill="${accentColor}"/>`;
    case 'hat-grad-cap':
      return `<rect x="32" y="14" width="36" height="6" fill="#0f0f1e"/><path d="M20 12 L50 4 L80 12 L50 20 Z" fill="#0f0f1e"/><circle cx="80" cy="12" r="1.5" fill="#C9972B"/>`;
    case 'hat-none':
    default:
      return '';
  }
}

function renderJewelry(id) {
  switch (id) {
    case 'jewelry-stud':
      return `<circle cx="31" cy="37" r="1.3" fill="#facc15"/><circle cx="69" cy="37" r="1.3" fill="#facc15"/>`;
    case 'jewelry-chain':
      return `<path d="M42 62 Q50 68 58 62" stroke="#facc15" stroke-width="1.6" fill="none"/><circle cx="50" cy="66" r="2" fill="#facc15"/>`;
    case 'jewelry-none':
    default:
      return '';
  }
}

function renderProp(id) {
  switch (id) {
    case 'prop-cat':
      return `<g transform="translate(74,78)"><ellipse cx="0" cy="8" rx="7" ry="5" fill="#8a8a8a"/><circle cx="6" cy="3" r="3.5" fill="#8a8a8a"/><path d="M4 0 L5 -3 L7 0Z M8 0 L9 -3 L11 0Z" fill="#8a8a8a"/></g>`;
    case 'prop-backpack':
      return `<g transform="translate(70,55)"><rect x="0" y="0" width="14" height="18" rx="3" fill="#6b4a2b"/><rect x="4" y="3" width="6" height="4" rx="1" fill="#8a6640"/></g>`;
    case 'prop-laptop':
      return `<g transform="translate(68,78)"><rect x="0" y="0" width="16" height="10" rx="1" fill="#334155"/><rect x="1.5" y="1.5" width="13" height="7" fill="#7dd3fc"/></g>`;
    case 'prop-coffee':
      return `<g transform="translate(76,80)"><rect x="0" y="2" width="8" height="9" rx="1.5" fill="#fff" stroke="#c7c7c7"/><path d="M8 4 Q12 4 12 7 Q12 10 8 9" fill="none" stroke="#c7c7c7"/></g>`;
    case 'prop-trophy':
      return `<g transform="translate(76,76)"><path d="M2 0 H10 V5 Q10 10 6 10 Q2 10 2 5Z" fill="#f4c430"/><rect x="5" y="10" width="2" height="3" fill="#f4c430"/><rect x="3" y="13" width="6" height="2" fill="#c9972b"/></g>`;
    case 'prop-none':
    default:
      return '';
  }
}

function buildAvatarSVG(character) {
  const skin = findAvatarPart('skinTone', character.skinTone);
  const bodyShape = findAvatarPart('bodyShape', character.bodyShape);
  const top = findAvatarPart('top', character.top);
  const hairColor = findAvatarPart('hairColor', character.hairColor);
  const hair = renderHairLayers(character.hairStyle, hairColor.hex);
  const shoulderRx = bodyShape.id === 'body-slim' ? 24 : bodyShape.id === 'body-broad' ? 32 : 28;

  let svg = `<svg class="avatar-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<rect width="100" height="100" fill="#FDE3C8"/>`;
  svg += hair.back;
  svg += `<ellipse cx="50" cy="75" rx="${shoulderRx}" ry="17" fill="${top.color}"/>`;
  svg += renderTop(character.top);
  svg += `<rect x="43" y="48" width="14" height="13" fill="${skin.hex}"/>`;
  svg += hair.cap;
  svg += `<ellipse cx="50" cy="37" rx="17" ry="18" fill="${skin.hex}"/>`;
  svg += `<ellipse cx="31.5" cy="38" rx="2.6" ry="4.2" fill="${skin.hex}"/><ellipse cx="68.5" cy="38" rx="2.6" ry="4.2" fill="${skin.hex}"/>`;
  svg += renderFacialHair(character.facialHair, hairColor.hex);
  svg += renderEyebrows(character.eyebrows);
  svg += renderEyes(character.eyes);
  svg += renderNose(character.nose);
  svg += renderMouth(character.mouth);
  svg += hair.detail;
  svg += renderGlasses(character.glasses);
  svg += renderHat(character.hat, top.color);
  svg += renderJewelry(character.jewelry);
  svg += renderProp(character.prop);
  svg += `</svg>`;
  return svg;
}

function buildAvatarPartPreview(layer, part, baseCharacter) {
  return buildAvatarSVG({ ...baseCharacter, [layer]: part.id });
}

function renderAvatarDisplays(character) {
  const svgMarkup = buildAvatarSVG(character);
  document.querySelectorAll('.avatar-mini, #profileAvatarDisplay, #modalAvatarPreview')
    .forEach(el => { el.innerHTML = svgMarkup; });
}

function migrateCharacter(oldChar) {
  if (!oldChar) return { ...DEFAULT_CHARACTER };
  if (oldChar.skinTone) return { ...DEFAULT_CHARACTER, ...oldChar }; // already new schema

  // Legacy schema migration (body / outfit / hair / accessory)
  const skinMap = { 'body-fair': 'skin-2', 'body-medium': 'skin-4', 'body-tan': 'skin-5', 'body-deep': 'skin-7', 'body-cool': 'skin-6' };
  const topMap = { 'outfit-teal': 'top-teal-tee', 'outfit-orange': 'top-orange-zip', 'outfit-navy': 'top-navy-hoodie', 'outfit-purple': 'top-violet-vest', 'outfit-mono': 'top-mono-black' };
  const migrated = { ...DEFAULT_CHARACTER };
  if (oldChar.body && skinMap[oldChar.body]) migrated.skinTone = skinMap[oldChar.body];
  if (oldChar.outfit && topMap[oldChar.outfit]) migrated.top = topMap[oldChar.outfit];
  if (oldChar.hair && HAIR_STYLES.some(h => h.id === oldChar.hair)) migrated.hairStyle = oldChar.hair;
  if (oldChar.accessory === 'acc-glasses') migrated.glasses = 'glasses-round';
  if (oldChar.accessory === 'acc-shades') migrated.glasses = 'glasses-shades';
  if (oldChar.accessory === 'acc-cap') migrated.hat = 'hat-cap';
  if (oldChar.accessory === 'acc-headband') migrated.hat = 'hat-headband';
  return migrated;
}

function isPartUnlocked(part) {
  return !part.unlockXp || part.unlockXp <= progress.xp;
}

let activeCustomizeTab = 'skin';
let avatarLockNotice = '';
let currentEngine = null; // Current VisualizerEngine instance

// ---- Algorithm metadata (fill in your own About/Pseudocode/Big-O content) ----
const ALGO_INFO = {
  'bubble-sort': {
    label: 'Bubble Sort',
    about: 'Repeatedly steps through the array, swapping adjacent elements that are out of order until the array is sorted.',
    bigO: { best: 'O(n)', average: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
    pseudocode: {
      english: [
        'repeat until no swaps occur',
        '  for each adjacent pair in the array',
        '    if left > right, swap them',
      ],
      code: [
        'do {',
        '  swapped = false',
        '  for (i = 0; i < n - 1; i++)',
        '    if (arr[i] > arr[i+1])',
        '      swap(arr[i], arr[i+1]); swapped = true',
        '} while (swapped)',
      ],
    },
  },
  'bst': {
    label: 'Binary Search Tree',
    about: 'A tree where each node\'s left subtree holds smaller values and right subtree holds larger values, enabling O(log n) search/insert/delete on average.',
    bigO: { best: 'O(log n)', average: 'O(log n)', worst: 'O(n)', space: 'O(n)' },
    pseudocode: {
      english: [
        'to insert: compare value to node',
        '  go left if smaller, right if larger',
        '  insert at first empty spot',
      ],
      code: [
        'insert(node, val):',
        '  if node is null: return new Node(val)',
        '  if val < node.val: node.left = insert(node.left, val)',
        '  else: node.right = insert(node.right, val)',
        '  return node',
      ],
    },
  },
  'arraylist': {
    label: 'ArrayList',
    about: 'A dynamic array that resizes (doubles capacity) when full. Supports O(1) indexed access, O(n) insert/remove at arbitrary positions, and amortized O(1) add-to-end.',
    bigO: { best: 'O(1)', average: 'O(n)', worst: 'O(n)', space: 'O(n)' },
    pseudocode: {
      english: ['to add at index: shift elements right of index over by one', '  insert value at index', '  if full, double capacity first'],
      code: ['add(val, i):', '  if size == capacity: resize(capacity * 2)', '  for (j = size; j > i; j--) data[j] = data[j-1]', '  data[i] = val; size++'],
    },
  },
};

// ---- Visualizer Registry & Loader ----
async function loadVisualizer(algorithmKey) {
  const canvas = document.getElementById('algoCanvas');
  const controlsContainer = document.getElementById('vizAlgoControls');

  if (!canvas || !controlsContainer) {
    console.error('Canvas or controls container not found');
    return;
  }

  // Reset canvas to baseline size; algorithms grow it dynamically if content needs more room
  canvas.width = 800;
  canvas.height = 500;
  controlsContainer.innerHTML = '';

  try {
    // NOTE: VisualizerEngine.js lives directly in visualizers/ (no core/ subfolder)
    const { VisualizerRegistry } = await import('./visualizers/VisualizerEngine.js');

    const { engine } = VisualizerRegistry.mount(algorithmKey, {
      canvasId: 'algoCanvas',
      controlsId: 'vizAlgoControls'
    });

    currentEngine = engine;

    const playPauseBtn = document.getElementById('vizPlayPauseBtn');
    const syncPlayPauseLabel = () => {
      playPauseBtn.textContent = engine.isPlaying ? '⏸ Pause' : '▶ Play';
    };

    document.getElementById('vizSkipBackBtn').onclick = () => { engine.reset(); syncPlayPauseLabel(); };
    document.getElementById('vizStepBackBtn').onclick = () => { engine.stepBackward(); syncPlayPauseLabel(); };
    playPauseBtn.onclick = () => {
      if (engine.isPlaying) engine.pause();
      else engine.play();
      syncPlayPauseLabel();
    };
    document.getElementById('vizStepFwdBtn').onclick = () => { engine.stepForward(); syncPlayPauseLabel(); };
    document.getElementById('vizSkipFwdBtn').onclick = () => { engine.skipToEnd(); syncPlayPauseLabel(); };
    document.getElementById('vizSpeedSlider').oninput = (e) => {
      engine.setSpeed(parseInt(e.target.value));
    };

    engine.onFrameChange = (current, total) => {
      const info = document.getElementById('vizFrameInfo');
      if (info) info.textContent = `${current} / ${total}`;
      syncPlayPauseLabel();
    };
    syncPlayPauseLabel();

    renderAlgoInfoPanel(algorithmKey);

    const selector = document.getElementById('vizAlgoSelector');
    if (selector) selector.value = algorithmKey;

  } catch (err) {
    console.error(`Failed to load visualizer "${algorithmKey}":`, err);
    controlsContainer.innerHTML = `<p style="color:#ef4444;">Error loading visualizer: ${err.message}</p>`;
  }
}

// ---- Info Panel: About / Pseudocode (English/Code) / Big O ----
let activeInfoTab = 'about';
let activePseudoFormat = 'english';

function renderAlgoInfoPanel(algorithmKey) {
  const data = ALGO_INFO[algorithmKey];
  const panel = document.getElementById('vizInfoPanelBody');
  if (!panel) return;

  if (!data) {
    panel.innerHTML = `<p>No info available for "${algorithmKey}" yet.</p>`;
    return;
  }

  if (activeInfoTab === 'about') {
    panel.innerHTML = `<p>${data.about}</p>`;
  } else if (activeInfoTab === 'bigO') {
    panel.innerHTML = `
      <table class="bigo-table">
        <tr><th>Best</th><td>${data.bigO.best}</td></tr>
        <tr><th>Average</th><td>${data.bigO.average}</td></tr>
        <tr><th>Worst</th><td>${data.bigO.worst}</td></tr>
        <tr><th>Space</th><td>${data.bigO.space}</td></tr>
      </table>`;
  } else if (activeInfoTab === 'pseudocode') {
    const lines = data.pseudocode[activePseudoFormat] || [];
    panel.innerHTML = `
      <div class="pseudo-format-tabs">
        <button class="pseudo-tab ${activePseudoFormat === 'english' ? 'active' : ''}" data-format="english">English</button>
        <button class="pseudo-tab ${activePseudoFormat === 'code' ? 'active' : ''}" data-format="code">Code</button>
      </div>
      <pre class="pseudocode-block">${lines.join('\n')}</pre>`;

    panel.querySelectorAll('.pseudo-tab').forEach(btn => {
      btn.onclick = () => {
        activePseudoFormat = btn.dataset.format;
        renderAlgoInfoPanel(algorithmKey);
      };
    });
  }
}

function renderAvatarItemGrid() {
  const container = document.getElementById('avatarItemGrid');
  if (!container) return;
  const tabConfig = CHARACTER_TABS.find(t => t.id === activeCustomizeTab) || CHARACTER_TABS[0];

  const groupsHtml = tabConfig.groups.map(group => {
    const layer = group.layer;
    const selected = progress.character[layer];
    const itemsHtml = AVATAR_PARTS[layer].map(part => {
      const unlocked = isPartUnlocked(part);
      const isActive = part.id === selected;
      const previewInner = part.hex
        ? `<span class="avatar-swatch" style="background:${part.hex}"></span>`
        : buildAvatarPartPreview(layer, part, progress.character);
      const previewHtml = `<span class="avatar-option-preview">${previewInner}</span>`;
      return `
        <button type="button"
          class="avatar-option ${isActive ? 'active' : ''} ${unlocked ? '' : 'locked'}"
          data-layer="${layer}" data-part-id="${part.id}">
          ${!unlocked ? `<span class="avatar-lock-badge">🔒 ${part.unlockXp} XP</span>` : ''}
          ${previewHtml}
          <span class="avatar-option-label">${part.label}</span>
        </button>
      `;
    }).join('');
    return `<div class="avatar-group"><div class="avatar-group-title">${group.label}</div><div class="avatar-group-grid">${itemsHtml}</div></div>`;
  }).join('');

  container.innerHTML = groupsHtml + (avatarLockNotice ? `<div class="avatar-lock-notice">${avatarLockNotice}</div>` : '');

  container.querySelectorAll('.avatar-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const layer = btn.dataset.layer;
      const partId = btn.dataset.partId;
      const part = findAvatarPart(layer, partId);
      if (!isPartUnlocked(part)) {
        avatarLockNotice = `🔒 "${part.label}" unlocks at ${part.unlockXp} XP — you have ${progress.xp} XP.`;
        renderAvatarItemGrid();
        return;
      }
      avatarLockNotice = '';
      progress.character[layer] = partId;
      saveProgress(progress);
      renderAvatarDisplays(progress.character);
      renderAvatarItemGrid();
    });
  });
}

const STORAGE_KEY = 'bitbridge_dashboard_progress';

const DEFAULT_PROGRESS = {
  userName: 'Byte Scholar',
  character: { ...DEFAULT_CHARACTER },
  xp: 0,
  streak: 0,
  streakFreezes: 0,
  completedLessons: [],
  currentLessonId: null,
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
    const base = { ...DEFAULT_PROGRESS, character: { ...DEFAULT_CHARACTER }, completedLessons: [...DEFAULT_PROGRESS.completedLessons] };
    const merged = raw ? { ...base, ...JSON.parse(raw) } : base;
    if (merged.streakFreezes === undefined) merged.streakFreezes = 0;
    if (merged.achievementFlags === undefined) merged.achievementFlags = {};
    if (merged.unlockedAchievements === undefined) merged.unlockedAchievements = [];
    merged.character = migrateCharacter(merged.character); // migrate from old avatar schema, if needed
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
    v: 2,
    userName: progress.userName,
    character: progress.character,
    xp: progress.xp,
    streak: progress.streak,
    streakFreezes: progress.streakFreezes,
    completedLessons: progress.completedLessons,
    currentLessonId: progress.currentLessonId,
    achievementFlags: progress.achievementFlags,
    unlockedAchievements: progress.unlockedAchievements
  };
  const json = JSON.stringify(payload);
  return `CODEPATH2:${btoa(unescape(encodeURIComponent(json)))}`;
}

function importProgressData(exportString) {
  const prefixV2 = 'CODEPATH2:';
  const prefixV1 = 'CODEPATH1:'; // legacy support

  let data;
  if (exportString.startsWith(prefixV2)) {
    data = JSON.parse(decodeURIComponent(escape(atob(exportString.slice(prefixV2.length).trim()))));
  } else if (exportString.startsWith(prefixV1)) {
    data = JSON.parse(decodeURIComponent(escape(atob(exportString.slice(prefixV1.length).trim()))));
  } else {
    throw new Error('Not a valid BitBridge export code.');
  }

  if (typeof data.xp !== 'number' || !Array.isArray(data.completedLessons)) {
    throw new Error('Export code is malformed.');
  }

  progress.xp = data.xp;
  progress.completedLessons = data.completedLessons;
  if (typeof data.userName === 'string') progress.userName = data.userName;
  if (data.character) progress.character = { ...DEFAULT_CHARACTER, ...data.character };
  if (typeof data.streak === 'number') progress.streak = data.streak;
  if (typeof data.streakFreezes === 'number') progress.streakFreezes = data.streakFreezes;
  if (typeof data.currentLessonId === 'string' || data.currentLessonId === null) progress.currentLessonId = data.currentLessonId;
  if (data.achievementFlags) progress.achievementFlags = data.achievementFlags;
  if (Array.isArray(data.unlockedAchievements)) progress.unlockedAchievements = data.unlockedAchievements;

  saveProgress(progress);
  render();
  renderCourseMap();
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  progress = {
    ...DEFAULT_PROGRESS,
    character: { ...DEFAULT_CHARACTER },
    completedLessons: []
  };
  saveProgress(progress);
}

document.getElementById('exportDataBtn')?.addEventListener('click', () => {
  window.prompt('Copy your BitBridge export code (select all, then Ctrl/Cmd+C):', exportProgressData());
});

document.getElementById('importDataBtn')?.addEventListener('click', () => {
  const input = window.prompt('Paste your BitBridge export code:');
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

  document.getElementById('sidebarUserLevel').textContent = `Level ${level} · ${progress.xp.toLocaleString()} XP`;
  document.getElementById('profileUserLevel').textContent = `Level ${level} · AP CS A Track`;

  document.getElementById('totalXpValue').textContent = progress.xp.toLocaleString();
  document.getElementById('dayStreakValue').textContent = progress.streak;
  document.getElementById('completedLessonsValue').textContent = progress.completedLessons.length;
  document.getElementById('streakFreezesValue').textContent = progress.streakFreezes;

  document.getElementById('profileTotalXp').textContent = progress.xp.toLocaleString();
  document.getElementById('profileStreak').textContent = progress.streak;
  document.getElementById('profileCompleted').textContent = progress.completedLessons.length;

  // Avatars
  renderAvatarDisplays(progress.character);

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
document.addEventListener('DOMContentLoaded', async () => {
  render();
  renderCourseMap();

  // Initialize visualizers (auto-registers all algorithms)
  const { initializeVisualizers } = await import('./visualizers/visualizer-init.js');
  initializeVisualizers().catch(err => console.error('Visualizer init failed:', err));

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

      const targetElement = document.getElementById(targetView);
      if (targetElement) {
        targetElement.classList.add('active');

        // If navigating to visualizer, ensure canvas is ready
        if (targetView === 'view-visualizer') {
          const canvas = document.getElementById('algoCanvas');
          if (canvas) {
            canvas.width = canvas.width || 800;
            canvas.height = canvas.height || 500;
          }
        }
      } else {
        console.warn(`View #${targetView} not found`);
      }
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

  openModalBtns.forEach(btn => btn?.addEventListener('click', () => {
    const usernameSelect = document.getElementById('usernameSelect');
    if (usernameSelect) usernameSelect.value = progress.userName;
    avatarLockNotice = '';
    renderAvatarItemGrid();
    modal?.showModal();
  }));
  closeModalBtn?.addEventListener('click', () => modal?.close());
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  // Character Customization Tabs
  const tabItems = document.querySelectorAll('#characterTabBar .tab-item');
  tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
      tabItems.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCustomizeTab = tab.dataset.tab;
      avatarLockNotice = '';
      renderAvatarItemGrid();
    });
  });
  renderAvatarItemGrid();

  // Username Picker
  const usernameSelect = document.getElementById('usernameSelect');
  if (usernameSelect) {
    usernameSelect.innerHTML = NAME_BANK.map(name => `<option value="${name}">${name}</option>`).join('');
    usernameSelect.value = progress.userName;
    usernameSelect.addEventListener('change', (e) => {
      progress.userName = e.target.value;
      saveProgress(progress);
      render();
    });
  }

  // Continue Lesson Action
  document.getElementById('continueLessonBtn')?.addEventListener('click', () => {
    progress.xp += 100;
    saveProgress(progress);
    render();
  });

  // Course Map Button (Dashboard hero)
  document.getElementById('viewCourseMapBtn')?.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector('.nav-item[data-view="view-course-map"]')?.classList.add('active');
    document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
    document.getElementById('view-course-map')?.classList.add('active');
  });

  // Visualizer: Load algorithm on nav click (example: lesson with data-algo attribute)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.lesson-card[data-algo]')) {
      const algoKey = e.target.closest('.lesson-card[data-algo]').dataset.algo;
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      document.querySelector('.nav-item[data-view="view-visualizer"]')?.classList.add('active');
      document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
      document.getElementById('view-visualizer')?.classList.add('active');
      loadVisualizer(algoKey);
    }
  });

  // Visualizer: Algorithm selector dropdown (pick data structure to view)
  const vizSelector = document.getElementById('vizAlgoSelector');
  if (vizSelector) {
    Object.entries(ALGO_INFO).forEach(([key, data]) => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = data.label;
      vizSelector.appendChild(opt);
    });
    vizSelector.addEventListener('change', (e) => loadVisualizer(e.target.value));
  }

  // Visualizer: Info panel tabs (About / Pseudocode / Big O)
  document.querySelectorAll('.viz-info-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.viz-info-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeInfoTab = tab.dataset.infoTab;
      const selector = document.getElementById('vizAlgoSelector');
      renderAlgoInfoPanel(selector ? selector.value : 'bubble-sort');
    });
  });

  // Auto-load the first registered algorithm when the Visualizer nav is opened
  document.querySelector('.nav-item[data-view="view-visualizer"]')?.addEventListener('click', () => {
    if (!currentEngine) loadVisualizer(vizSelector ? vizSelector.value : 'bubble-sort');
  }, { once: true });



  // Reset Progress Action
  document.getElementById('resetProgressBtn')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all progress?')) {
      resetProgress();
      render();
      renderCourseMap();
    }
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