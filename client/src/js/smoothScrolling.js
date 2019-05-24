const smoothScroll = (target, duration) => {
    // define positions
    const currentPosition = document.documentElement.scrollTop + document.body.scrollTop;
    const targetPotition = target.getBoundingClientRect().top;
    let startTime = null;
  
    // define time stamp
    const animationScroll = currentTime => {
      if(!startTime) startTime = currentTime;
  
      const timeElapsed = currentTime - startTime;
      const start = ease(timeElapsed, currentPosition, targetPotition, duration);
      window.scrollTo(0, start);
  
      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    };
  
    // scrolling function
    const ease = (t, b, c, d) => {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };
  
    requestAnimationFrame(animationScroll);
  };
  
  const sidebarLinks = Array.from(document.querySelectorAll(".sidebar__link"));
  
  //Looping
  const scrollLooping = e => {
    e.forEach(e => {
      e.addEventListener("click", () => {
        const target = document.querySelector(e.hash);
        //scrolling time
        smoothScroll(target, 1500);
      });
    });
  };
  
  scrollLooping(sidebarLinks);