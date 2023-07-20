// ==UserScript==
// @name        wwww- apvp.app
// @updateURL   https://github.com/oligochrome/scripts/raw/main/wwww- apvp.app.user.js
// @namespace   - apvp.app -

// @match       https://www.apvp.app/*
//

// @grant       none
// @version     1.0
// @author      -
// @description 9/16/2022, 8:24:13 PM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @inject-into page
// @run-at document-idle

// ==/UserScript==
if(document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.mt-4.h-96.rounded-md > div > div:nth-child(2) > div.flex.justify-center > div > div > div").outerHTML.split('<div class="progress-bar2 npcHPBar" style="width: ')[1].split(';max-width:')[0].split('%')[0] < 50){
    setURL()
}