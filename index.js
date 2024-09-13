// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuCont = document.getElementById('menu')

 
    // Loop through each category and its items in the menu object
       Object.keys(menu).forEach(category => {
        // Create an element to represent the category
        const categEl = document.createElement('h3');
        // Set the text content of the category element to the category name
        categEl.textContent = category;

        // Append the category element to the menu container
        menuCont.appendChild(categEl);

        // Create an element to represent a list of items
        const listEl = document.createElement('ul');

        // Append a list of items element to the menu container
        menuCont.appendChild(listEl);

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const itemsEl = document.createElement('li');

            // Set the text content of the list item element to the item name
            itemsEl.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            itemsEl.addEventListener('click', () => addToOrder(item));

            // Append the list item to the list of items
            listEl.appendChild(itemsEl);
        })

    }) 

        
            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTot = document.getElementById('order-total')

    // Create a list item for the order
    const orderItem = document.createElement('li');

    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;
    // Append the list item to the order items list
    orderItemsList.appendChild(orderItem);

    // Calculate and update the total price
    const currentTot = parseFloat(orderTot.textContent);
    const newTotal = currentTot + 50.00;

    // Update the text content of the order total element with the new total
    orderTot.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
