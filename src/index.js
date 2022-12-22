import WeatherDispatcher from "./weatherDispatcher.js";
import SearchCities from "./searchCities.js";

function search(apiKey, objConfig) {
  if (!apiKey) {
    throw new Error("missed paramete for setting apikey");
  }
  return {
    weatherDispatcher: new WeatherDispatcher(apiKey, objConfig),
    searchCities: new SearchCities(apiKey, objConfig),
  };
}
window.search = search;
