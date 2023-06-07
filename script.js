// Get the necessary DOM elements
const destinationInput = document.getElementById('destination-input');
const destinationButton = document.getElementById('destination-button');
const tripsList = document.getElementById('trips-list');

// Event listener for adding a destination
destinationButton.addEventListener('click', function() {
  const destination = destinationInput.value;
  
  if (destination) {
    const listItem = document.createElement('li');
    listItem.textContent = destination;
    tripsList.appendChild(listItem);
    destinationInput.value = '';
  }
});
