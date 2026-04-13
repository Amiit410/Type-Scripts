"use strict";
class Customer {
    welcome() {
        console.log("customer : Welcome ");
    }
}
class SilverCustomer extends Customer {
    welcome() {
        console.log("Silver Customer : welcome");
    }
}
var c1 = new Customer();
c1.welcome();
var sc1 = new SilverCustomer();
sc1.welcome();
