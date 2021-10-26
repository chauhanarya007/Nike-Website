
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  //Toggle Nav

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // Animate links
  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = '';
    }else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
    }
  });
//burger animation

burger.classList.toggle('toggle');
  });
}

// ---------------------loader-----------------------
window.addEventListener("load", function(){
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class will be added to loader
})
navSlide();
//////cursor animation--------------------------------------------
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');
let purchase = document.querySelectorAll(".button");

window.addEventListener('mousemove',cursor);

function cursor(e){
  console.log(e);
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link =>{
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove("link-grow");
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add("link-grow");
  });
});
purchase.forEach(button => {
  button.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove("btn-grow");
    
  });
  button.addEventListener('mouseover', () => {
    mouseCursor.classList.add("btn-grow");
    console.log('hi');
  });
});


///card animation--------------------------------------------------
//movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

const sneaker = document.querySelector(".sneaker img");
// moving animation event

  container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
  });

  
  //Animate In
    container.addEventListener("mouseenter", () => {
      card.style.transition = "none";
      //Popout
      sneaker.style.transform = "translateZ(50px) rotateZ(0deg)";
    });

  
  //Animate Out
  container.addEventListener("mouseleave", () => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    sneaker.style.transform = "translateZ(0px) rotateZ(-25deg)";
  });

  // // ------------------------------for img 2---------------------------------
  
  const card2 = document.querySelector(".card2");

const container2 = document.querySelector(".container2");

const sneaker2 = document.querySelector(".sneaker2 img");

container2.addEventListener('mousemove', (e) =>{
  let xAxis2 = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis2 = (window.innerHeight / 2 - e.pageY) / 50;
    card2.style.transform = `rotateX(${xAxis2}deg) rotateY(${yAxis2}deg)`;
    console.log("hi fvdfv");
});
container2.addEventListener("mouseenter", () => {
  card2.style.transition = "none";
  //Popout
  sneaker2.style.transform = "translateZ(50px) rotateZ(0deg)";
});
container2.addEventListener("mouseleave", () => {
  card2.style.transition = "all 0.5s ease";
  card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  sneaker2.style.transform = "translateZ(0px) rotateZ(-25deg)";
});
// ----------------------------------for img3---------------------------
const card3 = document.querySelector(".card3");

const container3 = document.querySelector(".container3");

const sneaker3 = document.querySelector(".sneaker3 img");

container3.addEventListener('mousemove', (e) =>{
  let xAxis3 = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis3 = (window.innerHeight / 2 - e.pageY) / 50;
    card3.style.transform = `rotateX(${xAxis3}deg) rotateY(${yAxis3}deg)`;
    console.log("hi fvdfv");
});
container3.addEventListener("mouseenter", () => {
  card3.style.transition = "none";
  //Popout
  sneaker3.style.transform = "translateZ(50px) rotateZ(0deg)";
});
container3.addEventListener("mouseleave", () => {
  card3.style.transition = "all 0.5s ease";
  card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  sneaker3.style.transform = "translateZ(0px) rotateZ(-25deg)";
});
