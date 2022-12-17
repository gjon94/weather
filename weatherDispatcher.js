import Dispatcher from "https://cdn.jsdelivr.net/gh/gjon94/weather/dispatcher.js";
class WeatherDispatcher extends Dispatcher {
  constructor(apyKey) {
    super();
    this.setKey(apyKey);
  }
  defaultUrl = `https://api.openweathermap.org/data/2.5/weather?`;
}
export default WeatherDispatcher;
