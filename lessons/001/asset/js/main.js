'use strict';
const showMassage = () => {
  const heroName = document.getElementById("heroName");
  const heroNameValue = heroName.value;

  const output = "入力された内容「" + heroNameValue + "」です。";
  document.getElementById("outputMassage").innerHTML = output;
}
