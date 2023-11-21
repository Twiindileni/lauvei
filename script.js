document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Add your form submission logic here
    // You can use AJAX or other methods to handle form submission
    alert('Form submitted!');
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }