let firstAngle = document.querySelector(".a");
let secondAngle = document.querySelector(".b");
let thirdAngle = document.querySelector(".c");
let firstForm = document.querySelector(".trianglecheck-inputs");
let checkButton = document.querySelector(".button");
let answerTriangle = document.querySelector(".answer");

answerTriangle.style.display = "none";

firstForm.addEventListener("submit", (e) => {
  e.preventDefault();

  answerTriangle.style.display = "";

  let angleA = parseInt(firstAngle.value);
  let angleB = parseInt(secondAngle.value);
  let angleC = parseInt(thirdAngle.value);

  let triangleSum = angleA + angleB + angleC;
  if (
    firstAngle.value == 0 || // why double equal
    secondAngle.value == 0 ||
    thirdAngle.value == 0
  ) {
    answerTriangle.textContent = "Angle Can not be Zero";
    return;
  } else {
    if (triangleSum === 180) {
      //why triple equal
      answerTriangle.textContent =
        "👍 ! You can make a Triangle with these angles";
    } else {
      answerTriangle.textContent = `oops !! the sum is ${triangleSum}, which is not equal to 180 so you can not create any Triangle by using these angles.`;
    }
  }
});
