// ==UserScript==
// @name           SMMO - Close Guilded members - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - Close Guilded members - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match          https://web.simple-mmo.com/user/view/*
// @grant          none
// @version        1.0
// @author         Ogliochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @description    09/05/2023, 17:36:25
// @updateURL https://github.com/oligochrome/scripts/blob/raw/SMMO%20-%20Close%20Guilded%20members%20-%20simple-mmo.com.user.js
// ==/UserScript==
const savedValue = localStorage.getItem("lbhide");
if (savedValue && savedValue === "true") {
    if(document.querySelectorAll("#menu-item-1")[1].innerText != "Send Guild Invite"){window.close()}
}
