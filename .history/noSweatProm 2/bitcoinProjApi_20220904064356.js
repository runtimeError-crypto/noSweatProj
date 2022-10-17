const article = document.getElementById("article");
const newsNum = document.getElementById("newseNum");

const slip_id = Math.random() * 100;
console.log(slip_id);

fetch({
  Data: "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
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
