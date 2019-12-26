var button = document.getElementById("perform");
var input = document.getElementById("a");
var output = document.getElementById("b");

const vowels = ["a", "e", "i", "o", "u", "y"];

let cutOff = 0;

button.onclick = function() {
  output.value = pigLatin(input.value);
};

function pigLatin(str) {
  str = str.toLowerCase();

  if (vowels.includes(str[0])) {
    return str + "way";
  } else {

    for (var i = 1; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        cutOff = str.indexOf(str[i]);
        break;
      }
    }

    return str.slice(cutOff) + str.slice(0, cutOff) + "ay";
  }

}