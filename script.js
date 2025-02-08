document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".nav");
  const sideLogoImg = document.querySelector(".side-logo img");
  const sideLogoH3 = document.querySelector(".side-logo h3");
  const handleScroll = () => {
    if (window.scrollY > 300) {
      navbar.classList.add("after-scroll");
      sideLogoImg.style.borderRight = "1px solid black";
      sideLogoH3.style.visibility = "visible";
    } else {
      navbar.classList.remove("after-scroll");
      sideLogoImg.style.borderRight = "";
      sideLogoH3.style.visibility = "hidden";
    }
  };

  window.addEventListener("scroll", handleScroll);
});


//buurger menu for small devicessssss

const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
let opened = false;

console.log(menu.classList.contains(".menu-active"));

burgerMenu.addEventListener("click", () => {

  if(opened){
    menu.style.right = "-200px";
    burgerMenu.classList.add("fa-bars");
    burgerMenu.classList.remove("fa-x");
    
    opened = false;

  }else{
    menu.style.right = "20px";
    opened = true;
    burgerMenu.classList.remove("fa-bars");
    burgerMenu.classList.add("fa-x");
  }
});




// scroll animatin function

function animateOnScroll(element, animationClass, threshold = 0.5) {
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              element.classList.add(animationClass);
          } else {
            element.classList.remove(animationClass);
        }
      });
  }, { threshold });

  observer.observe(element);
}


const visionMissionPhoto = document.querySelector(".vision-mission-photo");
animateOnScroll(visionMissionPhoto, "vision-mission-photo-visible",0.1);


const visionMissionContent = document.querySelector(".vision-mission-content");
animateOnScroll(visionMissionContent,"vision-mission-content-visible",0.001);