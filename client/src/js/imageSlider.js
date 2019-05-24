import { galArr } from "./markups";
import { clear, closeBtn } from "./functions";
import { popup, images } from "./variables";

const renderImage = img => {
  clear();
  const markup = `
<div class="popup__imageSlider">
<span class="popup__close">×</span>
<div class="popup__leftArrow">&#10094;</div>
<figure class="popup__slider">
<img class="popup__img" src="${galArr[img]}">
</figure>
<div class="popup__rightArrow">&#10095;</div>
</div>
`;
  popup.style.display = "flex";
  popup.insertAdjacentHTML("beforeend", markup);
  const close = document.querySelector(".popup__close");
  close.style.color = "#fff";
  close.style.position = "fixed";
  closeBtn(close);
  const leftArrow = document.querySelector(".popup__leftArrow");
  const rightArrow = document.querySelector(".popup__rightArrow");
  let currentImg;
  let checkForSecondDigit = img[5];
  if (checkForSecondDigit !== undefined) {
    currentImg = img[4] + checkForSecondDigit;
  } else {
    currentImg = img[4];
  }
  leftArrow.addEventListener("click", () => {
    currentImg--;
    if (currentImg < 1) {
      currentImg = images.length;
    }
    renderImage(`gal-${currentImg}`);
  });
  rightArrow.addEventListener("click", () => {
    currentImg++;
    if (currentImg > images.length) {
      currentImg = 1;
    }
    renderImage(`gal-${currentImg}`);
  });
};

export default renderImage;
