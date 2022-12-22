<p align="center">
<a href="https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@e85ea6e013723c1e06f813092097008e4e5ab422/dist/bundle.js" target="_blank">
<img src="https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d" width="400" alt="Laravel Logo">
</a>
<p>

## this scripts use "https://openweathermap.org/" api's, sign up openweather for get key

### momentarily work for this api's

- <a href="https://openweathermap.org/current">current weather</a>
- <a href="https://openweathermap.org/api/geocoding-api">Coordinates by location name</a>

## how start

### insert script in top of your scripts

```html
<head>
  ...
  <script src="https://cdn.jsdelivr.net/gh/gjon94/weatherCdn@22e124e5c7229c9772e3a4b05aacf619f759aec9/dist/bundle.js"></script>
</head>
```

## now you can import all weather function

```js
const { currentWeather, searchCities } = weather("fakeKey1234");
//or config imediatly
const { currentWeather, searchCities } = weather("fakeKey1234", {
  language: "it",
});

//insert new configurations
currentWeather.config({
  units: "metric",
  apiKey: "newFakeKey9876",
});

//start the fetch
const data = await currentWeather.search({
  city: "tokyo",
});

//get all configuration option
const confList = currentWeather.optionsList();
```
