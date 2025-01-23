// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function httpRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => {
        if (!res.ok) return;
        return res.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => reject(err));
  })
}

url = 'https://restcountries.com/v2/name/bharat';

httpRequest(url)
  .then(data => console.log(data))
  .catch(err => console.error(err));