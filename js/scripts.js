const labelNav = document.querySelector("label#labelNav");

const linkNav = document.querySelector("nav > .nav-wrapper > ul > li > a");

$(document).ready(function () {
  var links = document.querySelectorAll("nav > .nav-wrapper > ul > li > a");
  for (var x = 0; x < links.length; x++) {
    links[x].onclick = function () {
      labelNav.click();
    };
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      labelNav.style.display = "none";
    } else {
      labelNav.style.display = "inline-block";
    }
  });

  let i = true;
  labelNav.addEventListener("click", () => {
    if (/Mobi/.test(navigator.userAgent)) {
      if (i) {
        document.querySelector("body").style.overflowY = "hidden";
        console.log("hidden");
        i = false;
      } else {
        document.querySelector("body").style.overflowY = "initial";
        i = true;
      }
    }
  });
});
