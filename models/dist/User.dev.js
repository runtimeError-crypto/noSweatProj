"use strict";

var settings = {
  async: true,
  crossDomain: true,
  url: "https://priceline-com.p.rapidapi.com/hotels/city/search?q=Seattle",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b6dd102da3msha21b5067d2625d3p1f65fcjsnc476b3199947",
    "X-RapidAPI-Host": "priceline-com.p.rapidapi.com"
  }
};
$.ajax(settings).done(function (response) {
  console.log(response);
});