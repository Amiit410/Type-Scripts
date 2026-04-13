class Employee{
    private _name! : string;

    get name():string{
        return this._name;
    }

    set name(para : string){
        this._name = para;
    }
}

var emp = new Employee();
emp.name = "amit";
console.log(emp.name);