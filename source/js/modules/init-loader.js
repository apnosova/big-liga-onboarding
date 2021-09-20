const loader = document.querySelector('.loader');
const mainScreen = document.querySelector('.main-page');
const header = document.querySelector('.header');
const desktopBreakpoint = '(min-width: ' + 1024 + 'px';

const initLoader = () => {
  if (!loader) {
    return;
  }

  loader.classList.add('loader--show');

  const restartHeaderAnimation = () => {
    header.classList.remove('header--start-animation');
    void mainScreen.offsetWidth;
    header.classList.add('header--start-animation');
  };

  const restartMainScreenAnimation = () => {
    mainScreen.classList.remove('main-page--start-animation');
    void mainScreen.offsetWidth;
    mainScreen.classList.add('main-page--start-animation');
  };

  const onLoaderEnterPress = (evt) => {
    if (evt.key === 'Enter') {
      loader.classList.remove('loader--show');
      restartHeaderAnimation();
      restartMainScreenAnimation();
    }
  };

  const onLoaderTouch = (evt) => {
    evt.preventDefault();
    loader.classList.remove('loader--show');
    if (window.matchMedia(desktopBreakpoint).matches) {
      restartHeaderAnimation();
    }
    restartMainScreenAnimation();
  };

  if (window.matchMedia(desktopBreakpoint).matches) {
    document.addEventListener('keydown', onLoaderEnterPress);
  } else {
    loader.addEventListener('touchstart', onLoaderTouch, false);
  }
};

export {initLoader};
