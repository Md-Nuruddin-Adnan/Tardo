// Add active class to the main nav
var header = document.getElementById("main-nav")
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

$('.toggle_btn').on('click', function(e) {
    $('.toggle-area').toggleClass("d-none"); //you can list several class names 
    // e.preventDefault();
  });
