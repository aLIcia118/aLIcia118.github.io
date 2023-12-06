// Function to generate a random number between 0 and max (exclusive)
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomMarine() {
  console.log('Generating random Marine image...');
  fetch('images.json')
    .then(response => response.json())
    .then(data => {
      const randomIndex = getRandomNumber(data.length);
      const randomImage = data[randomIndex];

      // Update the marine image container
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

      // Update the animal image container
      document.getElementById('random-image-animal').src = randomImage.image;
      document.getElementById('caption-animal').textContent = randomImage.caption;
    })
    .catch(error => console.error('Error fetching data:', error));
}


// Initial generation when the page loads
document.addEventListener('DOMContentLoaded', function () {
  // You can generate an image from one of the sections on page load if needed
  // generateRandomMarine();
  // generateRandomAnimal();
});
