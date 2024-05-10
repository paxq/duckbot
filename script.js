// BACKGROUND //
const blob = document.getElementById("blob");

// window.onpointermove = event => {
//   const { clientX, clientY } = event;

//   blob.animate({
//     left: `${clientX}px`,
//     top: `${clientY}px`
//   }, { duration: 1000, fill: "forwards"});
// }

// BUTTONS //
const docs_page = document.querySelector('.docs');

function  open_docs() {
  docs_page.style.left = '0%';
}

function open_main() {
  docs_page.style.left = '100%';
}