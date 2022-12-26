// C
function DeleteMe() {
  document.getElementById("result").value = "";
}
//
function Calculator(NewValue) {
  document.getElementById("result").value += NewValue;
}

// Answer
function Answer() {
  var a = document.getElementById("result").value;
  var b = eval(a);
  document.getElementById("result").value = b;
}
