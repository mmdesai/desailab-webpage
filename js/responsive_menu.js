/* Modified from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menu_change() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Resize centered takeaway text according to screen size.
function sizeTakeaway() {
    const takeaway = document.getElementById('takeaway');
    if (takeaway) {
        const navbar = document.getElementById('nav-link-container');
        const navbarLink = document.getElementById('home-nav-link');
        const width = navbar.offsetWidth - 2 * (parseFloat(window.getComputedStyle(navbarLink).paddingLeft) + parseFloat(window.getComputedStyle(navbarLink).marginLeft));
        takeaway.style.maxWidth = `${width}px`;
        takeaway.style.visibility = 'visible';  // Reduces glitchy appearance of resizing
    }
}
window.addEventListener('load', sizeTakeaway);
window.addEventListener('resize', sizeTakeaway);