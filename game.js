        // дз №5 

        function guessNumber() {
            const randomNumber = Math.floor(Math.random() * 100 + 1);
            let guess;
            let attempts = 0;
        
            while (true) {
                guess = parseInt(prompt("Попробуйте угадать число от 1 до 100:"));
        
                if (!guess || isNaN(guess)) {
                    alert("Введите корректное число!");
                    continue;
                }
        
                attempts++;
        
                if (guess === randomNumber) {
                    alert(`Поздравляем! Вы угадали число за ${attempts} попыток.`);
                    break;
                } else if (guess > randomNumber) {
                    alert("Загаданное число меньше.");
                } else {
                    alert("Загаданное число больше.");
                }
            }
        }

    
        //дз №6
        function simpleArithmetic() {
    

            const randomNum = () => Math.floor(Math.random() * 10 + 1);
            const firstNum = randomNum();
            const secondNum = randomNum();
            
            const getOperators = ["+", "-", "*", "/"];
            const getRandomOperator = () => Math.floor(Math.random() * 4);
            const getOperator = getOperators[getRandomOperator()];
    
            let result = null;
    
            if (getOperator === getOperators[0]) {
                result = firstNum + secondNum;
            } else if (getOperator === getOperators[1]) {
                result = firstNum - secondNum;
            } else if (getOperator === getOperators[2]) {
                result = Math.floor(firstNum * secondNum);
            } else {
                result = Math.floor(firstNum / secondNum);
            }
    
            
            userQuestion = `Введите ответ на пример: ${firstNum} ${getOperator} ${secondNum}?`;
            userAnswer = Number(prompt(userQuestion));
            
            if (result === userAnswer) {
                alert("Right answer!")
            } else {
                alert("Wrong!");
            }
            
            
    }

    //Дз №7
    function turnOverText() {
        let regexp = /^[a-zA-Zа-яА-Я]*$/;
        let userEnter;
    
        do {
            userEnter = prompt("Введите ваше слово!");
            if (regexp.test(userEnter)) {
                alert(userEnter.split('').reverse().join(''));
            } else {
                alert("Вы ввели не слово введите, пожалуйста, слово");
            }
        } while (regexp.test(userEnter) === false);
    
    }
    
    
    
    function simpleQuizGame() {
        
        let userAnswer;
        let startMessage;
        let pointCounter = 0;
        let sum;
        const quiz = [
            {
                question: "Какой цвет небо?",
                options: ["1. Красный", " 2. Синий", " 3. Зеленый"],
                correctAnswer: 2
            },
            {
                question: "Сколько дней в неделе?",
                options: ["1. Шесть", " 2. Семь", " 3. Восемь"],
                correctAnswer: 2
            },
            {
                question: "Сколько у человека пальцев на одной руке?",
                options: ["1. Четыре", " 2. Пять", " 3. Шесть"],
                correctAnswer: 2
            }
        ];
    
        do {
        startMessage = confirm("Хотите поиграть в игру?");
        if (startMessage === true) {
                for (let i = 0; i < quiz.length; i++) {
                    userAnswer = Number(prompt(`Ответьте на вопрос: ${quiz[i].question}, \nварианты ответа: \n${quiz[i].options} \n(введите номер ответа)`));
                if (userAnswer === quiz[i].correctAnswer) {
                    alert("Right");
                    pointCounter++;
                    sum = pointCounter;
                    alert(`Скок навармил ${pointCounter} баллов`);
                    
                } else {
                    alert("Wrong answer!");
                }
                }
                alert(`Вы набрали: ${sum} балл(а). Ты крут!`);
        } else {
            alert("Прощай!");
            break;
        }
    } while (true);
        
    }

        //Дз №8
        function playerVersusPcGame() {
    const randomItems = ["камень", "ножницы", "бумага"];
    let playerAnswer;
    const getRandomItem = () => Math.floor(Math.random() * randomItems.length);
    const computerChoice = randomItems[getRandomItem()];
    const validOptions = new RegExp("^(?:камень|ножницы|бумага)$", "i"); // Проверка на валидность

    do {
        playerAnswer = prompt("Введите \"камень\", \"ножницы\" или \"бумага\":");
        if (validOptions.test(playerAnswer)) {
            playerAnswer = playerAnswer.toLowerCase(); // Приводим ответ к нижнему регистру
            alert(`Выбор компьютера: ${computerChoice}`);

            if (playerAnswer === computerChoice) {
                alert("Ничья!");
            } else if ((playerAnswer === "камень" && computerChoice === "ножницы") || 
                       (playerAnswer === "ножницы" && computerChoice === "бумага") || 
                       (playerAnswer === "бумага" && computerChoice === "камень")) {
                alert("Вы победили!");
            } else {
                alert("Компьютер победил.");
            }
        } else {
            alert("Некорректный ввод! Повторите попытку.");
        }
    } while (!validOptions.test(playerAnswer));
}   //провто коментарий  
