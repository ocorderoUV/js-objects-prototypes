// Start coding here
//display('Hello');

'use strict';
/* ****using objects literals***** */
/* ****the dynamic nature js***** */

// var cat = {
//     name: 'Cat', 
//     color: 'White',
//     age: '3',
//     speak : function() { display("Miau")}
// };

// display(cat.name);
// display(cat.age);
// cat.speak();

/* ****using constructor functions***** */

// function Cat(name, color){
//     this.name = name;
//     this.color = color;
// }

// var cat = new Cat('Fluffy','Red');

// display(cat);

/* ****using object.create()***** */
// var cat = Object.create(Object.prototype,
// {
//     name: {
//         value: 'Fluffy',
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     color: {
//         value: 'Red',
//         enumerable: true,
//         writable: true,
//         configurable: true
//     }
// });
// display(cat);

/* ****using ECMAScript 6***** */
class Cat {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    speak(){
        display('Hello');
    }
}
var cat = new Cat('Fluffy','Red');
display(cat);
cat.speak();