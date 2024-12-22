document.getElementById('orderForm').addEventListener('submit', function(event) {
    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const meal = document.getElementById('meal').value;

    if (!name || !email || !phone || !meal) {
        alert('Please fill out all fields.');
        event.preventDefault();
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    alert('Order submitted successfully!');
});

// Toggle navigation menu for mobile view
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;'; // Hamburger menu icon
document.querySelector('.navbar .container').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById('orderNowButton').addEventListener('click', function(e) {
    e.preventDefault();

    // Fade out the original Hero content
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';

    // After the fade-out animation is complete, hide the original content and show the new menu content
    setTimeout(function() {
        heroContent.classList.add('hidden');
        
        const menuContent = document.querySelector('.menu-content');
        menuContent.classList.remove('hidden');
        setTimeout(function() {
            menuContent.classList.add('show');
        }, 50);
    }, 500);
});

// Scroll to the order form when the "Proceed to Order" button is clicked
document.getElementById('goToOrderForm').addEventListener('click', function(e) {
    e.preventDefault();

    // Transition to the order form section smoothly
    document.querySelector('#order').scrollIntoView({ behavior: 'smooth' });
});
