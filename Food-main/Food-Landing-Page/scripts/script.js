// JavaScript code to add and remove the "active" class on click
const menuItems = document.querySelectorAll('.menu-item-side-bar li');
const scrollBarOut = document.querySelector('.scroll-bar-out');
const scrollBarIn = document.querySelector('.scroll-bar-in');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove "active" class from all items
        menuItems.forEach(i => i.classList.remove('active'));
        
        // Add "active" class to the clicked item
        item.classList.add('active');

        // Get the index of the clicked item
        const index = Array.from(menuItems).indexOf(item);

        // Calculate the height based on the clicked item index
        const heightPercentage = (index + 1) * 20;
        scrollBarIn.style.height = `${heightPercentage}%`;
    });
});
