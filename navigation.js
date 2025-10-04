/*function openNav() {
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
});*/

$(function() {
  $("#includeHtml").load("Navbar.html", function() {
    // Aggiunta evento per menu a tendina
    $(".flip").click(function() {
      $(this).toggleClass("active");
      $(this).next(".panel").slideToggle("fast");
    });

    // Aggiunta evento hamburger dopo caricamento dinamico
    $("#navtoggle2").click(function() {
      $(this).toggleClass("change");
      $("#navbar").toggleClass("navactive");
    });
  });
});
