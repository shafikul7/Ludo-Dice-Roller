document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const currentRoll = document.getElementById("currentRoll");
  const cumulativeSum = document.getElementById("cumulativeSum");

  let sum = localStorage.getItem("cumulativeSum")
    ? parseInt(localStorage.getItem("cumulativeSum"))
    : 0;
  cumulativeSum.textContent = sum;

  playButton.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    currentRoll.textContent = roll;

    sum += roll;
    cumulativeSum.textContent = sum;

    localStorage.setItem("cumulativeSum", sum);
  });
});
