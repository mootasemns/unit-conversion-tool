let numEl = document.getElementById("num-el");
let lengthNum = document.getElementById("length-num");
let volumeNum = document.getElementById("volume-num");
let massNum = document.getElementById("mass-num");

function metersToFeet(meters) {
  return meters * 3.28084;
}

function litersToGallons(liters) {
  return liters * 0.26417;
}

function kilogramsToPounds(kilograms) {
  return kilograms * 2.20462;
}

function displayUnits() {
  let numValue = numEl.value;

  let metersToFeetValue = numValue + " meters = " + metersToFeet(numValue).toFixed(3) + " feet";
  lengthNum.textContent = metersToFeetValue;

  let litersToGallonsValue = numValue + " liters = " + litersToGallons(numValue).toFixed(3) + " gallons";
  volumeNum.textContent = litersToGallonsValue;

  let kilogramsToPoundsValue = numValue + " kilograms = " + kilogramsToPounds(numValue).toFixed(3) + " pounds";
  massNum.textContent = kilogramsToPoundsValue;
}