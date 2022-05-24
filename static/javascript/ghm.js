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
}
}


//navbar scroll disappear




// background darkening on scrool
window.onscroll = function() {myFunction()};

let prevScrollpos = window.pageYOffset;
function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 350) {
    let wrapper = document.querySelector('#wrapper1');
    wrapper.className = 'wrapper-1-dark';
  } else {
    let wrapper = document.querySelector('#wrapper1');
    wrapper.className = 'wrapper-1';
  }

  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-1.5em";
  }
  prevScrollpos = currentScrollPos;
}

// rooms slider

const roomsrightSlide = document.querySelector('#roomsslideright');
const roomsleftSlide = document.querySelector('#roomsslideleft');

roomsrightSlide.addEventListener('click', roomsSlide);
roomsleftSlide.addEventListener('click', roomsSlide);

function roomsSlide(e){
  const radio1 = document.querySelector('#radio1');
  const radio2 = document.querySelector('#radio2');
  const radio3 = document.querySelector('#radio3');
  const radio4 = document.querySelector('#radio4');
  const radio5 = document.querySelector('#radio5');
  const radio6 = document.querySelector('#radio6');
  const radio7 = document.querySelector('#radio7');
  const radio8 = document.querySelector('#radio8');

  if(e.target.id === 'roomsslideright'){
    if(radio1.checked === true){
      radio2.checked = true;
    } else if(radio2.checked === true){
      radio3.checked = true;
    } else if(radio3.checked === true){
      radio4.checked = true;
    } else if(radio4.checked === true){
      radio5.checked = true;
    } else if(radio5.checked === true){
      radio6.checked = true;
    } else if(radio6.checked === true){
      radio7.checked = true;
    } else if(radio7.checked === true){
      radio8.checked = true;
    }
  } else if(e.target.id === 'roomsslideleft'){
    if(radio8.checked === true){
      radio7.checked = true;
    } else if(radio2.checked === true){
      radio1.checked = true;
    } else if(radio3.checked === true){
      radio2.checked = true;
    } else if(radio4.checked === true){
      radio3.checked = true;
    } else if(radio5.checked === true){
      radio4.checked = true;
    } else if(radio6.checked === true){
      radio5.checked = true;
    } else if(radio7.checked === true){
      radio6.checked = true;
    }
  }
}