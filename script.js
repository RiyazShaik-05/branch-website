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





document.addEventListener("DOMContentLoaded", () => {
  if(window.innerWidth > 1080){
    const title = document.querySelector(".department-name");
  const cursor = document.createElement("div");

  const cursorSize = 25;
  const hoverSize = 150;

  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    const rect = title.getBoundingClientRect();
    const inTitle = x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;

    if (inTitle) {
      cursor.style.opacity = "1"; // Show cursor
      cursor.style.width = hoverSize + "px";
      cursor.style.height = hoverSize + "px";
    } else {
      cursor.style.opacity = "0"; // Hide cursor
      cursor.style.width = cursorSize + "px";
      cursor.style.height = cursorSize + "px";
    }

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
  }
});
