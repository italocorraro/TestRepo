let navigazione = `
        <div id="navbar">
        <ul>

            <li>
                <a href="Home.html">
                    Appunti
                </a>
            </li>

<!--        Lista pagine HTML                          -->
            <li class="flip">
                <span>HTML</span>
            </li>
            <ul class="panel">
                <li>
                    <a href="Basic Styles.html">
                        Basic Styles
                    </a>
                </li>
                <li>
                    <a href="Hyperlinks.html">
                        Hyperlinks
                    </a>
                </li>
                <li>
                    <a href="Imageses.html">
                        Images
                    </a>
                </li>
                <li>
                    <a href="Tablers.html">
                        Tables
                    </a>
                </li>
                <li>
                    <a href="Listas.html">
                        Lists
                    </a>
                </li>
                <li>
                    <a href="Iframes.html">
                        Iframe
                    </a>                    
                </li>
            </ul>

<!--        Lista pagine CSS                          -->
            <li class="flip">
                <span>CSS</span>
            </li>
            <ul class="panel">
                <li><a href="Border Image.html">Border Images</a></li>
            </ul>

<!--        Lista pagine JS                          -->
            <li class="flip">
                <span>JavaScript</span>
            </li>
            <ul class="panel">
                <li><a>nothing</a></li>
<!--        Lista pagine JS                          -->
                <li class="flip">
                    <span>JQuery</span>
                </li>
                <ul class="panel">
                    <li><a>nothing</a></li>
                </ul>

<!--        Lista pagine JS                          -->
                <li class="flip">
                    <span>React</span>
                </li>
                <ul class="panel">
                    <li><a>nothing</a></li>
                </ul>

            </ul>




        </ul>
    </div>


    <div class="headbar"></div>
    <div class="navtoggle" id="navtoggle2">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
      `;

$(function() {
    $("body").prepend(navigazione);

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
})


    
  
      