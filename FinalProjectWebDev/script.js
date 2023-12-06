function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Function to load random image and caption from the JSON file
function generateRandomMarine() {
  console.log('Generating random marine image...');
  fetch('images.json')
    .then(response => response.json())
    .then(data => {
      const randomIndex = getRandomNumber(data.length);
      const randomImage = data[randomIndex];

      document.getElementById('random-image-marine').src = randomImage.image;
      document.getElementById('caption-marine').textContent = randomImage.caption;
    })
    .catch(error => console.error('Error fetching data:', error));
}

function generateRandomAnimal() {
    console.log('Generating random Animal image...');
  fetch('Animal.json')
    .then(response => response.json())
    .then(data => {
      const randomIndex = getRandomNumber(data.length);
      const randomImage = data[randomIndex];

      document.getElementById('random-image-animal').src = randomImage.image;
      document.getElementById('caption-animal').textContent = randomImage.caption;
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Initial generation when the page loads
document.addEventListener('DOMContentLoaded', function () {
  generateRandomMarine(); // or generateRandomAnimal();
});
