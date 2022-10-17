"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["{slip_id}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var article = document.getElementById("article");
var newsNum = document.getElementById("newseNum");
var slip_id = Math.random() * 100;
console.log({
  propertyName1: slip_id
});
fetch({
  Data: "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
  data: data,
  id: $(_templateObject())
}).then(function (response) {
  return response.json();
})["catch"](function (error) {
  console.log(error);
}).then(function (data) {
  console.log(data);
  var returnedAdvice = data.slip.advice;
  console.log(returnedAdvice);
  var idAdvice = data.slip.id;
  adviceNum.innerText = "News #".concat(idAdvice);
  advice.innerText = "\"".concat(returnedAdvice, "\"");
  setInterval(function _callee() {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch("https://api.adviceslip.com/advice/".concat(slip_id)));

          case 2:
            data = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }, 8000);
  /*
  setInterval(() => {
    console.log(data);
    const returnedAdvice = data.slip.advice;
    console.log(returnedAdvice);
    const idAdvice = data.slip.id;
  */

  newsNum.innerText = "newsNumber ".concat(idAdvice);
  data.id.innerText = "\"".concat(returnedAdvice, "\"");
}, 8000);