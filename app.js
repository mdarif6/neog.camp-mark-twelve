let firstAngle = document.querySelector(".a");
let secondAngle = document.querySelector(".b");
let thirdAngle = document.querySelector(".c");
let firstForm = document.querySelector(".firstform");
let checkButton = document.querySelector(".button");
let answerTriangle = document.querySelector(".answer");

firstForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let angleA = parseInt(firstAngle.value);
  let angleB = parseInt(secondAngle.value);
  let angleC = parseInt(thirdAngle.value);

  let triangleSum = angleA + angleB + angleC;
  console.log(angleA);
  console.log(angleB);
  console.log(angleC);
  if (
    firstAngle.value === "" ||
    secondAngle.value === "" ||
    thirdAngle.value === ""
  ) {
    answerTriangle.textContent = "can not empty";
    return;
  } else {
    if (triangleSum === 180) {
      answerTriangle.textContent = "Perfect, it can make a triangle";
    } else {
      answerTriangle.textContent = `The sum is ${triangleSum}, it is not equal to 180 so no triangle can make`;
    }
  }
});

let oneAngle = document.querySelector(".thirda");
let secAngle = document.querySelector(".thirdb");
let thirAngle = document.querySelector(".thirdanswer");
let thirdanswer = document.querySelector(".thirdanswer");
let toFindoutThirdAngle = document.querySelector(".secondform");

toFindoutThirdAngle.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputAngleFirst = parseInt(oneAngle.value);
  let inputAngleSecond = parseInt(secAngle.value);

  let sumOfBoth = inputAngleFirst + inputAngleSecond;
  let requiredThirdAngle = 180 - sumOfBoth;
  if (oneAngle.value !== "" || secAngle.value !== "") {
    thirdanswer.textContent = `The requird angle is ${requiredThirdAngle}`;
  }
});

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

let firstLeg = document.querySelector(".firstleg");
let secondLeg = document.querySelector(".secondleg");
let thirdLeg = document.querySelector(".thirdleg");
let buttonLeg = document.querySelector(".fourthform");
let answerLeg = document.querySelector(".answerleg");

buttonLeg.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputFirstLeg = parseInt(firstLeg.value);
  let inputSecondLeg = parseInt(secondLeg.value);
  let inputThirdLeg = parseInt(thirdLeg.value);

  if (
    inputFirstLeg == inputSecondLeg ||
    inputFirstLeg == inputThirdLeg ||
    inputSecondLeg == inputThirdLeg
  ) {
    answerLeg.textContent = ` iso`;
  } else {
    answerLeg.textContent = ` tow side must equal`;
  }
});

let base = document.querySelector(".base");
let height = document.querySelector(".height");
let buttonHypo = document.querySelector(".fifthform");
let answerHypo = document.querySelector(".resulthypo");

buttonHypo.addEventListener("submit", (e) => {
  e.preventDefault();

  let baseLength = parseInt(base.value);
  let heightLength = parseInt(height.value);
  let baseAndHeight = baseLength ** 2 + heightLength ** 2;
  let hypotenuse = Math.sqrt(baseAndHeight);
  answerHypo.textContent = hypotenuse;
});
