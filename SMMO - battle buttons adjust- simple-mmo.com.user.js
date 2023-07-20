// ==UserScript==
// @name        SMMO - battle buttons adjust- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - battle buttons adjust- simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/npcs/attack/*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 10/21/2022, 11:56:34 PM

// ==/UserScript==
//document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.relative.z-20 > div.fixed.inset-0.z-10.overflow-y-auto > div > div > div.mt-5.sm\\:mt-6 > a").style.display = "none";
//document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.relative.z-20 > div.fixed.inset-0.z-10.overflow-y-auto > div > div > div.text-xs.text-center > button").style.fontSize = "x-large"
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.relative.z-20 > div.fixed.inset-0.z-10.overflow-y-auto > div > div").style.marginTop = "55px"

document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.rounded-lg.h-96 > div:nth-child(2) > button:nth-child(1)").style.height ="300px"
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.rounded-lg.h-96 > div:nth-child(2) > button:nth-child(1)").style.width ="300px"
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.rounded-lg.h-96").style.height = "0"


let disbox = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.relative.z-20 > div.fixed.inset-0.z-10.overflow-y-auto > div > div").style
disbox.position = "absolute"
disbox.top = "3%"
disbox.left = "41%"