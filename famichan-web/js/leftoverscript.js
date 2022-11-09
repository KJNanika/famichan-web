//This file is for useful JS code that would otherwise be cluttering up the main script file due to the webpage not needing it.
console.log('Hello ' +  'console!'); 
let message ="Hello!";
console.log(message.toUpperCase()); /*This is an object, with the methods 'log' and 'toUpperCase'. Now's a good time (or a goot dime apparently) to remind myself that objects and methods prefer to work in camelCase */
console.log(20+5); /*This is an equation. Incidentally, this is also considered 'primitive' data*/
console.error('This is an error');
console.warn('This is a warning');
//console.clear();
function timeoutTest() {
    console.log('MessageA');
}

setTimeout(timeoutTest, 5000);

console.log('MessageB');