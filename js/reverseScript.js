var button = document.getElementById("perform");
var input = document.getElementById("a");
var output = document.getElementById("b");

button.onclick = function() {
  reverseString(input.value)
};

function reverseString(str) {
  var newStr = str.split("").reverse().join("");
  output.value = newStr;
}