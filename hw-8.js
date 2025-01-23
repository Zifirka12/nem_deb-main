        // дз №8 ПО ФУНКЦИЯМ

        //Задание №1
        const people = [
            { name: 'Глеб', age: 29 },
            { name: 'Анна', age: 17 },
            { name: 'Олег', age: 7 },
            { name: 'Оксана', age: 47 }
        ];
        console.log(people.sort((a, b) => a.age - b.age));

        //задание №2
        function isPositive(num) {
            // писать код тут 
            return num > 0;
            }
            function isMale(person) {
            // писать код тут
            return person.gender === 'male';    
            }
            function filter(array, ruleFunction) {
            // писать код тут
            const result = [];
            for (let index = 0; index < array.length; index++) {
            if (ruleFunction(array[index])) {
            result.push(array[index]);
            }
            }
            return result;
            }
            console.log(filter([3, -4, 1, 9], isPositive));
            const people1 = [
                {name: 'Глеб', gender: 'male'},
                {name: 'Анна', gender: 'female'},
                {name: 'Олег', gender: 'male'},
                {name: 'Оксана', gender: 'female'}
            ];
            console.log(filter(people1, isMale));

        //Задание №3
        const timerAlarm = () => {
            const interval = setInterval(() => {
                console.log(new Date());
            }, 3000);
            setTimeout(() => {
                clearInterval(interval);
                console.log("30 секунд прошло, я устал, пора отдыхать");
            }, 30000);
        }
        timerAlarm(30);

        //Задание №4
        function delayForSecond(callback) {
            // Код писать можно только внутри этой функции
            setTimeout(() => {
                callback();
                
                }, 1000);
            }
        delayForSecond(function () {
            console.log('Привет, Глеб!');
        })

        //Задание №5
        function delayForSecond(cb) {
            setTimeout(() => {
                console.log('Прошла одна секунда');
                if(cb) {  cb(); }
            }, 1000)
        }
        // Функция sayHi выводит в консоль приветствие для указанного имени
        function sayHi (name) {
            console.log(`Привет, ${name}!`);
        }
        delayForSecond(() => sayHi('Глеб'));

