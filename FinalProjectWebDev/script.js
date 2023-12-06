// Function to generate a random number between 0 and max (exclusive)
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Function to load random image and caption from the specified JSON file
function generateRandomImage(jsonFile) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const randomIndex = getRandomNumber(data.length);
      const randomImage = data[randomIndex];

      document.getElementById('random-image').src = randomImage.image;
      document.getElementById('caption').textContent = randomImage.caption;
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Initial generation when the page loads
document.addEventListener('DOMContentLoaded', function () {
  // You can generate an image from the first JSON file on page load if needed
  // generateRandomImage('images.json');
});
