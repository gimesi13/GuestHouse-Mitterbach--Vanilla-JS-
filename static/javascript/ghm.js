//hamburger menu//

const hamburgermenu = document.querySelector('#hamburgermenu');
hamburgermenu.addEventListener('click',hamburgerclick);

//functions//
//hamburger menu//
function hamburgerclick(){
    const hamburger = document.querySelector('#navUl');
    const Xicon = document.createElement('img');
    Xicon.src = `static/images/white-x-mark-icon-327097.png`;
    const hamburgerimage = document.createElement('img');
    hamburgerimage.src = `static/images/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png`;
    hamburgerimage.className = 'hamburgerimg';
    Xicon.className = 'white-x-mark-icon';

    if (hamburger.className === 'nav-ul'){
        hamburger.className = "nav-ul-active";
        hamburgermenu.innerHTML ='';
        hamburgermenu.appendChild(Xicon);

    } else {
        hamburger.className = "nav-ul";
        hamburgermenu.innerHTML ='';
        hamburgermenu.appendChild(hamburgerimage);
    }
}

document.onclick = function(e){

if(e.target.className!=='nav-ul-active' && e.target.className!=='hamburgerimg'){
    const hamburger = document.querySelector('#navUl');
    const hamburgerimage = document.createElement('img');
    hamburgerimage.src = `static/images/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png`;
    hamburgerimage.className = 'hamburgerimg';

    hamburger.className = "nav-ul";
    hamburgermenu.innerHTML ='';
    hamburgermenu.appendChild(hamburgerimage);
    console.log('now');
}
}


//navbar scroll disappear

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-1.5em";
  }
  prevScrollpos = currentScrollPos;
}
