# WeatherTune - Current Location Weather

## How to use
* Git clone
* ```bundle install``` in directory
* ``` be shotgun ``` and go to localhost:9393

## APIs
* [Ipinfo](https://ipinfo.io/) to gather current location
* [Openweathermap](http://openweathermap.org/) for weather updates
  * A plus of using Openweather is the inclusion of changing weather icons.

Bulk of code is Javascript in Sinatra with the hopes of adding future content.

![current](version1-sample.png)

## Future Plans
* Add dynamic backgrounds to match current weather
* Experiment with Spotify API integration to include a current weather playlist.
* Experiment with AWS Product Catalog API to recommend items based on weather/location
* There really isn't any reason this needs to be on Sinatra. This was made while I practicing Sinatra usage in particular. But it can be on an alternate framework.
