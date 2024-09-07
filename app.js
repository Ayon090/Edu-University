let pass = false;
let eye = document.getElementById("eye");
let passwords = document.getElementById("password");
function toggle() {
  if (pass) {
    passwords.setAttribute("type", "password");
    document.getElementById("eye").style.color = "#7b7b7b";
    eye.style.cursor = "pointer";
    pass = false;
  } else {
    passwords.setAttribute("type", "text");
    document.getElementById("eye").style.color = "#ff5421";
    eye.style.cursor = "pointer";
    pass = true;
  }
}

window.onload = function () {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".contents").style.display = "block";
};

function ytVideo() {
  window.open("https://www.youtube.com/watch?v=tkThkOz4Ygk");
}
//  function testimonial()

function navigation() {
  let nav = document.querySelector(".navBar");
  let scroll = document.querySelector(".scroll-up");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      nav.classList.add("hit");
      scroll.style.visibility = "visible";
      scroll.style.opacity = 1;
    } else {
      nav.classList.remove("hit");
      scroll.style.visibility = "hidden";
      scroll.style.opacity = 0;
    }
  });
}

function slides() {
  let swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: true,
    speed: 6000,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
}

function userSearch() {
  let search = document.querySelector(".search");
  let fllScrn = document.querySelector(".fs-search");
  let close = document.querySelector(".close");
  search.addEventListener("click", () => {
    fllScrn.style.display = "block";
    document.querySelector(".main").style.display = "none";
  });

  close.addEventListener("click", () => {
    fllScrn.style.display = "none";
    document.querySelector(".main").style.display = "block";
  });
}
function bag() {
  let bag = document.querySelector(".bag");
  bag.addEventListener("mouseenter", () => {
    document.querySelector(".itemCart").style.display = "inline-grid";
  });
  bag.addEventListener("mouseleave", () => {
    document.querySelector(".itemCart").style.display = "none";
  });
}

function desBar() {
  let handleBar = document.querySelector(".destop-bar");
  let rightBar = document.querySelector(".bar-overlay");
  let barClose = document.querySelector(".bar-close");

  handleBar.addEventListener("click", () => {
    rightBar.style.right = "-3px";
    barClose.addEventListener("click", () => {
      rightBar.style.right = "-510px";
    });
  });
}

// Fuction callout
slides();
navigation();
bag();
desBar();
userSearch();
// showPass();
