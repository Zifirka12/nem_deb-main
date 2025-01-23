alert('10');
        alert('20');
        alert('2007');
        alert('Брендан Эйх или Айк');
        
    let a = 10;
    let b = 2;
    let с = 9;


    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let quotient = a / b;
    let result = b**5;

    alert("Сумма: " + sum);
    alert("Разность: " + difference);
    alert("Произведение: " + product);
    alert("Частное: " + quotient);
    alert("В степени: " + result);

    let g = 2;
    let v = 9;
    let six = v % g;
    alert("Остаток: " + six);

    let num = 1;
    num += 5;
    num -= 3;
    num *= 7;
    num /= 3;
    num+=1;
    num-=1;
    alert(num);

    age = prompt("Сколько вам лет?");
    alert(age);

    const user = {
    name: 'Иван',
    age: 30,
    isAdmin: false
    };

    age1 = prompt("Как вас зовут?");
    alert("Привет " + age1 + " !");

    let password = 'пароль';
        ag = prompt("Введите пароль");
        if (password == ag) {
            alert("Пароль введен верно");} 
        else {
            alert("Пароль введен неправильн");
        }

        d = 99;
        e = 101;
        if (d > 100 || e > 100) {
            alert('Верно');
        } else {
            alert('Неверно');
        }

        let aq = '2';
        let bq = '3';
        // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
        alert(Number(aq) + Number(bq));

        var day = prompt("Введите номер месяца от 1 до 12");

        switch (day) {
    case '1':
    alert('январь');
        break;
    case '2':
    alert('февраль');
        break;
    case '3':
    alert('март ');
        break;
        case '4':
    alert('апрель  ');
        break;
    
        case '5':
    alert('май ');
        break;
    case '6':
    alert('июнь ');
        break;
    case '7':
    alert('июль  ');
        break;
        case '8':
    alert('август  ');
        break;

        case '9':
    alert('сентябрь ');
        break;
    case '10':
    alert('октябрь   ');
        break;
    case '11':
    alert('ноябрь  ');
        break;
        case '12':
    alert('декабрь   ');
        break;
   // Продолжайте для остальных дней недели
    default:
        alert('ввели что-то не то');
    }

    document.getElementById('startButton').addEventListener('click', function() {
        document.getElementById('gamesSection').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

    i = 1; // первый минус был тут 
    while (i < 2) {
        i++; // Используем инкремент ++, 
         // чтобы не писать полную конструкцию i = i + 1
        console.log("Привет");
    }

    let i = 1; // второй минус исправлен
while (i < 7) {
   console.log(i); // Выведет в консоль 1, 2, 3
    i++;
}

for (let i = 7; i <= 22; i++) {
    console.log(i);
}


const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
    };

    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);}

        let n = 1000; // 3 минус
        let num11 = 0;
        while (n >= 50) {
            n /= 2;
            num11++;
        }
        console.log("Результат:", n);
        console.log("Количество итераций:", num11);

        const f = 5; // 4 vbyec
        for (let day = f; day <= 31; day += 7) {
            console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
        }


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
            switch (computerChoice) {
                case 'камень':
                    computerChoice === 'камень';
                    break;
                case 'ножницы':
                    computerChoice === 'ножницы';
                    break; 
                default: computerChoice === 'бумага';
                    break;
            }
            const regexp = /^[а-яА-Я]*$/;
            do {
                playerAnswer = prompt("Введите \"камень\", \"ножницы\" или \"бумага\"");
                    if (regexp.test(playerAnswer)) {
                        if (playerAnswer.toLowerCase() === computerChoice) {
                            alert(`Выбор чата жпт: ${computerChoice}`);
                            alert("Ничья!");
                        } else if (playerAnswer.toLowerCase() !== computerChoice) {
                            alert(`Выбор чата жпт: ${computerChoice}`);
                            alert("Чат жпт победил");
                        } else {
                            alert(`Выбор чата жпт: ${computerChoice}`);
                        }
                    } else {
                        alert("Не верно вел буква") 
                    }
                
            } while (!regexp.test(playerAnswer));
        }    