let baseAr = document.querySelector(".basear");
let heightAr = document.querySelector(".heightar");
let buttonAr = document.querySelector(".area-bh-inputs");
let answerAr = document.querySelector(".resultar");

const areaoneSection = document.querySelector(".areaone-section");
const areatwoSection = document.querySelector(".areatwo-section");

areaoneSection.style.display = "none";
areatwoSection.style.display = "none";

document.body.addEventListener("change", (e) => {
  if (e.target.value === "bybaseheight") {
    areaoneSection.style.display = "";
    areatwoSection.style.display = "none";
  }

  if (e.target.value === "bysides") {
    areatwoSection.style.display = "";
    areaoneSection.style.display = "none";
  }
});

answerAr.style.display = "none";
buttonAr.addEventListener("submit", (e) => {
  e.preventDefault();

  answerAr.style.display = "";

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
let buttonArea = document.querySelector(".area-seides-inputs");
let answerArea = document.querySelector(".resultarea");

answerArea.style.display = "none";

buttonArea.addEventListener("submit", (e) => {
  e.preventDefault();

  answerArea.style.display = "";

  let inputSideA = parseInt(sideA.value);
  let inputSideB = parseInt(sideB.value);
  let inputSideC = parseInt(sideC.value);

  if (inputSideA == 0 || inputSideB == 0 || inputSideC == 0) {
    answerArea.textContent = `Any Side of Triangle can not be Zero`;
    return;
  }
  let semiperimeter = (inputSideA + inputSideB + inputSideC) / 2;

  if (
    semiperimeter < inputSideA ||
    semiperimeter < inputSideB ||
    semiperimeter < inputSideC
  ) {
    answerArea.textContent = `Semiperimeter can not less to any side`;
    return;
  }
  let areaCalculation =
    semiperimeter *
    (semiperimeter - inputSideA) *
    (semiperimeter - inputSideB) *
    (semiperimeter - inputSideC);

  let areaOfTriangleWithSides = Math.sqrt(areaCalculation);
  answerArea.textContent = `Area of Triangle if 3 sides given is - ${areaOfTriangleWithSides}`;
});
