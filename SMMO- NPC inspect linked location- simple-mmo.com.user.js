// ==UserScript==
// @name        SMMO- NPC inspect linked location- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO- NPC inspect linked location- simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/npc/inspect/*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 3/2/2023, 9:30:20 PM

// ==/UserScript==
let traveluri = "https://web.simple-mmo.com/horse-and-carriage/travel/"
let townName = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.bg-white.dark\\:bg-gray-950.ring-1.ring-black.ring-opacity-5.shadow-sm.rounded-lg.mt-1.sm\\:mt-2.dark\\:ring-white.dark\\:ring-opacity-5 > nav > span > span.truncate.ml-2")
function town(townnum){let x = townName.innerHTML ="<a href='"+traveluri+""+townnum+"'>"+townName.innerText+"</a>" ;
                       return x}
switch(townName.innerText) {
case "Simpletopia":
town(1);
    break;

case "Holbeck":
town(2);
    break;

case "Davenport":
town(3);
    break;

case "Ironforge":
town(4);
    break;

case "Everwinter":
town(5);
    break;

case "Elise Mountain":
town(6);
    break;

case "The Underworld":
town(7);
    break;

case "Desert of Eternal Dreams":
town(8);
    break;

case "Ednia":
town(13);
    break;

case "Mount Byrior":
town(14)
    break;

case "Baththagnte Creek":
town(15);
    break;

case "Saint Xvilhol":
town(16);
    break;

case "New Bramp":
town(17);
    break;

case "Lake Masmark":
town(18);
    break;

case "Eldham":
town(19);
    break;

case "Mount Hawkfels":
town(20);
    break;

case "Old Ranhor":
town(21);
    break;

case "Venzor":
town(22);
    break;

case "Dragontail":
town(23);
    break;

case "Arkhan":
town(27);
    break;


  default:
   console.log("error")
}