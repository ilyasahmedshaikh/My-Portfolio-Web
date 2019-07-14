// getting sidebar in variable
var sidebar = document.querySelector('.sidebar');

// getting fade section in variable
var fadeSection = document.querySelector('.fade-area');

function myFunction(x) {
    // animating icon
    x.classList.toggle("change");

    // animating sidebar
    sidebar.classList.toggle("show");

    // enabling fade section 
    fadeSection.classList.toggle("show");
  }