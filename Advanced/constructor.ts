class employee{
    // constructor(private name : string)
    // constructor(protected name : string)
    constructor(public name : string){

    }

    print():void{
        console.log(this.name);
    }
}

var emp = new employee("Amit");
emp.print();

emp.name = "priti";
emp.print();
