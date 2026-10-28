# Unpop support site

Support, privacy policy, terms and open-source licenses for **Unpop**, the pop-up ad blocker for
Safari on iPhone and iPad.

Published with GitHub Pages: https://jeboong.github.io/unpop-support/

Static files only: no build step, and no cookies, analytics, trackers, external fonts or scripts
(each page sets a Content Security Policy that allows only this site).

## Layout

| Path | |
|---|---|
| `index.html`, `support.html`, `privacy.html`, `terms.html`, `licenses.html` | Language pickers. They forward to `<lang>/<page>` by the browser's languages (fallback English), keeping any `#anchor`. These are the URLs the app links to. |
| `en/`, `ko/` | The pages, one folder per language. Anchor ids are the same in every language. |
| `lang.js` | The published languages: root forwarding and every page's language switch read this list. |
| `style.css`, `icon.svg` | The only stylesheet and the icon. |
| `rules/` | The compiled filter rules the app ships, under CC BY-SA 4.0. See `rules/README.md`. |

## Adding a language

1. Copy `en/` to a folder named by the language tag (`ja/`, `zh-Hant/`, `pt-BR/`…), translate
   the pages and set `<html lang>` to that tag.
2. Add the tag and the language's own name to `LANGS` in `lang.js`.
3. Add the language to the static language links and `hreflang` alternates of every page and to
   the root pickers. (With JavaScript the switch is rebuilt from `lang.js`; the static links
   are the fallback.)

## Contact

Issues: https://github.com/jeboong/unpop-support/issues · Email: jehyung25@gmail.com

Text © 2026 Unpop. Files in `rules/` are licensed CC BY-SA 4.0 (see `rules/README.md`).
