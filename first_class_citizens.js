/*
Functions are first class citizens in javascript meaning that you can:

1. Assign them to variables
2. You can pass them as arguments inside other functions
3. You can return them from other functions
*/

// 1. Functions can be assigned to variables
const say_hello = () => {
    console.log("Hello");
}

// 2. Function can be passed as arguments inside other functions
const return_greeting = (greeting) => {
    return greeting;
}
const say_hello_to = (greet_function, name) => {
    console.log(`${greet_function("Hello")} ${name}`);
}

// You can return them from other functions
const greet_person = (greeting) => {
    const say_hello_to_name = (name) => {
        console.log(`${greeting} ${name}`);
    }

    return say_hello_to_name;
}