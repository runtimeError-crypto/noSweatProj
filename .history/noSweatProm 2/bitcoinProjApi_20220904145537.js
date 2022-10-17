const article = document.getElementById("article");
const newsNum = document.getElementById("newseNum");

const slip_id = Math.random() * 100;
console.log({ propertyName1: slip_id });

fetch( "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"){
  Data: "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
  data,
  id: $`{slip_id}`,
})
  .then((response) => {
    return response.json();
  })
  .catch((error) => {
    console.log(error);
  })
  .then((data) => {
    console.log(data);
    const returnedAdvice = data.slip.advice;
    console.log(returnedAdvice);
    const idAdvice = data.slip.id;

    adviceNum.innerText = `News #${idAdvice}`;
    advice.innerText = `"${returnedAdvice}"`;

    setInterval(async function () {
      const data = await fetch(`https://api.adviceslip.com/advice/${slip_id}`);
      // check your response
      // compute your values
      // add them to the dom
    }, 8000);
    /*
    setInterval(() => {
      console.log(data);
      const returnedAdvice = data.slip.advice;
      console.log(returnedAdvice);
      const idAdvice = data.slip.id;
	  */

    newsNum.innerText = `newsNumber ${idAdvice}`;
    data.id.innerText = `"${returnedAdvice}"`;
  }, 8000);
