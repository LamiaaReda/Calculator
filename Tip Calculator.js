let bill = document.querySelector(".bill");
let quality = document.querySelector(".quality");
let people = document.querySelector(".people");
let calculate = document.querySelector(".btn");
let amount = document.querySelector(".tip");

calculate.onclick = function () {
  if (bill.value == 0 || people.value == 0) {
    alr = alert("please Enter All Entity");
  } else {
    tip = (bill.value / people.value) * quality.value;
    document.getElementById("Tip").innerHTML = tip;
  }
};
