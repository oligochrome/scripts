// ==UserScript==
// @name        astats replace run link with install- astats.nl
// @namespace      https://github.com/oligochrome
// @match       https://astats.astats.nl/astats/Steam_Game_Info.php
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 4/15/2023, 2:31:02 AM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==
let link = document.getElementsByClassName('content')[0]
let newlink = link.href.split('steam://run/')[1]
newlink = "steam://install/" + newlink
link.href = newlink