// import Dispatcher from "./dispatcher.js";

class SearchCities extends window.weatherCdn.Dispatcher {
  constructor(apyKey) {
    super();
    this.setKey(apyKey);
  }
  defaultUrl = `http://api.openweathermap.org/geo/1.0/direct?limit=5`;
}

// export default SearchCities;
