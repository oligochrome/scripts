// ==UserScript==
// @name       smmo- guild invite - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/smmo- guild invite - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/user/view/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 1/7/2023, 4:38:12 AM

// ==/UserScript==
var gid;
var un = document.getElementsByClassName('text-indigo-600 hover:text-indigo-700')[0].innerText.split(' ')[1].split(' ')[0]
if(un === "lazyriches"){gid = 2075}
if(un === "Alcoolemia"){gid = 39}
if(un === "Guides"){gid = 971}
console.log(un)
console.log(gid)
var a = document.body.getElementsByClassName('web-app-container');if(a[0].innerHTML.includes("View Guild")){null}else{


var uid = window.location.href.split('view/')[1]
const ginv = document.createElement('button')
ginv.innerText = 'invite'
document.body.getElementsByClassName('mt-6 flex flex-col justify-stretch sm:flex-row sm:space-y-0')[0].appendChild(ginv)
   ginv.addEventListener('click', () => {
if (!window.__cfRLUnblockHandlers) return false; postPopup('Guild Invite', 'Are you sure that you want to invite  to your guild?', '/api/user/'+uid+'/guild/'+gid+'/invite', 'Send Invite', false, false, false);
      })
    }