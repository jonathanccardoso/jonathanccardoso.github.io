const labelNav = document.querySelector("label#labelNav");

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      labelNav.style.display = "none";
    } else {
      labelNav.style.display = "inline-block";
    }
  });
});
