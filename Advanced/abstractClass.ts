abstract class Customer{
    ShowTimimgs():void{
        console.log("*** all todays shows ***");
    }

    abstract PrintTicket():void;
}

interface IEmployee{
    Show():void;
}

class SilverCustomer extends Customer implements IEmployee{
    Show(): void {
        console.log("Show name");
    }
    PrintTicket(){
        console.log("silver customer");
    }
}

class GoldCustomer extends Customer{
    PrintTicket(){
        console.log("Gold customer");
    }
}

// var cc1 = new Customer();            // can not make an instance of abstract class
// cc1.ShowTimimgs();

var sc1 = new SilverCustomer();
sc1.ShowTimimgs();
sc1.PrintTicket();

var gc1 = new GoldCustomer();
gc1.ShowTimimgs();
gc1.PrintTicket();