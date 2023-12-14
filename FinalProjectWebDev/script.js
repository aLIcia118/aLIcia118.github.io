window.addEventListener('load', function () {
  // Code to run when the page is loaded
  const randomImageElement = document.getElementById('random-image');
  if (randomImageElement) {
    randomImageElement.alt = ''; // Set alt attribute to an empty string
  }
});

let activeButton = '';
let savedImageCount = 0;

function setActiveButton(buttonId) {
  activeButton = buttonId;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomImage() {
  let fetchUrl = '';

  if (activeButton === 'generate-button-marine') {
    fetchUrl = 'Marine.json';
  } else if (activeButton === 'generate-button-animal') {
    fetchUrl = 'Animal.json';
  } else if (activeButton === 'generate-button-candyStore'){
    fetchUrl = 'CandyStore.json';
  } else if (activeButton === 'generate-button-custom'){
    fetchUrl = 'Custom.json';
  } else {
    console.error('Unknown active button:', activeButton);
    return;
  }

  fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {
      const randomIndex = getRandomNumber(data.length);
      const randomImage = data[randomIndex];

      // Update the image container
      document.getElementById('random-image').src = randomImage.image;

      // Set the caption text for the current image
      document.getElementById('caption').textContent = randomImage.caption;

      // Increment the saved image count (if needed)
      savedImageCount++;
    })
    .catch(error => console.error('Error fetching data:', error));
}

let savedImagesInCurrentLine = 0;

function saveImage() {
  const savedImagesContainer = document.getElementById('saved-images');
  const randomImageSrc = document.getElementById('random-image').src;
  const randomCaption = document.getElementById('caption').textContent;

  if (randomImageSrc && randomCaption) {
    // Check if the number of saved images in the current line is 6
    
      // Check if the number of saved images in the current line is 6
      if (savedImagesInCurrentLine === 6) {
        // Reset the count and increase the margin-top of body-container
        savedImagesInCurrentLine = 0;
        const imageContainer = document.querySelector('.image-container');
        const currentPaddingTop = parseInt(getComputedStyle(imageContainer).paddingTop);
        const newPaddingTop = currentPaddingTop + 100; // Adjust the value as needed
        imageContainer.style.paddingTop = `${newPaddingTop}px`;
      
        // Create a new line
        const lineBreak = document.createElement('br');
        savedImagesContainer.appendChild(lineBreak);
      }

    
    const savedImageBox = document.createElement('div');
    savedImageBox.classList.add('saved-image-box');

    const savedImage = document.createElement('img');
    savedImage.classList.add('saved-image');
    savedImage.src = randomImageSrc;
    savedImage.alt = randomCaption;

    savedImageBox.appendChild(savedImage);
    savedImagesContainer.appendChild(savedImageBox);

    // Increment the saved image count and the count in the current line
    savedImageCount++;
    savedImagesInCurrentLine++;

    // ...

    let captionElement = document.getElementById('hover-caption');
    
    if (!captionElement) {
      captionElement = document.createElement('div');
      captionElement.id = 'hover-caption';
      captionElement.classList.add('hover-caption');
      document.body.appendChild(captionElement);
      
      // Set the initial position to the bottom left corner
      captionElement.style.position = 'fixed';
      captionElement.style.left = '10px';  // Adjust the left position as needed
      captionElement.style.bottom = '10px';  // Adjust the bottom position as needed

    }

 



     // Show caption on mouseover
    savedImageBox.addEventListener('mouseover', function (event) {
      captionElement.textContent = randomCaption;
      captionElement.style.position = 'fixed'; // Use 'fixed' to position relative to the viewport
      captionElement.style.left = `${event.clientX}px`;
      captionElement.style.top = `${event.clientY}px`;
    });
    
    // Remove the caption on mouseout
    savedImageBox.addEventListener('mouseout', function () {
      captionElement.textContent = ''; // Clear text
      captionElement.style.left = '-9999px'; // Move off-screen
      captionElement.style.top = '-9999px';
    });

    savedImageCount++;
    savedImagesInCurrentLine++;

  }
}
