// Languages the site is published in: the folder name (a BCP 47 tag, also the pages'
// <html lang>) and the language's own name. To add one, copy en/ to a new folder, translate
// it and add it here; the root pages and every page's language switch read this list.
var LANGS = { en: 'English', ko: '한국어' };
var FALLBACK_LANG = 'en';

// Browser tags that should land on another folder once it exists (zh-TW → zh-Hant).
var LANG_ALIASES = {
  zh: 'zh-hans', 'zh-cn': 'zh-hans', 'zh-sg': 'zh-hans',
  'zh-tw': 'zh-hant', 'zh-hk': 'zh-hant', 'zh-mo': 'zh-hant'
};

(function () {
  var codes = Object.keys(LANGS);
  var root = document.documentElement;

  function find(tag) {
    for (var i = 0; i < codes.length; i++) {
      if (codes[i].toLowerCase() === tag) return codes[i];
    }
    return null;
  }

  // A browser tag → a published folder: the tag (or its alias), then ever shorter prefixes.
  function match(tag) {
    tag = String(tag || '').toLowerCase();
    var tries = LANG_ALIASES[tag] ? [LANG_ALIASES[tag], tag] : [tag];
    for (var t = 0; t < tries.length; t++) {
      for (var parts = tries[t].split('-'); parts.length; parts.pop()) {
        var hit = find(parts.join('-'));
        if (hit) return hit;
      }
    }
    return null;
  }

  function preferred() {
    var wanted = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language];
    for (var i = 0; i < wanted.length; i++) {
      var hit = match(wanted[i]);
      if (hit) return hit;
    }
    return FALLBACK_LANG;
  }

  // Root pages (<html data-redirect="privacy.html">) forward to the visitor's language,
  // keeping the #anchor: ids are the same in every language.
  if (root.hasAttribute('data-redirect')) {
    location.replace(preferred() + '/' + root.getAttribute('data-redirect') + location.hash);
    return;
  }

  // Language pages: rebuild the switch from LANGS (the static links are the no-script
  // fallback) and carry the #anchor across.
  function buildSwitch() {
    var nav = document.querySelector('nav.lang[data-page]');
    if (!nav) return;
    var page = nav.getAttribute('data-page');
    var current = root.lang;
    nav.textContent = '';
    codes.forEach(function (code) {
      var a = document.createElement('a');
      a.href = '../' + code + '/' + page;
      a.hreflang = code;
      a.lang = code;
      a.textContent = LANGS[code];
      if (code === current) a.setAttribute('aria-current', 'true');
      a.addEventListener('click', function () { a.href = '../' + code + '/' + page + location.hash; });
      nav.appendChild(a);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSwitch);
  } else {
    buildSwitch();
  }
})();
