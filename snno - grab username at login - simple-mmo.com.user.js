// ==UserScript==
// @name       snno - grab username at login - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/login*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 10/21/2022, 11:21:06 PM

// ==/UserScript==
// Create the element
var script = document.createElement("script");
// Add script content
script.innerHTML = "function getun(){console.log(document.querySelector(\"#email\").value);if(document.querySelector(\"#email\").value === \"m.edievalduel@gmail.com\"){localStorage.setItem('smmoUN', 'Nyanta')}else if(document.querySelector(\"#email\").value === \"medievalduel@gmail.com\"){localStorage.setItem('smmoUN', 'Alcoolemia')}}";
// Append
document.head.appendChild(script);

document.querySelector("body > div > div.mt-8.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md > div.bg-white.pb-8.pt-4.px-4.shadow.sm\\:rounded-lg.sm\\:px-10 > form > div:nth-child(6) > button").outerHTML = '<a onclick="getun();" href="javascript:;"><button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">\nSign in\n</button></a>'