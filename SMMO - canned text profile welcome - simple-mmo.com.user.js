// ==UserScript==
// @name        SMMO - canned text profile welcome - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/user/view/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 5/16/2023, 8:20:28 PM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==



var commentbox = document.getElementsByClassName("shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-xs  sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-100")[0]

function newtext(text)
{
  commentbox.insertAdjacentHTML("afterend","<p>"+text+"</p>")
  commentbox.insertAdjacentHTML("afterend","<p>&ZeroWidthSpace;</p>")
}

newtext("Hello and welcome to SMMO 👋 If you ever need any help or have questions, feel free to drop me a message. The journey of a thousand miles begins with one step. Happy Stepping ^^, - Alcool 🦍")
newtext("➕✅ +rep, Great material ⛏️🧱 trader ^^, ")