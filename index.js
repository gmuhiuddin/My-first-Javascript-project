var amount = 0;
var amount1 = 0;

function expenceCalulatorIncome (){
    let enterAmount = document.getElementById("enterAmount").value
    let incomeZero = document.getElementById("incomeZero")
    let profitLossZero = document.getElementById("profitLossZero")
    enterAmount = +enterAmount

    amount += enterAmount
    incomeZero.innerText = amount
    profitLossZero.innerText = amount - amount1

}
function expenceCalulatorExpence (){
    

    let enterAmount = document.getElementById("enterAmount").value
    let expenceZero = document.getElementById("expenceZero")
    let profitLossZero = document.getElementById("profitLossZero")
    enterAmount = +enterAmount
        amount1 += enterAmount
        expenceZero.innerText = amount1
        profitLossZero.innerText =   amount - amount1
}