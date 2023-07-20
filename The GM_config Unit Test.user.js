// ==UserScript==
// @name          The GM_config Unit Test
// @namespace     sizzlemctwizzle
// @description   Attempts to test every aspect of GM_config.
// @license       MIT
// @version       2.2.2.2
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_log
// @require       https://raw.githubusercontent.com/sizzlemctwizzle/GM_config/master/gm_config.js
// @include       https://openuserjs.org/scripts/sizzle/The_GM_config_Unit_Test
// @homepageURL   https://github.com/sizzlemctwizzle/UserScripts/blob/master/gm_config_unit_test.user.js
// @updateURL     https://openuserjs.org/meta/sizzle/The_GM_config_Unit_Test.meta.js
// ==/UserScript==

// ==OpenUserJS==
// @author sizzle
// @collaborator Marti
// ==/OpenUserJS==

/* jshint esversion: 5 */
/* globals GM_config, GM_configStruct */


GM_config.init(
{
  id: 'GM_config',
  fields:
  {
    'extra':
    {
      'label': 'Extra Field',
      'type': 'text',
      'default': 'This field was added with a second call to init()'
    }
    }
  }
);
GM_config.open();
