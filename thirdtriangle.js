let oneAngle = document.querySelector(".thirda");
let secAngle = document.querySelector(".thirdb");
let thirAngle = document.querySelector(".thirdanswer");
let thirdanswer = document.querySelector(".thirdanswer");
let toFindoutThirdAngle = document.querySelector(".thirdangle-inputs");

thirdanswer.style.display = "none";
toFindoutThirdAngle.addEventListener("submit", (e) => {
  e.preventDefault();

  thirdanswer.style.display = "";

  let inputAngleFirst = parseInt(oneAngle.value);
  let inputAngleSecond = parseInt(secAngle.value);

  let sumOfBoth = inputAngleFirst + inputAngleSecond;
  if (sumOfBoth >= 180) {
    thirdanswer.textContent = `Angles Sum can not more than 180`;
    return;
  }
  let requiredThirdAngle = 180 - sumOfBoth;
  if (oneAngle.value == 0 || secAngle.value == 0) {
    thirdanswer.textContent = `Angle can not be Zero`;
  } else {
    thirdanswer.textContent = `Third Angle is: ${requiredThirdAngle}`;
  }
});
