var API_KEY="effcfe3f875caf621a210b8bc89b31f6";
var cel = false;

function displayTemp(fTemp, c){
  if(c) return Math.round((fTemp - 32) * (5/9)) + " C";
  return Math.round(fTemp) + " F";
}

function render(wd, cel){
  var currentLocation = wd.name;
  var currentWeather = wd.weather[0].description;
  var currentTemp = displayTemp(wd.main.temp, cel);
  var high = displayTemp(wd.main.temp_max, cel);
  var low = displayTemp(wd.main.temp_min, cel);
  var icon = wd.weather[0].icon;

  var iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';

  $('#currentLocation').html(currentLocation);
  $('#currentTemp').html(currentTemp);
  $('#currentWeather').html(currentWeather);
  $('#high-low').html(high + '/' + low);

  $('#currentTemp').prepend('<img src=' + iconUrl + '>');
}

$(document).ready(function() {

  // get lat long
  var loc;

  $.getJSON('https:/ipinfo.io', function(d){
    console.log("assigning location data");
    loc = d.loc.split(",");
    // Call to weather api
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' +
     loc[0] + '&lon='+ loc[1] + '&APPID=' + API_KEY,  function(apiData){
      console.log(apiData);
      render(apiData, cel);

      $('#toggle').on("click", function(){
        cel = !cel;
        render(apiData, cel);
      });
    });
  });

});
