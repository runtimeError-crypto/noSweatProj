const { callExpression } = require("@babel/types");
const { waitForDebugger } = require("inspector");

var settings = {
  url: "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
  method: "GET",
  timeout: 0,
  headers: {
    Authorization:
      "apikey:81e004fd539e694b195efe7daf31631a264584191bb008f8754a907fffd9ed5c",
  },
}

	callExpression.().res.headersList;
  console.log(response);
