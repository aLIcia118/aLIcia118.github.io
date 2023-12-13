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
  }else if (activeButton === 'generate-button-custom'){
    fetchUrl = 'Custom.json';
  }else {
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
      document.getElementById('caption').textContent = randomImage.caption;
    })
    .catch(error => console.error('Error fetching data:', error));
}

function saveImage() {
  const savedImagesContainer = document.getElementById('saved-images');
  const randomImageSrc = document.getElementById('random-image').src;
  const randomCaption = document.getElementById('caption').textContent;

  if (randomImageSrc && randomCaption) {
    const savedImageBox = document.createElement('div');
    savedImageBox.classList.add('saved-image-box');

    const savedImage = document.createElement('img');
    savedImage.classList.add('saved-image');
    savedImage.src = randomImageSrc;
    savedImage.alt = randomCaption;

    savedImageBox.appendChild(savedImage);
    savedImagesContainer.appendChild(savedImageBox);

    savedImage.addEventListener('mouseover', function (event) {
      // Create a caption element and append it to the body
      const captionElement = document.createElement('div');
      captionElement.classList.add('hover-caption');
      captionElement.textContent = randomCaption;
      document.body.appendChild(captionElement);

      // Calculate the position of the caption based on the mouse position
      const x = event.clientX;
      const y = event.clientY - 30; // Adjust the value to position the caption above the mouse

      // Set the position of the caption
      captionElement.style.position = 'absolute';
      captionElement.style.left = `${x}px`;
      captionElement.style.top = `${y}px`;

      // Remove the caption on mouseout
      savedImage.addEventListener('mouseout', function () {
        document.body.removeChild(captionElement);
      });
    });
  }
}
