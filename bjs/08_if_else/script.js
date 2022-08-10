let minValue;
let maxValue;
let answerNumber;
let orderNumber;
let gameRun;


function init() {
    document.getElementById("x").style.background = 'white';
    minValue = parseInt(prompt('Минимальное знание числа для игры','-10'));
    minValue = (isNaN(minValue)) ? -10 : (minValue < -10) ? -10 : (minValue > 10) ? 10 : minValue;
    maxValue = parseInt(prompt('Максимальное знание числа для игры','10'));
    maxValue = (isNaN(maxValue)) ? 10 : (maxValue < -10) ? -10 : (maxValue > 10) ? 10 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField = document.getElementById('orderNumberField');
    answerField = document.getElementById('answerField');

    orderNumberField.innerText = orderNumber;
    const phraseRandom = Math.round(Math.random() * 2);
    const answerText = (phraseRandom === 0) ? `Вы загадали число` :
                (phraseRandom === 1) ? `Да это легко! Ты загадал` :
                        `Наверное, это число`;
    answerField.innerText = `${answerText} ${answerNumber}?`;
}


document.getElementById('btnRetry').addEventListener('click', function () {
    init();
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = (phraseRandom === 0) ? `Вы загадали неправильное число!\n\u{1F615}` :
                (phraseRandom === 1) ? `Я сдаюсь..\n\u{1F61E}` :
                    `Вы обманываете!\n\u{1F621}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            const answerText = (phraseRandom === 0) ? `Вы загадали число ` :
                (phraseRandom === 1) ? `Да это легко! Ты загадал ` :
                    `Наверное, это число `;
            answerField.innerText = `${answerText} ${convert(answerNumber)}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const answerRandom = Math.round(Math.random() * 2);
        const answerText = (answerRandom === 0) ? `Ура, я угадал!` :
                (answerRandom === 1) ? `Даа! Это легко.` :
                    `Я лучшый!`;
        answerField.innerText = `${answerText}\n\u{1F601}`
        gameRun = false;
        document.getElementById("x").style.background = '#19ff0d';
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = (phraseRandom === 0) ? `Вы загадали неправильное число!\n\u{1F615}` :
                (phraseRandom === 1) ? `Я сдаюсь..\n\u{1F61E}` :
                    `Вы обманываете!\n\u{1F621}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            const answerText = (phraseRandom === 0) ? `Вы загадали число ` :
                (phraseRandom === 1) ? `Да это легко! Ты загадал ` :
                    `Наверное, это число `;
            answerField.innerText = `${answerText} ${convert(answerNumber)}?`;
        }
    }
})

function convert(num) {
    text = "";
    if (num < 0) text = "минус ";
    switch(Math.abs(num)) {
        case 0: text = 0; break;
        case 1: text += "один"; break;
        case 2: text += "два"; break;
        case 3: text += "три"; break;
        case 4: text += "четыре"; break;
        case 5: text += "пять"; break;
        case 6: text += "шесть"; break;
        case 7: text += "семь"; break;
        case 8: text += "восемь"; break;
        case 9: text += "девять"; break;
        case 10: text += "десять"; break;
    }
    return (text.length < 20) ? text : num;


}

init();