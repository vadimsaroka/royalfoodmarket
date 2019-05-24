// image slider
import large1 from "../img/gal-1-large.jpg";
import large2 from "../img/gal-2-large.jpg";
import large3 from "../img/gal-3-large.jpg";
import large4 from "../img/gal-4-large.jpg";
import large5 from "../img/gal-5-large.jpg";
import large6 from "../img/gal-6-large.jpg";
import large7 from "../img/gal-7-large.jpg";

import medium1 from "../img/gal-1.jpg";
import medium2 from "../img/gal-2.jpg";
import medium3 from "../img/gal-3.jpg";
import medium4 from "../img/gal-4.jpg";
import medium5 from "../img/gal-5.jpg";
import medium6 from "../img/gal-6.jpg";
import medium7 from "../img/gal-7.jpg";

import small1 from "../img/gal-1-mobile.jpg";
import small2 from "../img/gal-2-mobile.jpg";
import small3 from "../img/gal-3-mobile.jpg";
import small4 from "../img/gal-4-mobile.jpg";
import small5 from "../img/gal-5-mobile.jpg";
import small6 from "../img/gal-6-mobile.jpg";
import small7 from "../img/gal-7-mobile.jpg";

export let galArr = () => {
  if (screen.width < 300) {
    galArr = {
      "gal-1": small1,
      "gal-2": small2,
      "gal-3": small3,
      "gal-4": small4,
      "gal-5": small5,
      "gal-6": small6,
      "gal-7": small7
    };
  } else if (screen.width < 1000) {
    galArr = {
      "gal-1": medium1,
      "gal-2": medium2,
      "gal-3": medium3,
      "gal-4": medium4,
      "gal-5": medium5,
      "gal-6": medium6,
      "gal-7": medium7
    };
  } else {
    galArr = {
      "gal-1": large1,
      "gal-2": large2,
      "gal-3": large3,
      "gal-4": large4,
      "gal-5": large5,
      "gal-6": large6,
      "gal-7": large7
    };
  }
};

galArr();
window.onorientationchange = galArr;
window.addEventListener("resize", galArr);

// Lazy loading
export let lazyLoadImges = () => {
  if (screen.width < 1000) {
    lazyLoadImges = {
      "gal-1": small1,
      "gal-2": small2,
      "gal-3": small3,
      "gal-4": small4,
      "gal-5": small5,
      "gal-6": small6,
      "gal-7": small7
    };
  } else {
    lazyLoadImges = {
      "gal-1": medium1,
      "gal-2": medium2,
      "gal-3": small3,
      "gal-4": small4,
      "gal-5": small5,
      "gal-6": medium6,
      "gal-7": medium7
    };
  }
};

lazyLoadImges();
window.onorientationchange = lazyLoadImges;
window.addEventListener("resize", lazyLoadImges);
