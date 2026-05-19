import { CustomCursor } from './js/modules/cursor.js';
import { initLanguageToggle } from './js/modules/i18n.js';
import { initRevealObserver } from './js/modules/reveal.js';
import { initContactForm } from './js/modules/contactForm.js';

document.addEventListener('DOMContentLoaded', () => {
  new CustomCursor();
  initLanguageToggle();
  initRevealObserver();
  initContactForm();
});
