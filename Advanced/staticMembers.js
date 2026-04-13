"use strict";
class Circle {
    static pi = 3.14;
    static Area(radius) {
        var area = Circle.pi * radius * radius;
        console.log(`Area of circle of radius ${radius} is ${area}`);
    }
}
// var c1 = new Circle();
// c1.Area(5);
// c1.Area(10);
Circle.Area(5);
Circle.Area(10);
