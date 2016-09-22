function makeFriendlyDates(arr) {

    var dateFirst = new FriendDate(arr[0]);
    var dateSecond = new FriendDate(arr[1]);
    var retArr = [];

    if (Number.parseInt(dateSecond.year) - Number.parseInt(dateFirst.year) === 1) {
        if (Number.parseInt(dateSecond.month) < Number.parseInt(dateFirst.month)) {
            retArr.push(dateFirst.printMD());
            retArr.push(dateSecond.printMD());
            return retArr;
        } else if(Number.parseInt(dateSecond.day) >= Number.parseInt(dateFirst.day)) {
            retArr.push(dateFirst.printYMD());
            retArr.push(dateSecond.printYMD());
            return retArr;
        } else{
            retArr.push(dateFirst.printYMD());
            retArr.push(dateSecond.printMD());
            return retArr;
        }
    }

    if (Number.parseInt(dateSecond.year) === Number.parseInt(dateFirst.year)) {
        if (Number.parseInt(dateSecond.month) === Number.parseInt(dateFirst.month)) {
            if (Number.parseInt(dateSecond.day) === Number.parseInt(dateFirst.day)) {
                retArr.push(dateFirst.printYMD());
                return retArr;
            } else {
                retArr.push(dateFirst.printMD());
                retArr.push(dateSecond.printD());
                return retArr;
            }

        } else {
            retArr.push(dateFirst.printYMD());
            retArr.push(dateSecond.printMD());
            return retArr;
        }
    }


    retArr.push(dateFirst.printYMD());
    retArr.push(dateSecond.printYMD());
    return retArr;
}

function FriendDate(dateStr) {
    this.date = dateStr.split("-");
    this.year = this.date[0];
    this.month = this.date[1];
    this.day = this.date[2];
    this.printYMD = function () {
        return monthObj[this.month] + " " + dayObj[this.day] + ", " + this.year;
    };
    this.printMD = function () {
        return monthObj[this.month] + " " + dayObj[this.day];
    };
    this.printD = function () {
        return dayObj[this.day];
    };
}
var monthObj = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
};

var dayObj = {
    "01": "1st",
    "02": "2nd",
    "03": "3rd",
    "04": "4th",
    "05": "5th",
    "06": "6th",
    "07": "7th",
    "08": "8th",
    "09": "9th",
    "10": "10th",
    "11": "11th",
    "12": "12th",
    "13": "13th",
    "14": "14th",
    "15": "15th",
    "16": "16th",
    "17": "17th",
    "18": "18th",
    "19": "19th",
    "20": "20th",
    "21": "21st",
    "22": "22nd",
    "23": "23rd",
    "24": "24th",
    "25": "25th",
    "26": "26th",
    "27": "27th",
    "28": "28st",
    "29": "29nd",
    "30": "30rd",
    "31": "31st",
};