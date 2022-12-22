import CurrentWeather from "./currentWeather.js";
import SearchCities from "./searchCities.js";

function weather(apiKey, objConfig) {
  if (!apiKey) {
    throw new Error("missed paramete for setting apikey");
  }
  return {
    currentWeather: new CurrentWeather(apiKey, objConfig),
    searchCities: new SearchCities(apiKey, objConfig),
  };
}
window.weather = weather;
