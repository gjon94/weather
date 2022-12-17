// import WeatherDispatcher from "./weatherDispatcher.js";
// import SearchCities from "./searchCities.js";

class Search {
  constructor(apyKey) {
    this.apiKey = apyKey;
    return this.fn();
  }

  fn() {
    return {
      WeatherDispatcher: new WeatherDispatcher(this.apiKey),
      SearchCities: new SearchCities(this.apiKey),
    };
  }
}

// export default Search;
window.search = Search;
