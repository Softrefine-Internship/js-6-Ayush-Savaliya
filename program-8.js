// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

const fetchWithinTime = async function (url, sec) {
  const controller = new AbortController();
  const timeoutPromise = timeout(sec);

  try {
    const res = await Promise.race([
      fetch(url),
      timeoutPromise
    ]);

    const data = await res.json();
    return data;
  } catch (err) {
    if (err.message === 'Request took too long!') {
      controller.abort();
    }
    throw err;
  }
};


fetchWithinTime('https://restcountries.com/v2/name/bharat', 1)  
  .then(data => console.log(data))
  .catch(err => console.error(err));
