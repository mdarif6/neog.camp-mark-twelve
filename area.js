let baseAr = document.querySelector(".basear");
let heightAr = document.querySelector(".heightar");
let buttonAr = document.querySelector(".sixthform");
let answerAr = document.querySelector(".resultar");

buttonAr.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputBase = parseInt(baseAr.value);
  let inputheight = parseInt(heightAr.value);
  if (inputBase == 0 || inputheight == 0) {
    answerAr.textContent = ` Base or Hight can not be Zero`;
    return;
  }

  let areaOfTriangle = (inputBase * inputheight) / 2;
  answerAr.textContent = `Area of Triangle is ${areaOfTriangle}`;
});

let sideA = document.querySelector(".sidea");
let sideB = document.querySelector(".sideb");
let sideC = document.querySelector(".sidec");
let buttonArea = document.querySelector(".seventhform");
let answerArea = document.querySelector(".resultarea");

buttonArea.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputSideA = parseInt(sideA.value);
  let inputSideB = parseInt(sideB.value);
  let inputSideC = parseInt(sideC.value);

  if (inputSideA == 0 || inputSideB == 0 || inputSideC == 0) {
    answerArea.textContent = `Any Side of Triangle can not be Zero`;
  }
  let semiperimeter = (inputSideA + inputSideB + inputSideC) / 2;

  let areaCalculation =
    semiperimeter *
    (semiperimeter - inputSideA) *
    (semiperimeter - inputSideB) *
    (semiperimeter - inputSideC);

  let areaOfTriangleWithSides = Math.sqrt(areaCalculation);
  answerArea.textContent = `Area of Triangle if 3 sides given is - ${areaOfTriangleWithSides}`;
});
