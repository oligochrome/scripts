// ==UserScript==
// @name           SMMO - Close Guilded members - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match          https://web.simple-mmo.com/user/view/*
// @grant          none
// @version        1.0
// @author         Ogliochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @description    09/05/2023, 17:36:25
// ==/UserScript==
const savedValue = localStorage.getItem("lbhide");
if (savedValue && savedValue === "true") {
    if(document.querySelectorAll("#menu-item-1")[1].innerText != "Send Guild Invite"){window.close()}
}