// ==UserScript==
// @name           Steam auto sell button
// @description    adds auto sell button (starting at price) and sells, also minifies inventory page
// @namespace      https://github.com/oligochrome
// @author         oligochrome
// @copyright      2020 oligochrome
// @license        GNU GPL
// @version        1.0.1
// @language       en
// @include  http*://steamcommunity.com/profiles/*/inventory*
// @include  http*://steamcommunity.com/id/*/inventory*
// ==/UserScript==

const hide=e=>{e.style.display="none"},show=e=>{e.style.display="block"},toggle=e=>{"none"===window.getComputedStyle(e).display?show(e):hide(e)};

      jQuery(document).ready(($) => {
			 				$('.item_desc_content').append('<a style="border-radius: 2px;border: none;padding: 1px;display: inline-block;cursor: pointer;text-decoration: none !important;color: #D2E885 !important;background: #a4d007;background: -webkit-linear-gradient( top, #a4d007 5%, #536904 95%);background: linear-gradient( to bottom, #a4d007 5%, #536904 95%);position: fixed;bottom: 540px;right: 120px;width: 250px;height: 38px;padding-top: 16px;font-size: 24px;"class="item_market_action_button_contents item_market_action_button fs" href="#">Quick Sell</a>');
          $('.fs').on('click', quickSell); });
      jQuery(document).ready(($) => {
        $('.item_desc_content').append('<a style="border-radius: 2px;border: none;padding: 1px;display: inline-block;cursor: pointer;text-decoration: none !important;color: #D2E885 !important;background: #a4d007;background: -webkit-linear-gradient( top, #a4d007 5%, #536904 95%);background: linear-gradient( to bottom, #a4d007 5%, #536904 95%);position: fixed;bottom: 430px;right: 120px;width: 250px;height: 38px;padding-top: 16px;font-size: 24px;"class="item_market_action_button_contents item_market_action_button tl" href="#">Toggle Layout</a>');
          $('.tl').on('click', restoreLayout); });

  function quickSell() {
      inf = jQuery('div.inventory_iteminfo:visible').find('.item_market_actions').text();
      expr = /(\d+(?:\.|,?)\d+)/;
      price = expr.exec(inf);
      price = price[1];
if (price > 0.03)
{
price = Number(price) - 0.01;
price.toFixed(2);
} 
else
{ 
console.log("lower");
}

      SellCurrentSelection();
      document.getElementById('market_sell_buyercurrency_input').value = price;
      SellItemDialog.OnBuyerPriceInputKeyUp();
      document.getElementById("market_sell_dialog_accept_ssa").checked = true;
      document.getElementById("market_sell_dialog_accept").click();
      document.getElementById("market_sell_dialog_ok").click();
      setTimeout(() => { document.querySelector("body > div.newmodal_background").click();}, 3000);
  }

  function restoreLayout() { // bring the hidden elements back
		toggle(document.querySelector('#mainContents > div.inventory_links'));
		toggle(document.querySelector('#global_header'));
		toggle(document.querySelector('body > div.responsive_page_frame.with_header > div.responsive_page_content > div.responsive_page_template_content > div.pagecontent.no_header.no_footerpad > div.profile_small_header_bg'));
		toggle(document.querySelector('#footer'));
		toggle(document.querySelector('#inventory_logos'));
		toggle(document.querySelector('#tabcontent_inventory > div.filter_ctn.inventory_filters'));
		toggle(document.querySelector('#tabcontent_inventory > div:nth-child(3)'));
		toggle(document.querySelector('#mainContents > div.games_list_tabs_ctn.responsive_hidden'));
  }