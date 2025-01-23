// Simulate an asynchronous operation using a promise
function asyncOpr1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Operation 1 complete');
      resolve('Result of Operation 1');
    }, 1500);
  });
}

function asyncOpr2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Operation 2 complete');
      resolve('Result of Operation 2');
    }, 1500);
  });
}

function asyncOpr3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Operation 3 complete');
      resolve('Result of Operation 3');
    }, 1500);
  });
}


async function performAsyncOprs() {
  try {
    const res1 = await asyncOpr1();
    console.log(res1);

    const res2 = await asyncOpr2();
    console.log(res2);

    const res3 = await asyncOpr3();
    console.log(res3);

    console.log('All operations complete');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}


performAsyncOprs();
