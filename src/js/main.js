import MainSlider from "./modules/sliders/main-slider";
import MiniSlider from "./modules/sliders/mini-slider";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Form from "./modules/form";
import ShowInfo from "./modules/showInfo";
import Download from "./modules/down";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({
    btns: ".next",
    container: ".page"
  });
  const modulePageSlider = new MainSlider({
    btns: ".next",
    container: ".moduleapp",
    prev: ".prevmodule",
    next: ".nextmodule"
  });
  // const slider = new Slider({btns: ".next"});

  const showUpSlider = new MiniSlider({
    container: ".showup__content-slider",
    prev: ".showup__prev",
    next: ".showup__next",
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    container: ".modules__content-slider",
    prev: ".modules__info-btns .slick-prev",
    next: ".modules__info-btns .slick-next",
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });

  const feedSlider = new MiniSlider({
    container: ".feed__slider",
    prev: ".feed__slider .slick-prev",
    next: ".feed__slider .slick-next",
    activeClass: 'feed__item-active',

  });

 
  modulesSlider.init();
  feedSlider.init();
  slider.render();
  modulePageSlider.render();

  const player = new VideoPlayer(".showup .play", ".overlay");
  player.init();
  new VideoPlayer(".module__video-item .play", ".overlay").init();
  new Difference(".officerold", ".officernew", ".officer__card-item").init();
  new Form(".form").init();
  new ShowInfo(".plus__content").init();
  new Download('.download').init();
  
});