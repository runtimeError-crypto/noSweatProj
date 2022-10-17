function myHeaders() {
  myHeaders.append(
    "Authorization",
    "apikey:81e004fd539e694b195efe7daf31631a264584191bb008f8754a907fffd9ed5c"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  console.log(response,result,erro);
}
