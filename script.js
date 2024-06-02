document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const diceNumber = document.getElementById("diceNumber");
  const cumulativeSum = document.getElementById("cumulativeSum");

  let total = 0;

  playButton.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    diceNumber.textContent = roll;

    total += roll;
    cumulativeSum.textContent = `Total: ${total}`;
  });
});
