// ==UserScript==
// @name        SMMO - Players list filter guild members- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - Players list filter guild members- simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/userlist/all*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 4/14/2023, 12:53:32 AM
// ==/UserScript==
if(localStorage.getItem("lbhide") === "true"){
let guilds = document.getElementsByClassName('text-indigo-600 hover:text-indigo-700')
for (let index = 0; index < guilds.length; index++) {
    if(guilds[index].href !== undefined && guilds[index].href.includes('https://web.simple-mmo.com/user/view/')  === true){if(guilds[index].firstChild.textContent.includes('[')  === true){guilds[index].parentElement.parentElement.parentElement.style.display = "none";}
}
}
}
