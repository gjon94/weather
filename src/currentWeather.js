import Dispatcher from "./dispatcher.js";
class CurrentWeather extends Dispatcher {
  defaultUrl = `https://api.openweathermap.org/data/2.5/weather?`;
  rules = [
    ["latitude", "lat"],
    ["longitude", "lon"],
  ];
}

export default CurrentWeather;
