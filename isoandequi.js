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

  if (inputFirstLeg == 0 || inputSecondLeg == 0 || inputThirdLeg == 0) {
    answerLeg.textContent = `Any Arm of Triangle can not be Zero`;
    return;
  }

  if (
    inputFirstLeg === inputSecondLeg &&
    inputFirstLeg === inputThirdLeg &&
    inputSecondLeg === inputThirdLeg
  ) {
    answerLeg.textContent = ` Thhis is an Equilateral Triangle`;
  } else if (
    inputFirstLeg == inputSecondLeg ||
    inputFirstLeg == inputThirdLeg ||
    inputSecondLeg == inputThirdLeg
  ) {
    answerLeg.textContent = `This is an Isosceles Triangle`;
  } else {
    answerLeg.textContent = `Neither Equilatera nor Isosceles Triangle`;
  }

  // ) {
  //   answerLeg.textContent = ` iso`;
  // } else {
  //   answerLeg.textContent = ` tow side must equal`;
  // }
});
