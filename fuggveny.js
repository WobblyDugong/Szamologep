function osszead(a, b) {
  console.log("összead");
  return a + b;
}
var eredmeny = osszead(3, 4);
console.log(eredmeny);

var osszeadas = function (a, b) {
  return a + b;
};
console.log(osszeadas(5 + 6));
function ID(elem) {
  return document.getElementById(elem);
}

window.addEventListener("load", init);
function init() {
  ID("szamol").addEventListener("click", function (a, b) {
    console.log("összead");
    return a + b;
  });
}
