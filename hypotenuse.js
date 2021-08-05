let base = document.querySelector(".base");
let height = document.querySelector(".height");
let buttonHypo = document.querySelector(".fifthform");
let answerHypo = document.querySelector(".resulthypo");

buttonHypo.addEventListener("submit", (e) => {
  e.preventDefault();

  let baseLength = parseInt(base.value);
  let heightLength = parseInt(height.value);

  if (baseLength == 0 || heightLength == 0) {
    answerHypo.textContent = `Any base or hight can not be zero of Triangle`;
    return;
  }
  let baseAndHeight = baseLength ** 2 + heightLength ** 2;
  let hypotenuse = Math.sqrt(baseAndHeight);
  answerHypo.textContent = `The Hypotenuse of this Triangle is ${hypotenuse}`;
});
