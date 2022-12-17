const urls = [
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@latest/finalClass.js",
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@latest/searchCities.js",
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@latest/weatherDispatcher.js",
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@latest/dispatcher.js",
];
window.weatherCdn = {};
const mainCdn = document.querySelector("#weatherCdn");

urls.forEach((element) => {
  let script = document.createElement("script");
  script.src = element;
  mainCdn.parentNode.insertBefore(script, mainCdn.nextSibling);
});
