// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.


async function fetchDataWithRetry(url, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('fetching failed');
      }
      return await res.json();
    } catch (err) {
      if (i == retries - 1) {
        throw err;
      }
    }
  }
}

url = 'https://restcountries.com/v2/name/bharat';

fetchDataWithRetry(url, 3)
  .then(data => console.log(data[0].name))
  .catch(err => console.error('Fetch failed:', err));
