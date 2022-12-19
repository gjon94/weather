import WeatherDispatcher from "./weatherDispatcher";
import SearchCities from "./searchCities";

function search(apiKey) {
  return {
    weatherDispatcher: new WeatherDispatcher(apiKey),
    searchCities: new SearchCities(apiKey),
  };
}
window.search = search;
// const apikey = "511ea8fab715bf4ad5418687bcca8a10";
// const { weatherDispatcher, searchCities } = new Search(apikey);
// console.log(searchCities.search);

// async function gg() {
//   const k = await searchCities.search({ city: "milano" });
//   console.log(k);
//   return k;
// }
// gg();
