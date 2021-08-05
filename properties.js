let firstAngleProp = document.querySelector(".firstangleprop");
let secondAngleProp = document.querySelector(".secondangleprop");
let thirdAngleProp = document.querySelector(".thirdangleprop");
let answerProp = document.querySelector(".answerprop");
let checkProp = document.querySelector(".thirdform");

checkProp.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputAngleFirstProp = parseInt(firstAngleProp.value);
  let inputAngleSecondProp = parseInt(secondAngleProp.value);
  let inputAngleThirdProp = parseInt(thirdAngleProp.value);

  let sumOfProp =
    inputAngleFirstProp + inputAngleSecondProp + inputAngleThirdProp;
  if (
    inputAngleFirstProp == 0 ||
    inputAngleSecondProp == 0 ||
    inputAngleThirdProp == 0
  ) {
    answerProp.textContent = `No Angle can be Zero`;
    return;
  }
  if (sumOfProp === 180) {
    if (
      inputAngleFirstProp === 90 ||
      inputAngleSecondProp === 90 ||
      inputAngleThirdProp === 90
    ) {
      answerProp.textContent = `it is a right angle triange having one angle 90`;
    } else if (
      inputAngleFirstProp < 90 &&
      inputAngleSecondProp < 90 &&
      inputAngleThirdProp < 90
    ) {
      answerProp.textContent = `it is an acute angle triange having all angles less than 90`;
    } else if (
      inputAngleFirstProp > 90 ||
      inputAngleSecondProp > 90 ||
      inputAngleThirdProp > 90
    ) {
      answerProp.textContent = `it is an obtuse angle triange having One Angle more than 90`;
    }
  } else {
    answerProp.textContent = ` The sum of all Anlges must be 180`;
  }
});
