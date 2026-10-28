// The Pop-up Blocker only runs in Safari. Another iOS browser (the default browser can be
// changed) opens this page without it, so say so instead of letting the check look done.
(function () {
  var other = /CriOS|FxiOS|EdgiOS|OPiOS|GSA\/|DuckDuckGo|Brave|Whale|SamsungBrowser|NAVER\(|KAKAOTALK/.test(navigator.userAgent);
  if (!other) return;
  var note = document.getElementById('not-safari');
  if (note) note.hidden = false;
})();
