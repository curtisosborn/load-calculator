// * cash the DOM
let amp_input = document.getElementById("amperage").value;
let fortyOneSixty_div = document.getElementById("forty-one");
let twelveFive_div = document.getElementById("twelve-five");
let thirtyFour_div = document.getElementById("thirty-four-five");
let sixtyNine_div = document.getElementById("sixty-nine");
let calculate_button = document.getElementById("btn");
let operationHigh_p = document.getElementById("operational-high");
let emergencyHigh_p = document.getElementById("emergency-high");
let fullyLoaded_p = document.getElementById("fully-loaded");
let btn_div = document.getElementById("btn");

// * Global Varible
let voltage = 12500;
let amperage = 0;
const sqrtThree = Math.sqrt(3);

// * Pulls value out of input field
function getNumber() {
  amp_input = document.getElementById("amperage").value;
  amperage = Number(amp_input);
}

// * Calculates loading based on voltage selection and amp input
function loading(amperage, voltage) {
  if (amperage === 0) {
    fullyLoaded_p.innerHTML = "";
    operationHigh_p.innerHTML = "Enter an amperage value..";
    emergencyHigh_p.innerHTML = "";
  } else {
    const phaseToGround = voltage / sqrtThree;
    const loading = (amperage * phaseToGround * 3) / 1000;
    const opHigh = (loading * 0.8).toFixed(2);
    const emHigh = (loading * 0.9).toFixed(2);
    const fullLoad = loading.toFixed(2);
    fullyLoaded_p.innerHTML = `Fully Loaded (100%) = <b>${fullLoad} kva</b>`;
    operationHigh_p.innerHTML = `Operational High (80%) = <b>${opHigh} kva</b>`;
    emergencyHigh_p.innerHTML = `Emergency High (90%) = <b>${emHigh} kva</b>`;
  }
}

// * On load set voltage selection
function onLoad() {
  twelveFive_div.classList.add("select-glow");
}

// * Event listeners
fortyOneSixty_div.addEventListener("click", function() {
  voltage = 4160;
  fortyOneSixty_div.classList.add("select-glow");
  setTimeout(function() {
    twelveFive_div.classList.remove("select-glow");
  }, 100);
  setTimeout(function() {
    thirtyFour_div.classList.remove("select-glow");
  }, 100);
  setTimeout(function() {
    sixtyNine_div.classList.remove("select-glow");
  }, 100);
});
twelveFive_div.addEventListener("click", function() {
  voltage = 12500;
  twelveFive_div.classList.add("select-glow");
  setTimeout(function() {
    fortyOneSixty_div.classList.remove("select-glow");
  }, 100);
  setTimeout(function() {
    thirtyFour_div.classList.remove("select-glow");
  }, 100);
  setTimeout(function() {
    sixtyNine_div.classList.remove("select-glow");
  }, 100);
});
thirtyFour_div.addEventListener("click", function() {
  voltage = 34500;
  thirtyFour_div.classList.add("select-glow");
  setTimeout(function() {
    fortyOneSixty_div.classList.remove("select-glow");
  }, 100);
  setTimeout(function() {
    twelveFive_div.classList.remove("select-glow");
  }, 100);
  setTimeout(function() {
    sixtyNine_div.classList.remove("select-glow");
  }, 100);
});
sixtyNine_div.addEventListener("click", function() {
  voltage = 69000;
  sixtyNine_div.classList.add("select-glow");
  setTimeout(function() {
    fortyOneSixty_div.classList.remove("select-glow");
  }, 100);
  setTimeout(function() {
    thirtyFour_div.classList.remove("select-glow");
  }, 100);
  setTimeout(function() {
    twelveFive_div.classList.remove("select-glow");
  }, 100);
});
btn_div.addEventListener("click", function() {
  loading(amperage, voltage);
});
