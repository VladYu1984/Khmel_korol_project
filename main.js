const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const button = document.querySelector("#myButton");

const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

const fixedElement = document.querySelector('.navbar');
const footer = document.querySelector('.nav_w-768');

function isFooterVisible() {
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  return footerRect.top >= windowHeight;
}

function updateFixedElement() {
  if (!isFooterVisible()) {
    fixedElement.style.display = 'none';
  } else {
    fixedElement.style.display = 'block';
  }
}

window.addEventListener('scroll', updateFixedElement);
window.addEventListener('resize', updateFixedElement);

document.getElementById("pdf_Button_first").addEventListener("click", function() {
    window.open("HK_menu.pdf", "_blank");
});

document.getElementById("pdf_Button_Under_Sales").addEventListener("click", function() {
    window.open("HK_menu.pdf", "_blank");
});

document.getElementById("pdf_Button_second").addEventListener("click", function() {
  window.open("HK_menu.pdf", "_blank");
});

document.getElementById("button_to_top").addEventListener("click", function() {
  window.open("#header_khmel_yakor","_top");
});

document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.btn_nav_right');

  button.addEventListener('click', function() {
  var active = document.querySelector('.nav_under_burger li.active');
  var next = active.nextElementSibling;
  
      if (next) {
      active.classList.remove('active');
      next.classList.add('active');
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.btn_nav_left');

  button.addEventListener('click', function() {
  var active = document.querySelector('.nav_under_burger li.active');
  var prev = active.previousElementSibling;
  
      if (prev) {
      active.classList.remove('active');
      prev.classList.add('active');
      }
  });
});