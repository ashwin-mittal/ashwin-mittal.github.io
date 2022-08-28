$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
  $(".scroll-to-top").click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});

$(".scroll-trigger").click(function () {
  const target = $(this.hash);
  $(".navbar-toggler").click();
  $("body, html").animate(
    {
      scrollTop: target.offset().top,
    },
    1000
  );
  return false;
});

function darkmode() {
  if (document.getElementById("darkSwitch").checked == true) {
    var element = document.body;
    element.classList.toggle("dark-mode", true);
    if (document.querySelector(".jumbotron") != null)
      document.querySelector(".jumbotron").style.backgroundColor = "#1e2125";
    if (document.querySelector(".footer") != null)
      document.querySelector(".footer").style.backgroundColor = "#1e2125";
    if (document.querySelector(".wrapper-content") != null)
      document.querySelector(".wrapper-content").style.backgroundColor =
        "#0F0F0F";
    if (document.querySelector(".home-card") != null)
      document
        .querySelectorAll(".home-card")
        .forEach((element) => (element.style.backgroundColor = "#1e2125"));
  } else {
    var element = document.body;
    element.classList.toggle("dark-mode", false);
    if (document.querySelector(".jumbotron") != null)
      document.querySelector(".jumbotron").style.backgroundColor = "#E9ECEF";
    if (document.querySelector(".footer") != null)
      document.querySelector(".footer").style.backgroundColor = "#f9f9f9";
    if (document.querySelector(".wrapper-content") != null)
      document.querySelector(".wrapper-content").style.backgroundColor =
        "#F0F0F2";
    if (document.querySelector(".home-card") != null)
      document
        .querySelectorAll(".home-card")
        .forEach((element) => (element.style.backgroundColor = "#F0F0F2"));
  }
}
