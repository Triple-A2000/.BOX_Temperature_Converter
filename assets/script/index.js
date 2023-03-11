'use strict';

/*
    JavaScript basics
    Ayomide Boye-Ogundiya

    .BOX Temperature Converter
*/

const temperatureInput = document.querySelector(".temperature");
const convertBtn = document.querySelector(".convert button");
const resultContainer = document.getElementById("result");

function convertTemperature() {
  const temperatureValue = temperatureInput.value;
  const conversionType = document.querySelector('input[name="conversion"]:checked').value;

  if (temperatureValue === "" || isNaN(temperatureValue)) {
    alert("Please enter a valid temperature value.");
    return;
  }

  let result;

  if (conversionType === "to-celsius") {
    result = (temperatureValue - 32) * (5 / 9);
    resultContainer.innerHTML = `${temperatureValue}°F is equal to ${result.toFixed(2)}°C.`;
  } else {
    result = temperatureValue * (9 / 5) + 32;
    resultContainer.innerHTML = `${temperatureValue}°C is equal to ${result.toFixed(2)}°F.`;
  }
}

function toggleTheme() {
  const body = document.body;
  const themeSwitcher = document.getElementById("theme-switcher");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    themeSwitcher.textContent = "Dark Mode";
  } else {
    body.classList.add("dark-mode");
    themeSwitcher.textContent = "Light Mode";
  }
}
