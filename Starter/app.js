// Here I am making a factory or a function that returns or makes other things
// this makeGreeting function will return a function
// note that the variable language is being passed to the outer function, not the inner function. In other words, the variable language will be trapped/collected in the closure

function makeGreeting(language){
    return function (firstName, lastName){
        if (language === 'en') {
            console.log('Hello' + ' ' + firstName + ' ' + lastName);
        }

        if (language === 'es') {
            console.log('Hola' + ' ' + firstName + ' ' + lastName);
        }
    }
}

// because the variable language is trapped in the closure, this allows us to use it in interesting ways like so:

let greetEnglish = makeGreeting('en');
let greetSpanish = makeGreeting('es');

// now that we passed in the language, the function that is returned (the inner function) will have an outer reference to the variable language. to use it, the inner function needs to be invoked. Let's invoke the inner function and pass in firstName and lastName:

greetEnglish('Miguel', 'Venegas'); //output: 'Hello Miguel Venegas'

greetSpanish('Miguel', 'Venegas'); //output: 'Hola Miguel Venegas'

// as you can see, I created a factory function that returns different scripts depending on what language is passed into the outer function.