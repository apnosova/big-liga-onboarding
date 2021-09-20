const mainScreen = document.querySelector('.main-page');
const content = mainScreen.querySelector('.main-page__content');
const tabletBreakpoint = '(max-width: ' + 1023 + 'px';

const switchScreens = () => {

  if (!mainScreen) {
    return;
  }

  content.classList.add('main-page__content--js');

  const onMainScreenTouch = (evt) => {
    evt.preventDefault();
    content.classList.toggle('main-page__content--switch');

    if (!content.classList.contains('main-page__content--switch')) {
      content.classList.add('main-page__content--switch-back');
    } else {
      content.classList.remove('main-page__content--switch-back');
    }
  };

  if (window.matchMedia(tabletBreakpoint).matches) {
    mainScreen.addEventListener('touchstart', onMainScreenTouch, false);
  }
};

export {switchScreens};
