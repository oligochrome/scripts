// ==UserScript==
// @name           SMMO - Close Guilded members - simple-mmo.com
// @downloadURL    https://github.com/oligochrome/scripts/raw/main/SMMO - Close Guilded members - simple-mmo.com.user.js
// @updateURL
// @namespace      https://github.com/oligochrome
// @match          https://web.simple-mmo.com/user/view/*
// @grant          none
// @version        1.1
// @author         Ogliochrome
// @license        GNU GPL
// @description    When opening background tabs from leaderboard, this will check if the user is in a guild already; if they are - close the tab
// ==/UserScript==
const savedValue = localStorage.getItem("lbhide");
const butClass = document.getElementsByClassName("inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs sm:text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500");

if (savedValue && savedValue === "true") {
  const elementsToCheck = [butClass[0], butClass[1], butClass[3]]; // Check butClass[0], butClass[1], and butClass[3]
  for (const element of elementsToCheck) {
    if (element && element.innerText === "View Guild") {
      window.close();
      break; // Close the window only once a match is found
    }
  }
}
