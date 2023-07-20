// ==UserScript==
// @name        Steam - Badge page change links to trade card bot links- steamcommunity.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/Steam - Badge page change links to trade card bot links- steamcommunity.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://steamcommunity.com/id/alcoolemia/badges/
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 4/1/2023, 4:48:06 AM

// ==/UserScript==


let links = document.querySelectorAll("a");

for (let index = 0; index < links.length; index++) {
    if(links[index].href.includes("gamecard")){var x = links[index].href.split('gamecards/')[1];x = x.split('/')[0];links[index].href = "https://www.steamcardexchange.net/index.php?inventorygame-appid-"+x+""
}
}