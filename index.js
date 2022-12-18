const urls = [
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@f438ecc3049dd6bbfff2405c6003dff528d665e8/finalClass.js",
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@e7847f403df7d04d55c9db10aa94a5deec38b2a5/searchCities.js",
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@e7847f403df7d04d55c9db10aa94a5deec38b2a5/weatherDispatcher.js",
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@f438ecc3049dd6bbfff2405c6003dff528d665e8/dispatcher.js",
];
window.weatherCdn = {};

const mainCdn = document.querySelector("#weatherCdn");

urls.forEach((element) => {
  let script = document.createElement("script");
  script.src = element;
  mainCdn.parentNode.insertBefore(script, mainCdn.nextSibling);
});
