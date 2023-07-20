// ==UserScript==
// @name        reallinks- smmo-db.com
// @namespace      https://github.com/oligochrome
// @match       https://smmo-db.com/items/show/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 5/17/2023, 8:43:27 AM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==
let but1 = document.querySelector("body > div > main > div > div > div > div.mt-4 > div > button:nth-child(1)")
let but2 = document.querySelector("body > div > main > div > div > div > div.mt-4 > div > button:nth-child(2)")
let x = but1.attributes[1].value.replace("openLink('","openLink('https://web.simple-mmo.com")
let y = but2.attributes[1].value.replace("openLink('","openLink('https://web.simple-mmo.com")
but1.setAttribute("onclick", x)
but2.setAttribute("onclick", y)


but1.setAttribute("href",but1.attributes[1].value.split('openLink(\'')[1].split('\')'))

but1.removeAttribute("onclick")