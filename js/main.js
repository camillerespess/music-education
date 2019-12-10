let sesame = document.querySelector("#sesamestreet");
sesame.onmouseenter = (e) => {
  e.target.classList.add("animated");
  e.target.classList.add("swing");
}

sesame.onmouseleave = (e) => {
  e.target.classList.remove("animated");
  e.target.classList.remove("swing");
  }

let modal = document.querySelectorAll(".modal");
let piano = document.querySelectorAll(".piano");
// let span = document.getElementsByClassName(".close")[0];
let white = document.querySelectorAll(".white");

// make all close buttons work

let close = document.querySelectorAll(".close");
  close.forEach(function(el) {
    el.onclick = (e) => {
    e.target.closest('div').parentNode.style.display = 'none';
  };
});

function hideAll() {
  modal.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

white.forEach(function(el) {
  el.onclick = (e) => {
        hideAll();

switch (e.target.getAttribute('id')) {
    case 'first':
    document.querySelector('#motorControl')
    .style.display = 'block';
    break;

    case 'second':
    document.querySelector('#buildBonds')
    .style.display = 'block';
    break;

    case 'third':
    document.querySelector('#communications')
    .style.display = 'block';
    break;

    case 'fourth':
    document.querySelector('#higherIq')
    .style.display = 'block';
    break;

    case 'fifth':
    document.querySelector('#languageDevelopment')
    .style.display = 'block';
    break;

    case 'sixth':
    document.querySelector('#imagination')
    .style.display = 'block';
    break;

    case 'seventh':
    document.querySelector('#formalLearning')
    .style.display = 'block';
    break;
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
});
