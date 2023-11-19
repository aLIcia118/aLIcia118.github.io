


document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const randomDogNameDiv = document.getElementById('randomDogName');
  
    generateBtn.addEventListener('click', function () {
      fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/dog_names.json')
        .then(response => response.json())
        .then(data => {
          const randomIndex = Math.floor(Math.random() * data.dog_names.length);
          const randomDogName = data.dog_names[randomIndex];
  
          randomDogNameDiv.textContent = `♡ ${randomDogName} ♡`;
        })
        .catch(error => console.error('Error fetching data:', error));
    });
  });

  
