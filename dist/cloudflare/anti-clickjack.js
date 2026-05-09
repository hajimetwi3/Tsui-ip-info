(function(){
  function lockHidden() {
    try {
      document.documentElement.style.setProperty('display', 'none', 'important');
    } catch (e) {}
  }

  function wipe() {
    lockHidden();
    try { document.documentElement.innerHTML = ''; } catch (e) {}
    lockHidden();
  }

  if (self === top) {
    
    try {
      var s = document.getElementById('antiClickjack');
      if (s && s.parentNode) s.parentNode.removeChild(s);
    } catch (e) {}
    return;
  }

  lockHidden();
  try { top.location = self.location.href; } catch (e) {}

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wipe, { once: true });
    window.addEventListener('load', wipe, { once: true });
  } else {
    wipe();
  }
})();
