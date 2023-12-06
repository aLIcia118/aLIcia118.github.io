// Function to generate a random number between 0 and max (exclusive)
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Function to load random image and caption from the JSON file
function generateRandomImage() {
  fetch('images.json') // Update the filename if necessary
    .then(response => response.json())
    .then(data => {
      const randomIndex = getRandomNumber(data.length);
      const randomImage = data[randomIndex];

      document.getElementById('random-image').src = randomImage.image;
      document.getElementById('caption').textContent = randomImage.caption;
    })
    .catch(error => console.error('Error fetching data:', error));
}
