// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {  // Declaring the default values in ES6 can be done in the parameters
    // if(typeof firstName === 'undefined') {   |
    //     firstName = 'John'                   |
    // }                                        |
    //                                          | This was used for ES5
    // if(typeof lastName === 'undefined') {    |
    //     lastName = 'Doe'                     |
    // }                                        |

    // console.log('Hello')
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('Steve', 'Smith'));

// FUNCTION EXPRESSIONS

const square = function(x) {
    return x*x;
}

console.log(square(8)); // returns 64

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function() {
    console.log('IIFE Ran...');
})();

(function(name) {
    console.log(`Hello ` + name);
})('Brad');

// PROPERTY METHODS

const todo = {
    add: function() {
        console.log('Add todo...')
    },

    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {          //
    console.log('Delete todo...');  //  Functions can be created outside of the scope of its object
}                                   //

todo.add();
todo.edit(22);
todo.delete();