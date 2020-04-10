function myFunction() {
    var x = document.getElementById("navBar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "14.7vw";
  }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

