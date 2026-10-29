# Unpop compiled filter rules

These are the filter files the Unpop app ships, published unrestricted so anyone can use them
under their license.

| File | What it is | Size |
|---|---|---|
| `ads.json` | Safari content-blocker rules of the **Unpop Ads** extension | 8.0 MB |
| `privacy.json` | Safari content-blocker rules of the **Unpop Privacy** extension | 8.0 MB |
| `popup-hosts.json` | Ad hosts built into the **Unpop Pop-up Blocker** extension | 67 KB |
| `unpop-ko.txt` | **Unpop Korean ad rules**, Unpop's own list (Adblock Plus syntax), one of the sources below | 9 KB |
| `unpop-compat.txt` | **Unpop compatibility exceptions**, Unpop's own list (Adblock Plus syntax), one of the sources below | 3 KB |
| `acknowledgements.json` | Which lists each file is built from: name, authors, license, source | |

## License

These files are adaptations (derived works) of the filter lists below. They are licensed under
**Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**:
https://creativecommons.org/licenses/by-sa/4.0/

CC BY works may be adapted into a CC BY-SA work, CC BY-SA 3.0 allows adaptations under a later
version with the same elements, and EasyList and ABPindo are offered under "CC BY-SA 3.0 or any
later version". If you share these files or something made from them, credit the authors below,
indicate your changes, and share your adaptation under CC BY-SA 4.0. The parts that come from
hostsVN are also subject to its MIT license notice, reproduced below.

The list names are used only to credit their authors. Their maintainers do not endorse Unpop.

## Changes made

The files are machine conversions of the lists below: Adblock Plus filter syntax was converted
to Safari content-blocker JSON (`ads.json`, `privacy.json`) or to a list of hosts
(`popup-hosts.json`). Along the way, rules Safari cannot express were dropped, and rules were
removed, reordered and trimmed to fit size budgets. Rules from different lists are merged.

Built 2026-10-29 10:36 UTC with Unpop's own converter (version 1.1).
The conversion tooling is available on request: open an issue in this repository.

## Sources

| List | Authors | License | Source | Version used | Used in |
|---|---|---|---|---|---|
| EasyList | The EasyList authors (https://easylist.to/) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://easylist.to/easylist/easylist.txt | 202610291011 (29 Oct 2026) | Unpop Ads, Unpop Privacy, Unpop Pop-up Blocker |
| Adblock Warning Removal List | The EasyList authors (https://easylist.to/) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://easylist-downloads.adblockplus.org/antiadblockfilters.txt | 202610291012 (29 Oct 2026) | Unpop Ads, Unpop Privacy |
| YousList | The YousList authors (https://github.com/yous/YousList) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | https://raw.githubusercontent.com/yous/YousList/master/youslist.txt | 20260922 | Unpop Ads, Unpop Privacy |
| Unpop Korean ad rules | The Unpop authors | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | https://jeboong.github.io/unpop-support/rules/unpop-ko.txt (`unpop-ko.txt` here) | 20261029 | Unpop Ads |
| EasyList Germany | The EasyList authors (https://easylist.to/) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://easylist.to/easylistgermany/easylistgermany.txt | 202610290608 (29 Oct 2026) | Unpop Ads, Unpop Privacy, Unpop Pop-up Blocker |
| Liste FR | The Liste FR authors (https://github.com/easylist/listefr) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://easylist-downloads.adblockplus.org/liste_fr.txt | 202610291012 (29 Oct 2026) | Unpop Ads, Unpop Privacy, Unpop Pop-up Blocker |
| EasyList Spanish | The EasyList authors (https://easylist.to/) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://easylist-downloads.adblockplus.org/easylistspanish.txt | 202610291012 (29 Oct 2026) | Unpop Ads, Unpop Privacy, Unpop Pop-up Blocker |
| EasyList Portuguese | The EasyList authors (https://easylist.to/) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://easylist-downloads.adblockplus.org/easylistportuguese.txt | 202610291012 (29 Oct 2026) | Unpop Ads, Unpop Privacy, Unpop Pop-up Blocker |
| EasyList Italy | The EasyList authors (https://easylist.to/) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://easylist-downloads.adblockplus.org/easylistitaly.txt | 202610291012 (29 Oct 2026) | Unpop Ads, Unpop Privacy, Unpop Pop-up Blocker |
| EasyList Polish | The EasyList authors (https://easylist.to/) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://easylist-downloads.adblockplus.org/easylistpolish.txt | 202610291012 (29 Oct 2026) | Unpop Ads, Unpop Privacy, Unpop Pop-up Blocker |
| EasyList Dutch | The EasyList authors (https://easylist.to/) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://easylist-downloads.adblockplus.org/easylistdutch.txt | 202610291012 (29 Oct 2026) | Unpop Ads, Unpop Pop-up Blocker |
| EasyList China | The EasyList authors (https://easylist.to/) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://easylist-downloads.adblockplus.org/easylistchina.txt | 202610291012 (29 Oct 2026) | Unpop Ads, Unpop Privacy, Unpop Pop-up Blocker |
| ABPindo | The ABPindo authors | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://raw.githubusercontent.com/ABPindo/indonesianadblockrules/master/subscriptions/abpindo.txt | 202610261202 (26 Oct 2026) | Unpop Ads, Unpop Privacy, Unpop Pop-up Blocker |
| hostsVN | BigDargon | [MIT](https://github.com/bigdargon/hostsVN/blob/master/LICENSE) | https://raw.githubusercontent.com/bigdargon/hostsVN/master/filters/adservers.txt | 2610242248 (24 Oct 2026) | Unpop Ads, Unpop Pop-up Blocker |
| EasyPrivacy | The EasyList authors (https://easylist.to/) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | https://easylist.to/easylist/easyprivacy.txt | 202610291022 (29 Oct 2026) | Unpop Ads, Unpop Privacy, Unpop Pop-up Blocker |
| EasyList Cookie List | The EasyList authors (https://easylist.to/) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | https://secure.fanboy.co.nz/fanboy-cookiemonster.txt | no version in header, fetched 2026-10-29 | Unpop Ads, Unpop Privacy |
| Fanboy's Social Blocking List | Fanboy and the EasyList authors (https://easylist.to/) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | https://secure.fanboy.co.nz/fanboy-social.txt | 202610291025 (2026-10-29) | Unpop Ads, Unpop Privacy |
| Fanboy's Annoyance List | Fanboy and the EasyList authors (https://easylist.to/) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | https://secure.fanboy.co.nz/fanboy-annoyance.txt | 202610290925 (2026-10-29) | Unpop Ads, Unpop Privacy, Unpop Pop-up Blocker |
| Unpop compatibility exceptions | The Unpop authors | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | https://jeboong.github.io/unpop-support/rules/unpop-compat.txt (`unpop-compat.txt` here) | 20261029 | Unpop Privacy |

All sources are fetched unmodified from the canonical URLs above, except Unpop Korean ad rules and Unpop compatibility exceptions, which are Unpop's own lists and are published here as `unpop-ko.txt` and `unpop-compat.txt`.

## hostsVN license notice (MIT)

```
MIT License

Copyright (c) 2026 BigDargon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
