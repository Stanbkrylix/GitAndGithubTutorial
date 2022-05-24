let btn = document
  .querySelector(".btn")
  .addEventListener("click", function (e) {
    btn.style.backgroundColor = "red";
  });
let arr = [2, 0.34, 5, 6];

const map = arr.map(function (index, val, arr) {
  return index;
});
