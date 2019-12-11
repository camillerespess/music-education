let sesame = document.querySelector("#sesamestreet");
sesame.onmouseenter = (e) => {
  e.target.classList.add("animated");
  e.target.classList.add("swing");
}

sesame.onmouseleave = (e) => {
  e.target.classList.remove("animated");
  e.target.classList.remove("swing");
  }

  let easymusic = document.querySelector("#easymusic");
  easymusic.onmouseenter = (e) => {
    e.target.classList.add("animated");
    e.target.classList.add("swing");
  }

  easymusic.onmouseleave = (e) => {
    e.target.classList.remove("animated");
    e.target.classList.remove("swing");
    }

  let musicalme = document.querySelector("#musicalme");
    musicalme.onmouseenter = (e) => {
      e.target.classList.add("animated");
      e.target.classList.add("swing");
    }

    musicalme.onmouseleave = (e) => {
      e.target.classList.remove("animated");
      e.target.classList.remove("swing");
      }

let simplypiano = document.querySelector("#simplypiano");
        simplypiano.onmouseenter = (e) => {
          e.target.classList.add("animated");
          e.target.classList.add("swing");
        }

        simplypiano.onmouseleave = (e) => {
          e.target.classList.remove("animated");
          e.target.classList.remove("swing");
          }

let loopimal = document.querySelector("#loopimal");
                  loopimal.onmouseenter = (e) => {
                    e.target.classList.add("animated");
                    e.target.classList.add("swing");
                  }

                  loopimal.onmouseleave = (e) => {
                    e.target.classList.remove("animated");
                    e.target.classList.remove("swing");
                    }

let modal = document.querySelectorAll(".modal");
let piano = document.querySelectorAll(".piano");
// let span = document.getElementsByClassName(".close")[0];
let white = document.querySelectorAll(".white");
let mobilewhite = document.querySelectorAll(".mobilewhite");

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

// open modals in desktop

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

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
});

// open modals in mobile

mobilewhite.forEach(function(el) {
  el.onclick = (e) => {
        hideAll();

switch (e.target.getAttribute('id')) {
    case 'mobilefirst':
    document.querySelector('#motorControl')
    .style.display = 'block';
    break;

    case 'mobilesecond':
    document.querySelector('#buildBonds')
    .style.display = 'block';
    break;

    case 'mobilethird':
    document.querySelector('#communications')
    .style.display = 'block';
    break;

    case 'mobilefourth':
    document.querySelector('#higherIq')
    .style.display = 'block';
    break;

    case 'mobilefifth':
    document.querySelector('#languageDevelopment')
    .style.display = 'block';
    break;

    case 'mobilesixth':
    document.querySelector('#imagination')
    .style.display = 'block';
    break;

    case 'mobileseventh':
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
