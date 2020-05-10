`use strict`;

(() => {
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  const stickFooter = () => {
    const FOOTER = document.querySelector(`.page-footer`);
    const MAIN = document.querySelector(`.page-main`);
    const BODY = document.querySelector(`body`);
    const footerHeight = FOOTER.offsetHeight;

    BODY.style.position = `relative`;
    MAIN.style.marginBottom = `${footerHeight}px`;
    FOOTER.style.position = `absolute`;
    FOOTER.style.bottom = `0`;
    FOOTER.style.left = `0`;
    FOOTER.style.width = `100%`;
  };

  if (isIE11) {
    stickFooter();
    window.addEventListener(`resize`, stickFooter);
  }
})();
