var API_KEY="effcfe3f875caf621a210b8bc89b31f6";

$(document).ready(function() {

  // get lat long
  var loc;

  $.getJSON('https:/ipinfo.io', function(d){
    console.log("assigning location data");
    loc = d.loc.split(",");
    // Call to weather api
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' +
       loc[0] + '&lon='+ loc[1] + '&APPID=' + API_KEY,  function(wd){
        console.log(wd);
        var currentLocation = wd.name;
        var currentWeather = wd.weather[0].description;
        var currentTemp = wd.main.temp;
        var high = wd.main.temp_max;
        var low = wd.main.temp_min;
        var icon = wd.main.icon;

        var iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';

        $('#currentLocation').html(currentLocation);
        $('#currentTemp').html(currentTemp);
        $('#currentWeather').html(currentWeather);
        $('#high-low').html(high + '/' + low);

      });
  });

});
