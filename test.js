
function checkCashRegister(price, cash, cid) {
    console.log("New test:");
    var change = cash - price;
    var cidObj = {};
    for (var i = 0; i <= cid.length - 1; i++){
        cidObj[cid[i][0]] = cid[i][1];
    }

    var change100 = new Change(100,cidObj["ONE HUNDRED"]);
    var change20 = new Change(20,cidObj["TWENTY"]);
    var change10 = new Change(10,cidObj["TEN"]);
    var change5 = new Change(5,cidObj["FIVE"]);
    var change1 = new Change(1,cidObj["ONE"]);
    var changeQuart = new Change(0.25,cidObj["QUARTER"]);
    var changeDime = new Change(0.1,cidObj["DIME"]);
    var changeNickel = new Change(0.05,cidObj["NICKEL"]);
    var changePenny = new Change(0.01,cidObj["PENNY"]);

    var retMoney = change100.takeMoney(108.8);
    retMoney = change20.takeMoney(retMoney);
    retMoney = change10.takeMoney(retMoney);
    retMoney = change5.takeMoney(retMoney);
    retMoney = change1.takeMoney(retMoney);
    retMoney = changeQuart.takeMoney(retMoney);
    retMoney = changeDime.takeMoney(retMoney);
    retMoney = changeNickel.takeMoney(retMoney);
    retMoney = changePenny.takeMoney(retMoney);

    return change;
}

function Change(unit, left) {
    this.unit = unit;
    this.left = left;
    this.take = 0;
    this.takeMoney = function (num) {
        if (num < unit) {
            return num;
        }
        var wantToTake = (Math.floor(num / this.unit) * this.unit).toFixed(2);
        if (wantToTake >= this.left) {
            this.take = this.left;
            this.left = 0;
            return (num - this.take).toFixed(2);
        } else {
            this.take = wantToTake;
            this.left = (this.left - this.take).toFixed(2);
            return (num - wantToTake).toFixed(2);
        }
    }
}
$(document).ready(function () {
    // Example cash-in-drawer array:
    // [["PENNY", 1.01],
    // ["NICKEL", 2.05],
    // ["DIME", 3.10],
    // ["QUARTER", 4.25],
    // ["ONE", 90.00],
    // ["FIVE", 55.00],
    // ["TEN", 20.00],
    // ["TWENTY", 60.00],
    // ["ONE HUNDRED", 100.00]]
    console.log(
        checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
    );
});