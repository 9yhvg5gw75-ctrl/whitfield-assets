/* ==========================================================================
   LANDSCAPE-LOCK — shared, reusable across every interactive tour.
   LOCKED STANDARD — Aug 2026. Do not alter without explicit instruction.
   Pair with landscape-lock.css (see that file for the include snippet).

   This script injects the rotate-icon overlay markup automatically, so
   no HTML needs to be copy-pasted into each tour file - just link this
   script and the stylesheet, and it's done.
   ========================================================================== */

(function () {
  var el = document.createElement('div');
  el.className = 'portrait-lock';
  el.innerHTML =
    '<div class="pl-message">Please rotate device to continue</div>' +
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="7" y="2" width="10" height="20" rx="2"></rect>' +
      '<line x1="9" y1="4.5" x2="12" y2="4.5"></line>' +
      '<circle cx="12" cy="19" r="0.6" fill="#C9A24A"></circle>' +
    '</svg>';

  // Insert as the very first element in <body>, before the tour's own markup.
  if (document.body.firstChild) {
    document.body.insertBefore(el, document.body.firstChild);
  } else {
    document.body.appendChild(el);
  }
})();
