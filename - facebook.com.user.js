// ==UserScript==
// @name        - facebook.com
// @namespace      https://github.com/oligochrome
// @include     *.facebook.com/*/videos/*
// @include    https://www.facebook.com/*/videos/*/*
// @include    https://www.facebook.com/watch/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 6/2/2023, 6:48:46 AM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==
// Get the current URL
var currentUrl = window.location.href;

// Create the new URL
var newUrl = "https://fbdownloader.app/en/?q=" + encodeURIComponent(currentUrl);

// Create a button element
var button = document.createElement("button");
button.innerHTML = "Download Video";
button.style.marginLeft = "10px";
button.style.cursor = "pointer";

// Set the button's click event to open the new URL
button.addEventListener("click", function() {
  window.open(newUrl);
});

// Find the element you want to insert the button next to
var targetElement = document.querySelectorAll('svg')[0].parentElement

// Insert the button next to the target element
targetElement.parentNode.insertBefore(button, targetElement.nextSibling);
