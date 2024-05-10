// BACKGROUND //
const blob = document.getElementById("blob");

window.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1000, fill: "forwards"});
}

// BUTTONS //
const docs_page = document.querySelector('.docs');
let toggled_docs = false;

function toggle_docs() {
  if (toggled_docs) {
    docs_page.style.left = '100%';
    toggled_docs = false;
  }
  else {
    docs_page.style.left = '0%';
    toggled_docs = true;
  }
}