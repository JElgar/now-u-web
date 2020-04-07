function toggleHamburger() {
  var x = document.getElementById("nav-bar-ul")
  var y = document.getElementById("nav-bar")
  if (x.className === "show") {
    //x.style.display = "none";
    x.className - "hide"
    y.style.height = "10%"
  } else {
    //x.style.display = "block"
    x.className = "show"
    y.style.height = "100%"
  }
}

function closeHamburger() {
  if(window.matchMedia("(max-width: 820px)")) {
    var x = document.getElementById("nav-bar-ul")
    var y = document.getElementById("nav-bar")
    //x.style.display = "none";
    x.className = "hide"
    y.style.height = "10%"
  }
}

