"use strict";
class Customer {
    constructor(name) { }
    ShowTimimgs() {
        console.log("*** all todays shows ***");
    }
}
class SilverCustomer extends Customer {
    constructor(name) {
        super(name); //mandatory to class base class cunstructor using super();
    }
    PrintTicket() {
        console.log("silver customer");
    }
}
class GoldCustomer extends Customer {
    constructor(name) {
        super(name); //mandatory to class base class cunstructor using super();
    }
    PrintTicket() {
        console.log("Gold customer");
    }
}
var cc1 = new Customer("amit");
cc1.ShowTimimgs();
var sc1 = new SilverCustomer("amit");
sc1.ShowTimimgs();
sc1.PrintTicket();
var gc1 = new GoldCustomer("amit");
gc1.ShowTimimgs();
gc1.PrintTicket();
