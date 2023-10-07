//will execute inside of javascriop onload function
function initialSetup() {
    var sidemenu = document.getElementById("popUpSideMenuDiv");
    sidemenu.style.display = "none";
}

//will execute on top menu menu icon click
function menuIconResponse() {
    var sidemenu = document.getElementById("popUpSideMenuDiv");
        sidemenu.style.display = "block";
        //sidemenu.classList.toggle("transformed-state");
    var topMenuIcon = document.getElementById("topMenuIconClickable");
    topMenuIcon.style.display = "none";
}

/*
function SMLclick() {
    var children = document.getElementById("sideMenuParent");
    for (const child of children) {
        child.addEventListener('click',function() {
            window. open(`../${child.textContent}/${child.textContent}.html}`);
        } );
    }
      // Do stuff
 }
    var children = document.getElementById("sideMenuParent");
    for (const child of children) {
        child.addEventListener('click',function() {
            window. open(`../${child.textContent}/${child.textContent}.html}`);
        } );
}

*/

// will execute on side menu close-icon click
function sideMenuClose() {
    document.getElementById("popUpSideMenuDiv").style.display = "none";
    var topMenuIcon = document.getElementById("topMenuIconClickable");
    topMenuIcon.style.display = "block";
}

// will execute after html document loaded
window.onload = function() {
    initialSetup();
}