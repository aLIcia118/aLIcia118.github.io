window.addEventListener('load', function () {
  // Code to run when the page is loaded
  const randomImageElement = document.getElementById('random-image');
  if (randomImageElement) {
    randomImageElement.alt = ''; // Set alt attribute to an empty string
  }
});

let activeButton = '';
let savedImageCount = 0;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function setActiveButton(buttonId) {
  activeButton = buttonId;
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

      // Check if this is the first image loaded
      if (savedImageCount === 0) {
        // Set the initial caption text only for the first image
        document.getElementById('caption').textContent = randomImage.caption;
      }

      savedImageCount++;
    })
    .catch(error => console.error('Error fetching data:', error));
}

function saveImage() {
  const savedImagesContainer = document.getElementById('saved-images');
  const randomImageSrc = document.getElementById('random-image').src;
  const randomCaption = document.getElementById('caption').textContent;

  if (randomImageSrc && randomCaption) {
    // Check if the number of saved images is a multiple of 8
    if (savedImageCount % 8 === 0) {
      // Create a new line before adding the next set of saved images
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

    // Increment the saved image count
    savedImageCount++;

    const captionElement = document.createElement('div');
  captionElement.classList.add('hover-caption');
  captionElement.textContent = randomCaption;

  // Append caption to the saved image box
  savedImageBox.appendChild(captionElement);

  let captionElement = document.getElementById('hover-caption');

  if (!captionElement) {
    captionElement = document.createElement('div');
    captionElement.id = 'hover-caption';
    captionElement.classList.add('hover-caption');
    document.body.appendChild(captionElement);
  }

  // Update caption text
  captionElement.textContent = randomCaption;

  // Update caption position on mousemove within the saved image box
  savedImageBox.addEventListener('mousemove', function (event) {
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
}
