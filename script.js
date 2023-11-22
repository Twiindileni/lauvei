document.addEventListener('DOMContentLoaded', function() {
    // Home button
    document.getElementById('homeBtn').addEventListener('click', function() {
        redirectToPage('home.html'); // Replace 'home.html' with the actual page URL
    });

    // New Stock button
    document.getElementById('newStockBtn').addEventListener('click', function() {
        redirectToPage('new_stock.html'); // Replace 'new_stock.html' with the actual page URL
    });

    // Contact button
    document.getElementById('contactBtn').addEventListener('click', function() {
        redirectToPage('contact.html'); // Replace 'contact.html' with the actual page URL
    });
});
