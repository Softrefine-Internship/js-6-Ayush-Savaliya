// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.


function repeatFunction(func, interval) {
  return setInterval(func, interval);
}

function sayHello() {
  console.log('Hello!');
}

const intervalId = repeatFunction(sayHello, 2000);

setTimeout(() => clearInterval(intervalId), 5000);
