# Web App From Scratch @cmda-minor-web 2020 - 2021

![Badge stating project is licensed under MIT license](https://img.shields.io/github/license/jelmerovereem/web-app-from-scratch-2021) ![Badge stating amount of issues open](https://img.shields.io/github/issues/jelmerovereem/web-app-from-scratch-2021) [![](https://img.shields.io/badge/site--status-up-success)](https://jelmerovereem.github.io/web-app-from-scratch-2021) [![Badges via shields.io](https://img.shields.io/badge/badges%20via-shields.io-brightgreen)](shields.io)

[Link to live version](https://jelmerovereem.github.io/web-app-from-scratch-2021)

Get the weather details from all over the world with a interactive map.

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
![actordiagram](https://user-images.githubusercontent.com/58043913/107747844-69680700-6d18-11eb-9c1c-cf049806626e.png)

### Flow chart
![WAFS](https://user-images.githubusercontent.com/58043913/107747812-5a815480-6d18-11eb-8244-b0ebce7001ac.jpg)

![Detail page](https://user-images.githubusercontent.com/58043913/109627291-c3066900-7b41-11eb-9e98-6f283fb5b2a5.png)
<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->