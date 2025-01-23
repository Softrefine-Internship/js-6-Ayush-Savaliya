// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

async function fetchMultipleAPIs(urls) {
  try {
    const fetchPromises = urls.map(url => fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching ${url}: ${response.statusText}`);
      }
      return response.json();
    }));

    const results = await Promise.all(fetchPromises);

    
    return results;
  } catch (error) {
    console.error('Error fetching data from APIs:', error);
    throw error;
  }
}


urls = [
  // 'https://restcountries.com/v2/name/bhardgsfat',
  'https://restcountries.com/v2/name/bharat',
  'https://restcountries.com/v2/name/usa'
];
fetchMultipleAPIs(urls)
  .then(combResult => {
    console.log('Combined Result:', combResult);
  })
  .catch(error => {
    console.error('Failed to fetch data:', error);
  });