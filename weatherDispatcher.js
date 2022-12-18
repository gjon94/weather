class WeatherDispatcher extends window.weatherCdn.Dispatcher {
  constructor(apyKey) {
    super();
    this.setKey(apyKey);
  }
  defaultUrl = `https://api.openweathermap.org/data/2.5/weather?`;
}
