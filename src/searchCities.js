import Dispatcher from "./dispatcher.js";
class SearchCities extends Dispatcher {
  defaultUrl = `http://api.openweathermap.org/geo/1.0/direct?limit=5`;
  rules = [["limit", "limit"]];
}

export default SearchCities;
