function checkCashRegister(price, cash, cid) {
    console.log("New test:");
    var change = cash - price;
    var cidObj = {};
    var changeArr = [];

    for (var i = 0; i <= cid.length - 1; i++) {
        cidObj[cid[i][0]] = cid[i][1];
    }

    var change100 = new Change("ONE HUNDRED", cidObj["ONE HUNDRED"]);
    var change20 = new Change("TWENTY", cidObj["TWENTY"]);
    var change10 = new Change("TEN", cidObj["TEN"]);
    var change5 = new Change("FIVE", cidObj["FIVE"]);
    var change1 = new Change("ONE", cidObj["ONE"]);
    var changeQuart = new Change("QUARTER", cidObj["QUARTER"]);
    var changeDime = new Change("DIME", cidObj["DIME"]);
    var changeNickel = new Change("NICKEL", cidObj["NICKEL"]);
    var changePenny = new Change("PENNY", cidObj["PENNY"]);

    var leftTotal = [change100.left, change20.left, change10.left, change5.left, change1.left,
        changeQuart.left, changeDime.left, changeNickel.left, changePenny.left].reduce(function (prev, current) {
            return prev + current;
        });


    if (change === leftTotal)
        return "Closed";

    var retMoney = change100.takeMoney(change);
    retMoney = change20.takeMoney(retMoney);
    retMoney = change10.takeMoney(retMoney);
    retMoney = change5.takeMoney(retMoney);
    retMoney = change1.takeMoney(retMoney);
    retMoney = changeQuart.takeMoney(retMoney);
    retMoney = changeDime.takeMoney(retMoney);
    retMoney = changeNickel.takeMoney(retMoney);
    retMoney = changePenny.takeMoney(retMoney);

    if (retMoney > 0)
        return "Insufficient Funds";

    [change100, change20, change10, change5, change1, changeQuart, changeDime, changeNickel, changePenny].forEach(function(val){
        if(val.take !== 0){
            changeArr.push([val.unitAlpha, Number.parseFloat(val.take)]);
            console.log(val + " element is: " + val.unitAlpha + ", " + val.take);
        }
    });

    return changeArr;
}

var UnitLookup = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
};

function Change(unitAlpha, left) {
    this.unitAlpha = unitAlpha;
    this.unit = UnitLookup[unitAlpha];
    this.left = left;
    this.take = 0;
    this.takeMoney = function (num) {
        if (num < this.unit) {
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
    };
}