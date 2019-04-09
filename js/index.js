
// =========== MouseOver - transform ==========
const image = document.querySelectorAll('div img');

image.forEach(function(val){
  val.addEventListener('mouseover', function(event) {
    event.target.style.transform = 'scale(1.1, 1.1)';
    event.target.style.transition = 'all 0.2s linear';

    // reset the after a short delay
      setTimeout(function() {
        event.target.style.transform = '';
      }, 1000);
  });
});

// =========== keydown - shake ==========
const body = document.querySelector("body");

body.addEventListener("keydown", function(event) {
    event.preventDefault();
    body.classList.add("apply-shake");

    // reset the after a short delay
      setTimeout(function() {
        body.classList.remove("apply-shake");
      }, 500);
});

// =========== drag & drop - images ==========
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// =========== page scroll - sticky nav ==========
window.addEventListener('scroll', function() {
  classToggle()
};);

let header = document.querySelector("header");

let sticky = header.offsetTop;

function classToggle() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
