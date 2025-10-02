function openNav() {
    document.getElementById("navbar").classList.toggle("navactive");
}

$(function() {
  $("#includeHtml").load("Navbar.html", function() {
    // Ora .flip è nel DOM
    $(".flip").click(function() {
      $(this).toggleClass("active");
      $(this).next(".panel").slideToggle("fast");
    });
  });
});

