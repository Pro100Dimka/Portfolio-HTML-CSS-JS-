document.querySelector('button').onclick = Result;
function Result(){
    //получить то что в импуте 
    let StringSumOfCredit = document.querySelector('.SumOfCredit').value;
    let StringTerminOfCredit = document.querySelector('.TerminOfCredit').value;
    let StringPercentOfCredit = document.querySelector('.PercentOfCredit').value;
    // Переобразование типа импута в числовой формат
    let SumOfCredit = Number(StringSumOfCredit);
    let TerminOfCredit = Number(StringTerminOfCredit);
    let PercentOfCredit = Number(StringPercentOfCredit);
    console.log(`Вы хотите взять ${SumOfCredit} на срок ${TerminOfCredit}. Ваш процент будет ${PercentOfCredit}`);
    let percent = PercentOfCredit * 0.01;
    let AllSumOfCredit = SumOfCredit + (SumOfCredit * percent);
    let YearPayment = AllSumOfCredit / TerminOfCredit
    console.log(`Полная сумма кредита: ${AllSumOfCredit}`);
    console.log(`Платёж в месяц: ${YearPayment}`);
}