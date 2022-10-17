const { get } = require("http");

const advice = document.getElementById("advice");
const adviceNum = document.getElementById("adviceNum");

const slip_id = Math.random() * 100;
console.log(slip_id);

get(`http://min-api.cryptocompare.com/data/v2/news/?lang=EN/${slip_id}`)
  .then(
    propertyName1: (response) => {
      return response.json();
    },
  })
  .catch((error) => {
    console.log(error);
  })
  .then((data) => {
    console.log(data);
    const returnedAdvice = data.slip.advice;
    console.log(returnedAdvice);
    const idAdvice = data.slip.id;

    adviceNum.innerText = `ADVICE #${idAdvice}`;
    advice.innerText = `"${returnedAdvice}"`;

    setInterval(() => {
      console.log(data);
      const returnedAdvice = data.slip.advice;
      console.log(returnedAdvice);
      const idAdvice = data.slip.id;

      adviceNum.innerText = `ADVICE #${idAdvice}`;
      advice.innerText = `"${returnedAdvice}"`;
    }, 8000);
  });
