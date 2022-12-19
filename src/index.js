import WeatherDispatcher from "./weatherDispatcher";
import SearchCities from "./searchCities";
class Search {
  constructor(apyKey) {
    this.apiKey = apyKey;
    return this.fn();
  }

  fn() {
    return {
      weatherDispatcher: new WeatherDispatcher(this.apiKey),
      searchCities: new SearchCities(this.apiKey),
    };
  }
}
window.search = Search;
// const apikey = "511ea8fab715bf4ad5418687bcca8a10";
// const { weatherDispatcher, searchCities } = new Search(apikey);
// console.log(searchCities.search);

// async function gg() {
//   const k = await searchCities.search({ city: "milano" });
//   console.log(k);
//   return k;
// }
// gg();
