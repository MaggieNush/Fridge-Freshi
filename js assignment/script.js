// Select elements
const form = document.getElementById('add-ingredients-form');
const input = document.getElementById('item-name');
const ingredientsPara = document.getElementById('ingredients');

// Create a list to hold added ingredients
const addedList = document.createElement('ul');
addedList.style.listStyle = 'none';
addedList.style.padding = '0';
ingredientsPara.insertAdjacentElement('afterend', addedList);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const value = input.value.trim();

  if (value) {
    // Update the text dynamically
    ingredientsPara.textContent = `You're adding:`;

    // Create a new ingredient tag
    const newItem = document.createElement('li');
    newItem.textContent = value;
    newItem.style.padding = '5px';
    newItem.style.margin = '5px';
    newItem.style.backgroundColor = '#ffe5b4';
    newItem.style.borderRadius = '6px';
    newItem.style.display = 'inline-block';
    newItem.style.cursor = 'pointer';
    newItem.title = 'Click to remove';

    // Allow removal on click
    newItem.addEventListener('click', () => {
      newItem.remove();
      if (addedList.children.length === 0) {
        ingredientsPara.textContent =
          "Enter ingredients from your fridge and we'll find recipes for you.";
      }
    });

    // Add to the list
    addedList.appendChild(newItem);

    // Reset input
    input.value = '';
  }
});
