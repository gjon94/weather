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

window.Search = Search;
