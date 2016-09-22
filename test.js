var Person = function(firstAndLast) {
    var firstName = firstAndLast.split(" ")[0];
    var lastName = firstAndLast.split(" ")[1];
    
    this.getFirstName = function(){
      return this.firstName;
    };
    
    this.getLastName = function() {
      return this.lastName;
    };
    
    this.getFullName = function() {
      return this.firstName + " " + this.lastName;
    };
  
      this.setFirstName = function(fName){
       this.firstName = fName;
    };
    
    this.setLastName = function(lName) {
       this.lastName = lName;
    };
    
    this.setFullName = function(fullName) {
      this.firstName = fullName.split(" ")[0];
      this.lastName = fullName.split(" ")[1];
      
    };
    
};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.getFirstName();
bob.setLastName("hao");
bob.setFullName("Li Hao");