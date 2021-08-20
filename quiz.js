const quizForm = document.querySelector(".quizform");
const quizButton = document.querySelector(".quizbutton");
const quizOutput = document.querySelector(".quizoutput");

const answers = [
  "scalene triangle",
  "Hypotenuse",
  "Isosceles triangles",
  "isosceles triangle",
  "equilateral triangle",
  "ASA",
];

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  let score = 0;
  let index = 0;
  function finalScore() {
    const formUpdated = new FormData(quizForm);

    // if (formUpdated.values().length !== answers.length) {
    //   console.log("try all");
    //   return;
    // }
    for (let value of formUpdated.values()) {
      console.log(value);
      if (value === answers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }
  }
  finalScore();
  console.log(score);
  quizOutput.textContent = `Final Score is ` + score;
});
