// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function fun(callback) {
  setTimeout(funCall, 2000);
}

function funCall() {
  console.log("function call after 2 sec")
  // fun(funCall);
}

fun(funCall);