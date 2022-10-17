"use strict";

var loadBitNews = function loadBitNews() {
  var res;
  return regeneratorRuntime.async(function loadBitNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          headersList = {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            Authorization: "Apikey 81e004fd539e694b195efe7daf31631a264584191bb008f8754a907fffd9ed5c"
          };
          res = "";

          if (!res.ok) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.json());

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

loadBitNews();