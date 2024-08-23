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
  window.location = "./docs.html";
}

function open_main() {
  window.location = "./index.html";
}

// Search Bar //
let search = "";
let key = "";

function searchQuery(query) {
  // window.location = `https://google.com/search?q=${encodeURIComponent(query)}`;
}

content.onkeydown = function(event) {
  search = document.getElementById("content").innerHTML;
  key = event.key;
  if(key == "Enter") {
    event.preventDefault();
    searchQuery(search);
  }
}