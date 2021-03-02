# Web App From Scratch - Weather app

![Badge stating project is licensed under MIT license](https://img.shields.io/github/license/jelmerovereem/web-app-from-scratch-2021) ![Badge stating amount of issues open](https://img.shields.io/github/issues/jelmerovereem/web-app-from-scratch-2021) [![](https://img.shields.io/badge/site--status-up-success)](https://jelmerovereem.github.io/web-app-from-scratch-2021) [![Badges via shields.io](https://img.shields.io/badge/badges%20via-shields.io-brightgreen)](shields.io)

[Link to live version](https://jelmerovereem.github.io/web-app-from-scratch-2021)

Get the weather details from all over the world with a interactive map.

![Screenshots](https://user-images.githubusercontent.com/58043913/109636627-1978a500-7b4c-11eb-8931-e4d987fda056.png)

## Index

- [Getting started](#getting-started)
- [Features](#features)
- [APIs used](#apis-used)
- [User Interaction Flow](#user-interaction-flow)
- [Design patterns used](#design-patterns-used)

## Getting started

This project doesn't use any bundlers or dev servers. I would advice you to install [Browsersync](https://www.npmjs.com/package/browser-sync) to serve the web content in this project. You install Browsersync either through [NPM](https://www.npmjs.com), [Yarn](https://yarnpkg.com) or any other NPM package manager of choice with global installation functionality.

```shell
$ npm install --global browser-sync || yarn global add browser-sync
```

Then proceed to clone this repository.

```shell
$ git clone https://github.com/Jelmerovereem/web-app-from-scratch-2021
$ cd web-app-from-scratch-2021
$ browser-sync -w -s -p 5000 # Starts a browser-sync server on port 5000 that watches for file changes in the current directory
```

## Features

- [x] Interactive map
- [x] Weather based on searched city
- [x] Weather based on your own location
- [x] Clickable pop-up forwarding to a detail page
- [x] Detail page with a "last updated on" reminder
- [x] Detail page with the temperature and weather description
- [x] Background visuals matching the weather and local time
- [ ] Weather forecast, for upcoming days


## APIs used

- [The OpenWeather map API](https://openweathermap.org/api)  
With this API you can fetch weather data from all over the world. It has all different kind of fetches you can do. If you want 4 days forecast or just the current weather data, everything is possible.
- [Leaflet map](https://leafletjs.com/)
- ~~[Unsplash API](https://unsplash.com/developers)~~

### API Response
This is what an API response looks like from The OpenWeather API
```js
data = {
	clouds: {}, // The cloudiness in %
	coord: {},  // City geo location. Lon and lat
	dt: ,         // Last time when weather was updates in unix (UTC)
	id: ,         // The city ID
	main: {},   // The main weather information, temperature, feelslike, etc.
	name: ,       // City name
	sys: {},    // More about the country and timezone
	timezone: ,   // How many seconds difference from the UTC timezone
	visibility: , // The visiblity meter
	weather:[], // An array with weather objects containing weather information like description and id for icon
	wind: {}    // Information about the wind speed, degrees, etc.
}
```

## User Interaction Flow

### Actor diagram
![Actor diagram](https://user-images.githubusercontent.com/58043913/109629637-52ad1700-7b44-11eb-9d42-624298f2185e.jpg)

### Flow chart
![WAFS](https://user-images.githubusercontent.com/58043913/107747812-5a815480-6d18-11eb-8244-b0ebce7001ac.jpg)