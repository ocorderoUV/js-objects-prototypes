'use strict';

//Start coding here
/* ******getting started with js****** */
/*var arr = new Array('red', 'blue', 'green');

Object.defineProperty(Array.prototype, 'last', {get: function(){
   return this[this.length-1];
}});
 var last = arr.last;
 var arr2 = ['one', 'two', 'three'];
 display(Array);
*/

/* *******what is a prototype***** */
/*var myFunc = function(){}
display(myFunc.prototype);

var cat = {name: 'Fluffy'};
display(cat.__proto__);

/* ******instance vs prototype****** */
/* ******a graphical overview****** */
/* ******changing a fucntions****** */

/* ******multiple levels of inheritance****** */

/*function Cat(name, color){
     this.name = name;
     this.color = color;
}
Cat.prototype.age = 4;
var fluffy = new Cat('Fluffy', 'White');

display(fluffy.__proto__);
display(fluffy.__proto__.__proto__);
display(fluffy.__proto__.__proto__.__proto__);
 
*/

/* ******creating your own prototypal****** */
/*function Animal(voice){
    this.voice = voice || 'grunt';
}

Animal.prototype.speak = function() {
    display(this.voice);
}

function Cat(name, color){
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat
var fluffy = new Cat('Fluffy', 'White');

display(fluffy.__proto__.__proto__);

/* ******creating prototypes with class****** */
class Animal {
    constructor(voice) {
      this.voice = voice || 'grunt'
    }
    
    speak() {
      display(this.voice)
    }
  }
  
  class Cat extends Animal {
    constructor(name, color) {
      super('Meow')
      this.name = name
      this.color = color
    }
  }
  
  var fluffy = new Cat('Fluffy', 'White')
  display(Object.keys(fluffy.__proto__.__proto__))
  display(fluffy.__proto__.__proto__.hasOwnProperty('speak'))
  