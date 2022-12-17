import WeatherDispatcher from "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@main/weatherDispatcher.js";
import SearchCities from "https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@main/searchCities.js";

class Search {
  constructor(apyKey) {
    this.apiKey = apyKey;
    return this.fn();
  }

  // searchCities() {
  //   return new SearchCities(this.apiKey);
  // }
  // weatherDispatcher(x) {
  //   return new WeatherDispatcher(this.apiKey).search(x);
  // }

  fn() {
    return {
      WeatherDispatcher: new WeatherDispatcher(this.apiKey),
      SearchCities: new SearchCities(this.apiKey),
    };
  }
}

export default Search;
