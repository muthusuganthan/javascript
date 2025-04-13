fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Check for non-2xx status codes
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log(data); // Handle the data
  })
  .catch(error => {
    console.error('Fetch error:', error); // Handle any errors
  });