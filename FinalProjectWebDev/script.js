// Function to generate a random number between 0 and max (exclusive)
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

let activeButton = ''; // Variable to track the active button

function setActiveButton(buttonId) {
  activeButton = buttonId;
}

function generateRandomImage() {
  let fetchUrl = '';

  if (activeButton === 'generate-button-marine') {
    fetchUrl = 'images.json';
  } else if (activeButton === 'generate-button-animal') {
    fetchUrl = 'Animal.json';
  } else {
    console.error('Unknown active button:', activeButton);
    return;
  }

  fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {
      const randomIndex = getRandomNumber(data.length);
      const randomImage = data[randomIndex];

      // Update the image container based on the active button
      const imageContainerId = activeButton === 'generate-button-marine' ? 'image-container-marine' : 'image-container-animal';
      const randomImageId = activeButton === 'generate-button-marine' ? 'random-image-marine' : 'random-image-animal';
      const captionId = activeButton === 'generate-button-marine' ? 'caption-marine' : 'caption-animal';

      document.getElementById(randomImageId).src = randomImage.image;
      document.getElementById(captionId).textContent = randomImage.caption;

      // Optionally, you can reset the active button to allow switching between buttons
      // setActiveButton('');
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Initial generation when the page loads
document.addEventListener('DOMContentLoaded', function () {
  // You can generate an image from one of the sections on page load if needed
  // generateRandomMarine();
  // generateRandomAnimal();
});
