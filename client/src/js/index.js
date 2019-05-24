import "../sass/main.scss";
import "./smoothScrolling";
import renderImage from "./imageSlider";
import {
  background,
  images,
  checkBox,
  reviews,
  contactBtn,
  element
} from "./variables";
import "./lazyLoad";

//popup close
background.addEventListener("click", () => {
  checkBox.checked = false;
});

//reCaptcha
function submitBtn() {
  contactBtn.removeAttribute("disabled");
  contactBtn.style.cursor = "pointer";
}

const onRecaptchaLoad = setInterval(() => {
  if (element !== null && !element.children.length) {
    grecaptcha.render("html_element", {
      sitekey: "6LckkqQUAAAAAByKitcO4o2g0iHzINUYpr0qz6PX",
      callback: submitBtn
    });
    clearInterval(onRecaptchaLoad);
  }
}, 1000);

//ImageSlider
images.forEach(e => {
  e.addEventListener("click", () => {
    renderImage(e.id);
  });
});

//Add titles to yelp Section
const renderTitles = setTimeout(() => {
  if (reviews) {
    reviews.forEach(element => {
      element.children[0].title = "review";
    });
    clearInterval(renderTitles);
  }
}, 1000);

//Parallax effect
const parallax = document.querySelector("#home");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset * 0.7 + "px";
  parallax.style.backgroundPositionY = offset;
});

//Active class for links
const SideBarLinks = Array.from(document.querySelectorAll(".sidebar__link"));
const clearSideBarLinks = () => {
  SideBarLinks.forEach(e => {
    e.classList.remove("sidebar__link--active");
  });
};

const aboutSection = document.getElementById("about");
const reviewsSection = document.getElementById("reviews");
const gallerySection = document.getElementById("gallery");
const contactSection = document.getElementById("contact");

//Position informer
window.addEventListener("scroll", () => {
  const pageYOffset = window.pageYOffset + 3;
  clearSideBarLinks();
  if (pageYOffset < aboutSection.offsetTop) {
    SideBarLinks[0].classList.add("sidebar__link--active");
    SideBarLinks[5].classList.add("sidebar__link--active");
  } else if (
    pageYOffset >= aboutSection.offsetTop &&
    pageYOffset < reviewsSection.offsetTop
  ) {
    SideBarLinks[1].classList.add("sidebar__link--active");
    SideBarLinks[6].classList.add("sidebar__link--active");
  } else if (
    pageYOffset >= reviewsSection.offsetTop &&
    pageYOffset < gallerySection.offsetTop
  ) {
    SideBarLinks[2].classList.add("sidebar__link--active");
    SideBarLinks[7].classList.add("sidebar__link--active");
  } else if (
    pageYOffset >= gallerySection.offsetTop &&
    pageYOffset < contactSection.offsetTop
  ) {
    SideBarLinks[3].classList.add("sidebar__link--active");
    SideBarLinks[8].classList.add("sidebar__link--active");
  } else if (pageYOffset >= contactSection.offsetTop) {
    SideBarLinks[4].classList.add("sidebar__link--active");
    SideBarLinks[9].classList.add("sidebar__link--active");
  }
});
