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


