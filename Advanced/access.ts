class Employee{
    // Name! : string;       //by default public
    // private Name! : string;  
    protected Name! : string;  
    constructor(name : string){
        this.Name = name;
    }
    print():void{
        console.log(`employee : ${this.Name}`);
    }
}

class Customer extends Employee{
    print():void{
        console.log(`customer : ${this.Name}`);
    }
}

var emp = new Employee("amit");
// emp.Name;

emp.print();

var c1 = new Customer("priti");
c1.print();