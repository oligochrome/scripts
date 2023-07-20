// ==UserScript==
// @name           Steam - Checkbox when redeeming code
// @namespace      https://github.com/oligochrome
// @description    sdfsd
// @author         oligochrome
// @copyright      2019 oligochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @match https://store.steampowered.com/account/registerkey
// @grant          none
// ==/UserScript==

function CheckAll()
{
count = document.frm.elements.length;
    for (i=0; i < count; i++) 
	{
    if(document.frm.elements[i].checked == 0)
    	{document.frm.elements[i].checked = 1; }
    
	}
}