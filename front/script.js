const form = document.querySelector('form');
const resultContainer = document.querySelector('#result');
const input = document.querySelector('input[type="file"]')


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData()
  data.append('file', input.files[0])

  // Make API request
  fetch('/api/fileanalyze', {
    method: 'POST',
    body: data
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      resultContainer.innerHTML = `<code>${JSON.stringify(data)}</code>`;
    })
    .catch(error => {
      console.error('Error:', error);
      resultContainer.innerHTML = `<code>There was an error with your request. Please try again.</code>`;
    });
});
