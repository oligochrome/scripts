// ==UserScript==
// @name        SMMO - buttom elems - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 4/21/2023, 5:50:21 PM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==
let sidebar = document.getElementsByClassName('flex flex-col flex-grow border-r border-gray-200  pt-5 bg-white dark:bg-gray-950 overflow-y-auto')[0]

function createCheckboxWithLocalStorage(name, container) {
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id = name;

  container.insertAdjacentElement("beforebegin", checkbox);

  const savedValue = localStorage.getItem(name);
  if (savedValue) {
    checkbox.checked = savedValue === "true";
  }

  checkbox.addEventListener("change", function () {
    localStorage.setItem(name, checkbox.checked);
  });

  checkbox.insertAdjacentText("afterend", " " + name);
}

//if(window.location.href.includes("/inventory/")){null}else{


/*let lbhide = document.createElement('input')
lbhide.type = "checkbox"
lbhide.id = "lbbox"

sidebar.insertAdjacentElement("beforebegin",lbhide)
const savedValue = localStorage.getItem("lbhide");
if (savedValue) {
  lbhide.checked = savedValue === "true";
}
lbhide.addEventListener("change", function () {
  localStorage.setItem("lbhide", lbhide.checked);
});
lbhide.insertAdjacentText("afterend"," lbhide")
*/


createCheckboxWithLocalStorage("lbhide", sidebar);

createCheckboxWithLocalStorage("marketbank", sidebar);
//}

let modhtml = `
<a href="#" id="modal-link">Open Modal</a>


`

sidebar.insertAdjacentHTML("afterend","<a href=\"#\" id=\"modal-link\">Open Modal</a>")