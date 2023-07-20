// ==UserScript==
// @name        - simplemmo.me
// @updateURL   https://github.com/oligochrome/scripts/raw/main/- simplemmo.me.user.js
// @namespace      https://github.com/oligochrome
// @match       https://simplemmo.me/mobile/*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 2/1/2023, 3:52:05 PM

// ==/UserScript==

let x = window.location.href.split('mobile/?page=')[1]
let y = "https://web.simple-mmo.com/"
let z = y+x
window.location.href = z