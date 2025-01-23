//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.
async function fetchUrls(urls) {
  try {
    const fetchPromises = urls.map(url => fetch(url).then(res => res.json()));
    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    console.error('Error fetching:', error);
  }
}

urls = [
  // 'https://restcountries.com/v2/name/bhardgsfat',
  'https://restcountries.com/v2/name/bharat',
  'https://restcountries.com/v2/name/usa'
];

fetchUrls(urls).then(data => console.log(data));
