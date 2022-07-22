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
    // Переобразование типа импута в числовой формат
    let SumOfCredit = Number(StringSumOfCredit); // Cумма кредита
    let TerminOfCredit = Number(StringTerminOfCredit); //Срок кредита
    let PercentOfCredit = Number(StringPercentOfCredit); //Процент кредита
    let Comission = Number(StringOfComission); //Комиссия кредита
    let YearToMonth; // Конвертирование срока оплаты кредита
    let percent = PercentOfCredit * 0.01; // Конвертирование в десятые проценты оплаты
    let PercResult; //Оплата процента в месяцах
    let AllSumOfCredit; //Общая сумма кредита
    let YearPayment; // Платеж в месяц
    // единоразовый платёж 
    if (FirctComission.value == 'PercentFromCredit')
    {
        SumOfCredit = SumOfCredit - ((SumOfCredit / 100) * Comission)
    }
    else
    {
        SumOfCredit -= Comission;
    }
    // условие если выбран год
    if (Termin.value == 'years')
    {
        YearToMonth = TerminOfCredit * 12;
    }
    else 
    {
        YearToMonth = TerminOfCredit;
    }
    //условие оплаты процентов(в месяц или в год)
    if (Perc.value == 'PercentMonth')
    {
        PercResult =  (SumOfCredit * percent) * YearToMonth;
    }
    else 
    {
        PercResult =  (SumOfCredit * percent);
    }
    AllSumOfCredit = SumOfCredit + PercResult; //Полная сумма кредита
    YearPayment = AllSumOfCredit / YearToMonth; //Сумма ежемесячного
    // функция округления сотых чисел
    var rounded = function(number){
        return +number.toFixed(2);
    } 

    localStorage.setItem("Currency", Currency.value)
    localStorage.setItem("SumOfCredit", AllSumOfCredit) // полная сумма кредита
    localStorage.setItem("MonthPayment", rounded(YearPayment)) // платить в мес
    localStorage.setItem("Overpayment", PercResult) //передплата
    localStorage.setItem("Percent", PercentOfCredit) //проценты
    document.location.href = "Result.html"
}