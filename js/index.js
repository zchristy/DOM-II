
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

    // reset after a short delay
      setTimeout(function() {
        body.classList.remove("apply-shake");
      }, 500);
});

// =========== drag & drop - images ==========
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

// =========== page scroll - sticky nav ==========
let header = document.querySelector("header");

window.addEventListener('scroll', function() {
  header.classList.add("sticky");
});

// =========== on load - Modal ==========

var modal = document.querySelector('#myModal');

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close")[0];

window.addEventListener('load', function(event) {
    modal.style.display = "block";
    modal.style.transition = 'all 0.5s linear';
});

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function(event) {
  modal.style.display = "none";
  modal.style.transition = 'all 0.5s linear';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.style.transition = 'all 0.5s linear';
  }
});
