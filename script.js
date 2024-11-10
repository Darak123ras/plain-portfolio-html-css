window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 60) { // Adjust the scroll value as needed
        navbar.style.backgroundColor = "#560d3e"; // Change to your desired color
    } else {
        navbar.style.backgroundColor = "transparent";
    }
};