const details = document.querySelectorAll("details");

details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      detail !== targetDetail && detail.removeAttribute("open");
    });
  });
});