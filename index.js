const urls = [
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@a175df4ac6755d0093c06ee35448ed1a43ee635b/finalClass.js",
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@e7847f403df7d04d55c9db10aa94a5deec38b2a5/searchCities.js",
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@e7847f403df7d04d55c9db10aa94a5deec38b2a5/weatherDispatcher.js",
  "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@f438ecc3049dd6bbfff2405c6003dff528d665e8/dispatcher.js",
];
window.weatherCdn = {};

const mainCdn = document.querySelector("#weatherCdn");

urls.forEach((element) => {
  let script = document.createElement("script");
  script.src = element;
  script.type = "text/javascriptcript";
  script.async = false;
  mainCdn.parentNode.insertBefore(script, mainCdn.nextSibling);
});
