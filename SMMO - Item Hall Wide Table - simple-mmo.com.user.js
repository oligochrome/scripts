// ==UserScript==
// @name           SMMO - Item Hall Wide Table - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match          https://web.simple-mmo.com/armoury/*
// @match          https://web.simple-mmo.com/market/listings?user_id=476520*
// @grant          none
// @version        1.0
// @author         Ogliochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @description    09/05/2023, 17:01:25

// ==/UserScript==
let gt = document.body.getElementsByClassName('-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8')[0]
if(gt != undefined){
gt.style.overflowX = "visible";
}