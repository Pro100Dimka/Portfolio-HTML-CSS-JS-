document.querySelector('button').onclick = Result;
function Result(){
    //получить то что в импуте 
    let StringSumOfCredit = document.querySelector('.StringSumOfCredit').value; // Cумма кредита
    let Currency = document.querySelector('.Currency'); // Валюта кредита(выпадающий список)
    let StringTerminOfCredit = document.querySelector('.StringTerminOfCredit').value; //Срок кредита
    let Termin = document.querySelector('.Termin'); // Срок в месяцах или годах(выпадающий список)
    let StringPercentOfCredit = document.querySelector('.StringPercentOfCredit').value; //Процент кредита
    let Perc = document.querySelector('.Perc'); // Процент (выпадающий список)
    let StringOfComission = document.querySelector('.StringOfComission').value; //Комиссия кредита
    let FirctComission = document.querySelector('.FirctComission'); // Единовременные комиссии (выпадающий список)
    let StringMounthComission = document.querySelector('.StringMounthComission').value; //Месячная комиссия
    let MonthComission = document.querySelector('.MonthComission'); // месячные комиссии (выпадающий список)
    let PaymentType = document.querySelector('.PaymentType'); // Тип платежа (выпадающий список)
    let StartPaymentMonth = document.querySelector('.StartPaymentMonth');
    let StartPaymentYear = document.querySelector('.StartPaymentYear');
    // Переобразование типа импута в числовой формат
    let SumOfCredit = Number(StringSumOfCredit);
    let TerminOfCredit = Number(StringTerminOfCredit);
    let PercentOfCredit = Number(StringPercentOfCredit);
    let Comission = Number(StringOfComission);
    let MounthComission = Number(StringMounthComission);
    console.log(MonthComission.value);


    // условие если выбран год
    
    /*console.log(`Вы хотите взять ${SumOfCredit} на срок ${TerminOfCredit}. Ваш процент будет ${PercentOfCredit}`);
    let percent = PercentOfCredit * 0.01;
    let AllSumOfCredit = SumOfCredit + (SumOfCredit * percent);
    let YearPayment = AllSumOfCredit / TerminOfCredit
    console.log(`Полная сумма кредита: ${AllSumOfCredit}`);
    console.log(`Платёж в месяц: ${YearPayment}`);*/
}