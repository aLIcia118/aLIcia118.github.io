// Function to generate a random number between 0 and max (exclusive)
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Function to load random image and caption from the JSON file
function generateRandomMarine() {
  fetch('SonnyAngels/Marine.json')
    .then(response => response.json())
    .then(data => {
      const randomIndex = getRandomNumber(data.length);
      const randomImage = data[randomIndex];

      // Target the specific elements for the Marine section
      const imageContainer = document.getElementById('image-container-marine');
      const randomImageElement = imageContainer.querySelector('.random-image');
      const captionElement = imageContainer.querySelector('.caption');

      // Set the new image and caption
      randomImageElement.src = randomImage.image;
      captionElement.textContent = randomImage.caption;
    })
    .catch(error => console.error('Error fetching data:', error));
}

function generateRandomAnimal() {
  fetch('SonnyAngels/Animal.json')
    .then(response => response.json())
    .then(data => {
      const randomIndex = getRandomNumber(data.length);
      const randomImage = data[randomIndex];

      // Target the specific elements for the Animal section
      const imageContainer = document.getElementById('image-container-animal');
      const randomImageElement = imageContainer.querySelector('.random-image');
      const captionElement = imageContainer.querySelector('.caption');

      // Set the new image and caption
      randomImageElement.src = randomImage.image;
      captionElement.textContent = randomImage.caption;
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Initial generation when the page loads
document.addEventListener('DOMContentLoaded', function () {
  // You can generate an image from one of the sections on page load if needed
  // generateRandomMarine();
  // generateRandomAnimal();
});
