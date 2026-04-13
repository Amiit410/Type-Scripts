"use strict";
var batch;
(function (batch) {
    batch[batch["b26"] = 0] = "b26";
    batch[batch["b27"] = 1] = "b27";
})(batch || (batch = {}));
class Student {
    Id;
    Name;
    batch;
    constructor(id) {
        this.Id = id;
    }
}
var s1 = new Student(11);
// s1.Id = 10;
s1.Name = "Amit";
s1.batch = batch.b27;
console.log(s1);
