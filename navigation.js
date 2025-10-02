function openNav() {
    document.getElementById("navbar").classList.toggle("navactive");
}

$(function() {
                $("#includeHtml").load("Navbar.html");
            });

$(function(){
  $(".flip").click(function(){
    $(this).toggleClass("active");
    $(this).next(".panel").slideToggle("fast");
  });
});