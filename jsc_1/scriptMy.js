let budget, timeData, expenses, optionalExpenses, income, savings = false;

let money = prompt("Ваш бюджет на месяц?", '50000');
let time = prompt('Введите дату в формате YYYY-MM-DD', '2000.10.14');
let fQestion = prompt('Введите обязательную статью расходов в этом месяце','');
let sQestion = prompt('Во сколько обойдется','');
let timeArr = time.split('-', 3);



let appData = {
    budget: money / 30,
    timeData: time,
    expenses: {
        fQestionт: sQestion
    },
    optionalExpenses,
    income,
    savings
};

alert('Ваш бюджет на один день ' + appData.budget + ' руб');