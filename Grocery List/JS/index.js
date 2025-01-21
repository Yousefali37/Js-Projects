const inputField = document.getElementById('input');
const form = document.querySelector('form');
const output = document.getElementById('output');

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the input value
    const inputValue = inputField.value.trim();

    // Check if the input is not empty
    if (inputValue) {
        // Create a new list item element
        const listItem = document.createElement('li');
        listItem.innerText = inputValue;

        // Add click event to toggle strikethrough
        listItem.addEventListener('click', () => {
            listItem.style.textDecoration = listItem.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        });

        // Append the new list item to the output (grocery list)
        output.appendChild(listItem);

        // Clear the input field after adding the item
        inputField.value = '';
    }
});
