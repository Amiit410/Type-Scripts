class Employee<T>{
    print(val : T){
        console.log(val);
    }
}

var emp1 = new Employee<number>();
emp1.print(10);

var emp2 = new Employee<string>();
emp2.print("amit");

class Customer{
    print<T>(val : T){
        console.log(val);
    }
}

var c1 = new Customer();
c1.print<number>(10);

c1.print("amit");