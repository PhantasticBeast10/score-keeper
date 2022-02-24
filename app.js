// const p1 = document.querySelector("#p1Display");
// const p2 = document.querySelector("#p2Display");

// let p1score = 0;
// let p2score = 0;

// const incPlayer1 = document.querySelector("#p1Button");
// const incPlayer2 = document.querySelector("#p2Button");

// function checkwin() {
//   if (p1score == max.value) {
//     p1.style.color = "green";
//     p2.style.color = "red";
//     run = false;
//   } else if (p2score == max.value) {
//     p2.style.color = "green";
//     p1.style.color = "red";
//     run = false;
//   }

//   if (run == false) {
//     incPlayer1.disabled = true;
//     incPlayer2.disabled = true;
//   }
// }

// incPlayer1.addEventListener("click", () => {
//   if (run == true) {
//     p1score++;
//     p1.textContent = p1score;
//     checkwin();
//   }
// });
// incPlayer2.addEventListener("click", () => {
//   if (run == true) {
//     p2score++;
//     p2.textContent = p2score;
//     checkwin();
//   }
// });

// reset.addEventListener("click", () => {
//   run = true;
//   p1score = 0;
//   p2score = 0;
//   p1.textContent = p1score;
//   p2.textContent = p2score;
//   p1.style.color = "black";
//   p2.style.color = "black";
//   incPlayer1.disabled = false;
//   incPlayer2.disabled = false;
// });

let run = true;

let max = document.querySelector("#maxScore");
const reset = document.querySelector("#reset");

max.addEventListener("click", () => {
  if (run == false) {
    alert("Press reset to start new game");
  }
});

const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

function checkwin(player, opponent) {
  if(player.score == max.value) {
      player.display.style.color = "green";
      opponent.display.style.color = "red";
      run = false;
      player.button.disabled = true;
      opponent.button.disabled = true;
  }
}

p1.button.addEventListener("click", () => {
  if (run == true) {
    p1.score++;
    p1.display.textContent = p1.score;
    checkwin(p1, p2);
  }
});

p2.button.addEventListener("click", () => {
  if (run == true) {
    p2.score++;
    p2.display.textContent = p2.score;
    checkwin(p2, p1);
  }
});

reset.addEventListener("click", () => {
  run = true;
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = p1.score;
  p2.display.textContent = p2.score;
  p1.display.style.color = "black";
  p2.display.style.color = "black";
  p1.button.disabled = false;
  p2.button.disabled = false;
});
