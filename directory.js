var fcpiterationCount = 1;
var psiterationCount = 1;

function appear(choice) {
  if (choice === 'customerSkills') {
    document.getElementById("customer").style.visibility = "visible";
    document.getElementById("customer").style.animationIterationCount = "1";
    document.getElementById("customer").style.animationPlayState = "running";
    document.getElementById("customer").style.animationFillMode = "forwards";
  } else if (choice === 'filing/organizing') {
    document.getElementById("filing").style.visibility = "visible";
    document.getElementById("filing").style.animationPlayState = "running";
    document.getElementById("filing").style.animationIterationCount = "1";
    document.getElementById("filing").style.animationFillMode = "forwards";
    document.getElementById("filing").style.animationPlayState = "running";
    document.getElementById("customer").style.visibility = "hidden";
  } else if (choice === 'html') {
    document.getElementById("customer").style.visibility = "hidden";
    document.getElementById("filing").style.visibility = "hidden";
    document.getElementById("css").style.visibility = "visible";
    document.getElementById("css").style.animationPlayState = "running";
    document.getElementById("css").style.animationIterationCount = "1";
    document.getElementById("css").style.animationFillMode = "forwards";
  } else if (choice === 'public') {
    document.getElementById("customer").style.visibility = "hidden";
    document.getElementById("filing").style.visibility = "hidden";
    document.getElementById("css").style.visibility = "hidden";
    document.getElementById("publicSpeaking").style.visibility = "visible";
    document.getElementById("publicSpeaking").style.animationIterationCount = "1";
    document.getElementById("publicSpeaking").style.animationFillMode = "forwards";
    document.getElementById("publicSpeaking").style.animationPlayState = "running";
  } else if (choice === 'photoshop') {
    document.getElementById("customer").style.visibility = "hidden";
    document.getElementById("filing").style.visibility = "hidden";
    document.getElementById("css").style.visibility = "hidden";
    document.getElementById("publicSpeaking").style.visibility = "hidden";
    document.getElementById("fcp").style.visibility = "visible";
    document.getElementById("fcp").style.animationIterationCount = "1";
    document.getElementById("fcp").style.animationFillMode = "forwards";
    document.getElementById("fcp").style.animationPlayState = "running";
  }
}

function disappear() {
  document.getElementById("customer").style.visibility = "hidden";
  document.getElementById("customer").style.animationFillMode = "backwards";
  document.getElementById("customer").style.animationPlayState = "paused";
  document.getElementById("customer").style.animationIterationCount = "initial";
  document.getElementById("filing").style.visibility = "hidden";
  document.getElementById("filing").style.animationFillMode = "backwards";
  document.getElementById("filing").style.animationPlayState = "paused";
  document.getElementById("filing").style.animationIterationCount = "initial";
  document.getElementById("css").style.visibility = "hidden";
  document.getElementById("css").style.animationFillMode = "backwards";
  document.getElementById("css").style.animationPlayState = "paused";
  document.getElementById("css").style.animationIterationCount = "initial";
  document.getElementById("publicSpeaking").style.visibility = "hidden";
  document.getElementById("publicSpeaking").style.animationFillMode = "backwards";
  document.getElementById("publicSpeaking").style.animationPlayState = "paused";
  document.getElementById("publicSpeaking").style.animationIterationCount = "initial";
  document.getElementById("fcp").style.visibility = "hidden";
  document.getElementById("fcp").style.animationFillMode = "backwards";
  document.getElementById("fcp").style.animationPlayState = "paused";
  document.getElementById("fcp").style.animationIterationCount = "initial";
}

function start() {
  document.getElementById("customer").style.animationPlayState = "paused";
  document.getElementById("filing").style.animationPlayState = "paused";
  document.getElementById("css").style.animationPlayState = "paused";
  document.getElementById("publicSpeaking").style.animationPlayState = "paused";
  document.getElementById("fcp").style.animationPlayState = "paused";
}
