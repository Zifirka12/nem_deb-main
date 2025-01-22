        // дз №7 ПО ФУНКЦИЯМ

        //Задание №1
        const answer = 'js';
        console.log(answer.toUpperCase());

        //задание №2
        function filterStringsByPrefix(arr, prefix) {
            const lowerCasePrefix = prefix.toLowerCase();
            return arr.filter(str => {
                // Приводим каждую строку массива к нижнему регистру и проверяем,
                // начинается ли она с указанного префикса
                return str.toLowerCase().startsWith(lowerCasePrefix);
            });
        }
        // Пример использования
        const stringsArray = ['Apple', 'Banana', 'orange', 'Apricot'];
        const result = filterStringsByPrefix(stringsArray, 'ap');
        console.log(result); // Выведет: ["Apple", "Apricot"]
        

        //Задание №3
        //Допустим, у нас есть переменная average, которая содержит среднее значение набора чисел. Если мы хотим округлить эту переменную до ближайшего целого числа, мы можем использовать Math.floor() или Math.ceil() в зависимости от того, хотим ли мы округлить вниз или вверх:
        let arr = 32.58884;
        console.log(Math.ceil(arr));
        console.log(Math.floor(arr));

        //Задание №4
        let numbers = [52, 53, 49, 77, 21, 32];
        // Нахождение минимального значения
        let minValue = Math.min(...numbers);
        // Нахождение максимального значения
        let maxValue = Math.max(...numbers);

        //Задание №5
        let num = Math.random() * 10;
        console.log(num);

        //Задание №6
        function generateRandomNumbers(n) {
            if (n <= 0) {
                throw new Error("Переданное число должно быть положительным");
            }
            const length = Math.floor(n / 2);
            const randomNumbers = [];
            for (let i = 0; i < length; i++) {
                randomNumbers.push(Math.floor(Math.random() * n));
            }
            return randomNumbers;
        }
        // Пример использования
        try {
            const result = generateRandomNumbers(10);
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }

        //Задание №7
        function getRandomInt(min, max) {
            // Генерируем случайное число между min и max включительно
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const randomNumber = getRandomInt(5, 15);
        console.log(randomNumber);

        //Задание №8
        const currentDate = new Date();
        console.log(currentDate);

        //Задание №9
        const currentDate1 = new Date();
        currentDate1.setDate(currentDate1.getDate() + 73);
        console.log(currentDate1);

        //Задание №10
        // Месяцы на русском языке
        const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
        ];

        // Дни недели на русском языке
        const weekDays = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота'
        ];

        // Функция для получения формата даты и времени
        function formatDate(date) {
        // Дата
        const dayOfWeek = weekDays[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        // Время
        const hours = String(date.getHours()).padStart(2, '0'); // добавляем ведущий ноль, если часы меньше 10
        const minutes = String(date.getMinutes()).padStart(2, '0'); // добавляем ведущий ноль, если минуты меньше 10
        const seconds = String(date.getSeconds()).padStart(2, '0'); // добавляем ведущий ноль, если секунды меньше 10

        // Форматируем строку
        return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
        }

        // Пример использования
        const now = new Date(); // Текущая дата и время
        console.log(formatDate(now));

