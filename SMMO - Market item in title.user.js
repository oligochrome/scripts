// ==UserScript==
// @name        SMMO - Market item in title - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/market/listings
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 7/27/2023, 9:53:38 PM
// ==/UserScript==

var title = document.getElementsByClassName('text-sm font-medium text-gray-900 dark:text-gray-100 truncate')[0].textContent.replace('\n                        ','').replace('\n                      ','')
document.title = title + ' | ' + document.title
