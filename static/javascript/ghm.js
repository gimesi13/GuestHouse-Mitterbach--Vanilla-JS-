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
    document.getElementById("navbar").style.cssText =`background-color:rgba(0, 0, 0, 0.158);`;
    wrapper.className = 'wrapper-1-dark';

    document.getElementById("downarrow").style.cssText =`opacity:0;`;
  } else {
    let wrapper = document.querySelector('#wrapper1');
    document.getElementById("navbar").style.cssText =`background-color:transparent;`;
    wrapper.className = 'wrapper-1';

    document.getElementById("downarrow").style.cssText =`opacity:1;`;
  }
// navbar scroll behaviour
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.height = '7em';
    document.getElementById("youthhostel").style.fontSize = "16px";
    document.getElementById("youthhostel").style.marginTop = "0";
    document.getElementById("navUl").style.marginTop = "0";

  } else {
    document.getElementById("navbar").style.height = "4em";
    document.getElementById("youthhostel").style.fontSize = "13px";
    document.getElementById("youthhostel").style.marginTop = "-9px";
    document.getElementById("navUl").style.marginTop = "-1.5em";



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
    }else if(radio8.checked === true){
      radio1.checked = true;}
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
    } else if(radio1.checked === true){
      radio8.checked = true;
    }
  }
}

// page animations

const bgpic = document.querySelector('#wrapper1');


const tl = new TimelineMax();


tl.fromTo(bgpic,0.2,{transform:'scale(1)'}, {transform:'scale(1.3)',ease: "power2.out"});
tl.fromTo(bgpic,2,{transform:'scale(1.3)'}, {transform:'scale(1)',ease: "power2.out"});


// read covid details

const readdetailsbtn = document.querySelector('#readdetailsbtn').addEventListener('click',readDetails);

function readDetails(){
  const covidclose = document.querySelector('#covidclose');
  const coviddetails = document.querySelector('#covidinfo');
  
  document.body.style.cssText = `pointer-events: none;`;
  
  coviddetails.style.cssText =`opacity:1; pointer-events: auto;`;
  covidclose.style.cssText =`opacity:1; pointer-events: auto`;

  
  
}
//close details 
const covidclose = document.querySelector('#covidclose');

covidclose.addEventListener('click',cClose);

function cClose() {
  document.body.style.cssText = `pointer-events: auto;   
  overflow-y: auto; height:100%`;
  const coviddetails = document.querySelector('#covidinfo');
  coviddetails.style.cssText =`opacity:0; pointer-events: none;`;
  covidclose.style.cssText =`opacity:0; pointer-events: none;`;
}

// mountain images pop out
const mountainimg = document.querySelector('.mountains-container');

mountainimg.addEventListener('click',mountainClick);

function mountainClick(e){
  const image= e.target;
    if (image.id === 'gemeindeimg'){
      //create the div and the img
      let mountainpanel = document.querySelector('#activities');
      let gemeindebigContainer = document.createElement('div');
      gemeindebigContainer.className = 'gemeindebig-container';
      let gemeindebig = document.createElement('img');
      gemeindebig.src= `static/images/gemeindealpe-dummy-pic.jpg`;
      gemeindebig.className = 'gemeindebig';
      gemeindebigContainer.appendChild(gemeindebig);
      mountainpanel.appendChild(gemeindebigContainer);

     // create a quit button with function
      let quitbutton = document.createElement('img');
      quitbutton.className = 'quit-button';
      quitbutton.src = 'static/images/white-x-mark-icon-327097.png';
      quitbutton.onclick = closeImg;
      gemeindebigContainer.appendChild(quitbutton);
      // block body from pointer events and scroll
      document.body.style.overflow = 'hidden';

    } else if (image.id === 'mariazellimg'){
      //create the div and the img
      let mountainpanel = document.querySelector('#activities');
      let gemeindebigContainer = document.createElement('div');
      gemeindebigContainer.className = 'gemeindebig-container';
      let gemeindebig = document.createElement('img');
      gemeindebig.src= `static/images/mariazell.jpg`;
      gemeindebig.className = 'gemeindebig';
      gemeindebigContainer.appendChild(gemeindebig);
      mountainpanel.appendChild(gemeindebigContainer);

     // create a quit button with function
      let quitbutton = document.createElement('img');
      quitbutton.className = 'quit-button';
      quitbutton.src = 'static/images/white-x-mark-icon-327097.png';
      quitbutton.onclick = closeImg;
      gemeindebigContainer.appendChild(quitbutton);
      // block body from pointer events and scroll
      document.body.style.overflow = 'hidden';

    } else if (image.id === 'annabergimg'){
      //create the div and the img
      let mountainpanel = document.querySelector('#activities');
      let gemeindebigContainer = document.createElement('div');
      gemeindebigContainer.className = 'gemeindebig-container';
      let gemeindebig = document.createElement('img');
      gemeindebig.src= `static/images/annaberg.jpg`;
      gemeindebig.className = 'gemeindebig';
      gemeindebigContainer.appendChild(gemeindebig);
      mountainpanel.appendChild(gemeindebigContainer);

     // create a quit button with function
      let quitbutton = document.createElement('img');
      quitbutton.className = 'quit-button';
      quitbutton.src = 'static/images/white-x-mark-icon-327097.png';
      quitbutton.onclick = closeImg;
      gemeindebigContainer.appendChild(quitbutton);
      // block body from pointer events and scroll
      document.body.style.overflow = 'hidden';
    }
}
// mountain images pop out end

function closeImg(e){
  e.target.parentElement.remove();
  document.body.style.overflow = 'auto';
}