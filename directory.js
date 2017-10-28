var custom = false;
var filin = false;

function appear(choice) {
  if (choice === 'customerSkills') {
  document.getElementById("customer").style.visibility = "visible";
  document.getElementById("filing").style.visibility = "hidden";
  custom = false;
} else if (choice === 'filing/organizing') {
  document.getElementById("filing").style.visibility = "visible";
  document.getElementById("customer").style.visibility = "hidden";
  filin = false;
  }
}

function disappear() {
  if (custom === false && filin === false) {
  document.getElementById("customer").style.visibility = "hidden";
  document.getElementById("filing").style.visibility = "hidden";
  }
}
