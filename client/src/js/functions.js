import { popup } from "./variables";

// clear popup
export const clear = () => {
  popup.innerHTML = "";
  popup.style.display = "none";
};

// render close btn
export const closeBtn = e => {
  e.addEventListener("click", () => {
    clear();
  });
};

// close window
popup.addEventListener("click", e => {
  if (e.target == popup) {
    clear();
  }
});
