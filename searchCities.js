import Dispatcher from "https://cdn.jsdelivr.net/gh/gjon94/weather@main/dispatcher.js";
class SearchCities extends Dispatcher {
  constructor(apyKey) {
    super();
    this.setKey(apyKey);
  }
  defaultUrl = `http://api.openweathermap.org/geo/1.0/direct?limit=5`;
}

export default SearchCities;
