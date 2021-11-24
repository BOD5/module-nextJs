import { type } from "os";

type UserType = {
  email: string,
  password: string,
}

const wetherEx = {
  base: "stations",
  clouds: {all: 75},
  cod: 200,
  coord: {lon: 30.5167, lat: 50.4333},
  dt: 1637543328,
  id: 703448,
  main: {
    feels_like: 279.05,
    humidity: 67,
    pressure: 998,
    temp: 281.44,
    temp_max: 282.44,
    temp_min: 280.18,
  },
  name: "Kyiv",
  sys: {
    type: 2, id: 2013236, country: 'UA', sunrise: 1637558614, sunset: 1637589896
  },
  timezone: 7200,
  visibility: 10000,
  weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n'}],
  wind: {
    speed: 4,
    deg: 260
  },
}

type WeatherType = typeof wetherEx;

export type { UserType, WeatherType };
