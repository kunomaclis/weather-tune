var API_KEY="effcfe3f875caf621a210b8bc89b31f6";

$(document).ready(function() {

  // get lat long
  var loc;

  $.getJSON('https:/ipinfo.io', function(d){
    console.log("assigning location data");
    loc = d.loc.split(",");
    // Call to weather api
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' +
       loc[0] + '&lon='+ loc[1] + '&APPID=' + API_KEY,  function(wd){
        console.log(wd);
      });
  });

});
