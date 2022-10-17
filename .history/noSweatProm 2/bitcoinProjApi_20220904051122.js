const advice = document.getElementById("advice");
const adviceNum = document.getElementById("adviceNum");

const slip_id = Math.random() * 100;
console.log(slip_id)

fetch(`https://api.adviceslip.com/advice/${slip_id}`)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
    .then(data => {
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
        }, 8000)
    })
