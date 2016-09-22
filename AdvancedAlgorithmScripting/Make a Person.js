
var Person = function (firstAndLast) {
    var firstName = firstAndLast.split(/\s/)[0];
    var lastName = firstAndLast.split(/\s/)[1];

    this.getFirstName = function () {
        return firstName;
    };

    this.getLastName = function () {
        return lastName;
    };

    this.getFullName = function () {
        return firstName + " " + lastName;
    };

    this.setFirstName = function (fName) {
        firstName = fName;
    };

    this.setLastName = function (lName) {
        lastName = lName;
    };

    this.setFullName = function (fullName) {
        firstName = fullName.split(/\s/)[0];
        lastName = fullName.split(/\s/)[1];

    };

};
