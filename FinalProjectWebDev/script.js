function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

let activeButton = ''; 

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
  const randomImageSrc = document.getElementById('random-image').src;
  const randomCaption = document.getElementById('caption').textContent;

  if (randomImageSrc && randomCaption) {
    const savedImagesContainer = document.getElementById('saved-images');

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

    // Show caption on hover
    savedImage.addEventListener('mouseover', function () {
      document.getElementById('hover-caption').textContent = randomCaption;
    });

    // Clear caption on mouseout
    savedImage.addEventListener('mouseout', function () {
      document.getElementById('hover-caption').textContent = '';
    });

    savedImageBox.appendChild(savedImage);
    savedImagesContainer.appendChild(savedImageBox);

    savedImageCount++;
  }
}
