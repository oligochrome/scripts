// ==UserScript==
// @name        test apline - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/test apline - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/inventory/*
// @version     1.0.0
// @author      Ogliochrome
// @description 10/2/2022, 7:11:19 PM
// @inject-into page
// ==/UserScript==
//

if (window.Alpine) {
	console.log("Aplinejs Loaded");
} else {
	var script = document.createElement('script');
	script.src = 'https://unpkg.com/alpinejs@3.4.2/dist/cdn.min.js';
	document.getElementsByTagName('head')[0].appendChild(script);
}

/*
// Create the element
var script = document.createElement("script");
// Add script content
script.innerHTML = "function lol() {if (document.querySelector('#colButt > div > div').style.display !== 'none'){colButt.style.background = 'transparent';document.querySelector('#colButt > div > div').style.background = 'transparent'}else{colButt.style.background = '#373737'}}";
// Append

document.head.appendChild(script);
function lol() {if (document.querySelector('#colButt > div > div').style.display !== 'none'){colButt.style.background = 'transparent';document.querySelector('#colButt > div > div').style.background = 'transparent'}else{colButt.style.background = '#373737'}}
*/

function css(element, style) {
	for (const property in style)
		element.style[property] = style[property];
}

var textFill = `<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>`

// script.addEventListener('load', function(){
//   Alpine = unsafeWindow['Alpine'];
//   Alpine.noConflict();
//   /* You put your Alpine code here, which must use the Alpine namespace. See Note. */
// }, false);

var newli = document.createElement('div');
newli.id = "colButt";
newli.innerHTML = '<div x-data=\"{ open: false }\"><button @click=\"open = ! open\">Toggle</button><div x-show=\"open\" @click.outside=\"open = false\" style=\"display: none;\">test</div></div>';
newli.childNodes[0].childNodes[1].innerText = textFill
var itemToAppend = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.hidden.md\\:flex.md\\:flex-shrink-0.bg-white.dark\\:bg-gray-950.overflow-hidden.ease-in-out.duration-500.sm\\:duration-700.transition-width.w-48.lg\\:w-64 > div > div > div.mt-5.flex-grow.flex.flex-col > nav");
itemToAppend.appendChild(newli);

document.querySelector("#colButt").style.borderStyle = 'solid'
document.querySelector("#colButt").style.border = 'solid rgb(255, 255, 255)'
document.querySelector("#colButt > div > div").style.backgroundColor = "#171717"
document.querySelector("#colButt > div > div").style.height = '100%'
document.querySelector("#colButt > div > div").style.height = $( colButt ).height()
document.querySelector("#colButt > div > div").style.width = $( colButt ).width()
// document.querySelector('#colButt > div > button').outerHTML = `
// <button @click="open = ! open" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 10px;" onclick=`() => {if (document.querySelector(\'#colButt > div > div\').style.display !== \'none\'){colButt.style.background = \'transparent\';document.querySelector(\'#colButt > div > div\').style.background = \'transparent\'}else{colButt.style.background = \'#373737\'}`">Toggle</button>`;`

/*
document.querySelector('#colButt > div > button').outerHTML = "<button @click=\"open = ! open\" onclick=\"lol()\" style=\"position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 10px;\">Toggle</button>"
*/

css(newli, {
	position: 'absolute',
	top: '0%',
	left: '0%',
//	marginTop: '-50px',
//	marginLeft: '-50px',
	width: '80%',
	height: '80%',
	'z-index': '999',
	color: '#ffffff',
 // display: flex,
'align-items': 'center',
'justify-content': 'center',
      'margin-left': '13%',
    'margin-top': '4%',
//	borderStyle: "solid",
//  border: '#ffffff'
});
css(
document.querySelector("#colButt > div > button"), {
    'position': 'absolute',
    'left': '50%',
    'top': '50%',
    'transform': 'translate(-50%, -50%)',
    'padding': '10px'
});

// function addGlobalStyle(css) {
//     var head, style;
//     head = document.getElementsByTagName('head')[0];
//     if (!head) { return; }
//     style = document.createElement('style');
//     style.type = 'text/css';
//     style.innerHTML = css;
//     head.appendChild(style);
// }
// document.querySelector("#colButt > div > div").style
// addGlobalStyle('newli{position: absolute;top: 50%;left: 50%;margin-top: -50px;margin-left: -50px;width: 100px;height: 100px;}');