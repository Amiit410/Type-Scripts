enum batch{
    "b26","b27"
} 

class Student{
    readonly Id! : number;

    Name! : string;
    batch! : number;

    constructor(id: number){
        this.Id = id;
    }

}

var s1 = new Student(11);
// s1.Id = 10;
s1.Name = "Amit";
s1.batch = batch.b27;

console.log(s1);