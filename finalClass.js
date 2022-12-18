class Search {
  constructor(apyKey) {
    this.apiKey = apyKey;
    return this.fn();
  }

  fn() {
    return {
      WeatherDispatcher: new window.weatherCdn.WeatherDispatcher(this.apiKey),
      SearchCities: new window.weatherCdn.SearchCities(this.apiKey),
    };
  }
}

window.Search = Search;
