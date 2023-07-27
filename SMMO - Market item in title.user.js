// ==UserScript==
// @name        SMMO - Market item in title - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/market/listings?item_id=*
// @grant       none
// @version     1.0.1
// @author      Ogliochrome
// @description 7/27/2023, 9:53:38 PM
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - Market item in title.user.js
// ==/UserScript==

var title = document.getElementsByClassName('text-sm font-medium text-gray-900 dark:text-gray-100 truncate')[0].textContent.replace('\n                        ','').replace('\n                      ','')
document.title = title + ' | ' + document.title
