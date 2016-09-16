$(document).ready(function () {
    function checkCashRegister(price, cash, cid) {
        var change = cash - price;

        return change;
    }

    function Change(unit, left, take) {
        this.unit = unit;
        this.left = left;
        this.take = take;
        this.takeMoney = function (num) {
            if (num < unit) {
                return num;
            }
            var wantToTake = Math.floor(num / this.unit) * this.unit;
            if (wantToTake >= this.left) {
                this.take = this.left;
                this.left = 0;
                return num - this.left;
            } else {
                this.take = wantToTake;
                this.left = this.left - this.take;
                return num - wantToTake;
            }
        }

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