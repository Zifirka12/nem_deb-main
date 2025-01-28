
        // дз №5 ПО ФУНКЦИЯМ

        let max = (a, b) => { //Задание №1
            return a > b ? a : b;
        };

        console.log(max(8, 4)); // Выведет 8
        console.log(max(6, 6));  // Выведет 6

        var number = prompt("Введите целое число");// Задание №2
        number = parseInt(number);
        if (number % 2 === 0) {
        alert("Число чётное");
        } else {
        alert("Число нечётное");
        }

        function getSquare(n) {// Задание №3
            return n * n;
        }
        
        const result1 = getSquare(8); 
        console.log(result1); // выведет 64

        function checkAge() { //ЗАДАНИЕ №4
            let age = prompt("Сколько вам лет?");
        
        
            if (isNaN(age)) {
                alert('Вы ввели неправильное значение');
            } else {
                age = Number(age);
        
                if (age < 0) {
                    alert('Вы ввели неправильное значение');
                } else if (age >= 0 && age <= 12) {
                    alert('Привет, друг!');
                } else {
                    alert('Добро пожаловать!');
                }
            }
        }
        
        checkAge();


        function multiplyNumbers(a, b) { //ЗАДАНИЕ № 5
            if (isNaN(a) || isNaN(b)) {
                return 'Одно или оба значения не являются числом';
            }
            return a * b;
        }

        console.log(multiplyNumbers(10, 20));     // Выведет 200

        function cubeNumber() {//ЗАДАНИЕ № 6
            const userInput = prompt("Введите число:");
        
            if (isNaN(userInput)) {
                return 'Переданный параметр не является числом';
            }
        
            const n = parseFloat(userInput);
        
            const result = n ** 3;
        
            return `${n} в кубе равняется ${result}`;
        }
        
            console.log(cubeNumber());


            function Circle(radius) { //ЗАДАНИЕ № 7
                this.radius = radius;
            }
            
            Circle.prototype.getArea = function() {
                return Math.PI * this.radius * this.radius;
            };
            
            Circle.prototype.getPerimeter = function() {
                return 2 * Math.PI * this.radius;
            };
            
            const circle1 = new Circle(5);
            const circle2 = new Circle(10);
            
            console.log(`Площадь круга 1: ${circle1.getArea().toFixed(2)}`);
            console.log(`Периметр круга 1: ${circle1.getPerimeter().toFixed(2)}`);
            
            console.log(`Площадь круга 2: ${circle2.getArea().toFixed(2)}`);
            console.log(`Периметр круга 2: ${circle2.getPerimeter().toFixed(2)}`);

            const randomNumber = Math.floor(Math.random() * 100 + 1); //РАМНДОМ ИГРА
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