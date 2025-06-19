//your code here!

// Function to add list items
function addListItems(count) {
    const ul = document.getElementById('your-list-id'); // Replace with your actual list ID
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${ul.children.length + 1}`; // Dynamic item numbering
        ul.appendChild(li);
    }
}

// Initial load of 10 items
addListItems(10);

// Scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const listBottom = document.getElementById('your-list-id').offsetTop + document.getElementById('your-list-id').offsetHeight;

    // Check if scrolled to the bottom of the list
    if (scrollPosition >= listBottom) {
        addListItems(2); // Add 2 more items
    }
});