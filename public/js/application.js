$(document).ready(function() {

  // get lat long
  var loc;

  $.getJSON('https:/ipinfo.io', function(d){
    console.log("assigning location data");
    loc = d.loc;
    // Call to weather api

  });

});
