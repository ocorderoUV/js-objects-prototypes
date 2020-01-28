'use strict';
/* *****using bracket notation****** */
/*var cat = {
    name: 'Fluffy', 
    color: 'White'
};

cat['Eye Color'] = 'Green';
display(cat['Eye Color']);
*/

/* *****using js property****** */
/*var cat = {
    name: 'Fluffy', 
    color: 'White'
};

display(Object.getOwnPropertyDescriptor(cat, 'name'));
*/

/* *****using the writable attribute****** */
/*var cat = {
    name: {first: 'Fluffy', last: 'Cordero '}, 
    color: 'White'
};
Object.defineProperty(cat, 'name', {writable:false});
cat.name.first = 'Scratchy';
display(cat.name);
*/

/* *****using the enumerable attribute****** */
/*var cat = {
    name: {first: 'Fluffy', last: 'Cordero'}, 
    color: 'White'
};
Object.defineProperty(cat, 'name', {enumerable: false});
display(JSON.stringify(cat));
*/

/* *****using the configurable attribute****** */
/*var cat = {
    name: {first: 'Fluffy', last: 'Cordero'}, 
    color: 'White'
};
delete cat.name;
display(cat.name);
*/

/* *****using getters and setters****** */
var cat = {
    name: {first: 'Fluffy', last: 'Cordero'}, 
    color: 'White'
};

Object.defineProperty(cat, 'fullName', {
    get: function() {
        return this.name.first + ' ' + this.name.last
    },
    set: function(value){
        var nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
    }
});

cat.fullName = 'Muffin Top';
display(cat.fullName);
display(cat.name.first);
display(cat.name.last);