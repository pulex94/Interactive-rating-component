let ratingScore = 0;
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-value");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      ratingScore = e.target.value;
    });
  });
});

const rating = document.getElementById("rating");
const p = document.createElement("p");

/* ------------------ */
const confirmBtn = document.getElementById("confirm-btn");
const continueBtn = document.getElementById("continue-btn");
const container = document.querySelector(".container");
const thankYou = document.querySelector(".thank-you");
/* ------------------ */
confirmBtn.addEventListener("click", () => {
  if (ratingScore === 0) {
    return;
  }
  p.innerHTML = "You selected " + ratingScore + " out of 5";
  rating.appendChild(p);
  thankYou.style.display = "flex";
  container.style.display = "none";
});
continueBtn.addEventListener("click", () => {
  thankYou.style.display = "none";
  container.style.display = "flex";
});
