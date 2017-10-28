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
  } else if (choice === 'html') {
    document.getElementById("customer").style.visibility = "hidden";
    document.getElementById("filing").style.visibility = "hidden";
    document.getElementById("css").style.visibility = "visible";
  } else if (choice === 'public') {
    document.getElementById("customer").style.visibility = "hidden";
    document.getElementById("filing").style.visibility = "hidden";
    document.getElementById("css").style.visibility = "hidden";
    document.getElementById("publicSpeaking").style.visibility = "visible";
  } else if (choice === 'photoshop') {
    document.getElementById("customer").style.visibility = "hidden";
    document.getElementById("filing").style.visibility = "hidden";
    document.getElementById("css").style.visibility = "hidden";
    document.getElementById("publicSpeaking").style.visibility = "hidden";
    document.getElementById("fcp").style.visibility = "visible";
  }
}

function disappear() {
  document.getElementById("customer").style.visibility = "hidden";
  document.getElementById("filing").style.visibility = "hidden";
  document.getElementById("css").style.visibility = "hidden";
  document.getElementById("publicSpeaking").style.visibility = "hidden";
  document.getElementById("fcp").style.visibility = "hidden";
}
