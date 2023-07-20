// ==UserScript==
// @name        SMMO- send item full amt- simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/senditem/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 1/31/2023, 9:50:17 PM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==

let amt = parseInt(document.body.getElementsByClassName("px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 mt-4")[0].childNodes[1].childNodes[3].childNodes[3].childNodes[1].innerText)
document.querySelector("#quantity").value = amt
