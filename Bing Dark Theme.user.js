// ==UserScript==
// @name          Bing Dark Theme
// @namespace     http://userstyles.org
// @description	  This style gives you a full on dark themed experience for bing.com (the official search engine for Windows by Microsoft that comes default on edge).
// @author        Cairo Mitchell-Acason
// @homepage      https://userstyles.org/styles/164613
// @include       http://bing.com/*
// @include       https://bing.com/*
// @include       http://*.bing.com/*
// @include       https://*.bing.com/*
// @run-at        document-start
// @version       0.20200314013052
// ==/UserScript==
(function() {var css = [
	"@namespace url(http://www.w3.org/1999/xhtml);",
	"/* ========= */",
	"  /* Update 2.0 */",
	"  /* ========= */",
	"",
	"  /* cite URLs */",
	"  cite {",
	"    color: #00809d !important;",
	"  }",
	"",
	"  #searchBox {",
	"    background-color: #000;",
	"  }",
	"  ",
	"  /* Header */",
	"  #b_header {",
	"    border-bottom: 0px solid transparent;",
	"    filter: drop-shadow(0px 0px 4px #000000);",
	"}",
	"  ",
	"  /* Search instead */",
	"  #sp_requery {",
	"    color: #00bd39;",
	"}",
	"  ",
	"  div#sp_recourse {",
	"    color: #ff1d1d;",
	"}",
	"  ",
	"  .b_scopebar .b_active a {",
	"    background-color: transparent !important;",
	"}",
	"  ",
	"  /* Search tab, all, videos, etc. */",
	"  .b_scopebar .b_active {",
	"    border-bottom: 3px solid #007ca9;",
	"}",
	"  ",
	"  li.b_msg {",
	"    background-color: #262626 !important;",
	"}",
	"  ",
	"  li.b_ans {",
	"    background-color: #262626 !important;",
	"    border-bottom: 10px solid #262626;",
	"}",
	"  ",
	"  ",
	"  /* Search suggestion background */",
	"  ",
	"  ul#sa_ul {",
	"    background-color: #111 !important;",
	"    border-bottom: transparent !important;",
	"    border-left: transparent !important;",
	"    border-right: transparent !important;",
	"}",
	"  ",
	"  .sa_tm {",
	"    background-color: #111 !important;",
	"}",
	"  ",
	"  /* Suggestion entries text */",
	"  .sa_tm.sa_tmHS {",
	"    color: #e5e5e5 !important;",
	"}",
	"  ",
	"  /* Burger > Safesearch settings text */",
	"  .hb_value_col {",
	"    color: lightgray;",
	"}",
	"  ",
	"  /* Burger button/link text */",
	"  .hb_title_col {",
	"    color: #767676;",
	"}",
	"  ",
	"  /* Media Content Name */",
	"  .vidr .vidr_meta_source {",
	"    color: #ec1111;",
	"}",
	"  ",
	"  /* Search box results things */",
	"  li#sa_5001 {",
	"    background-color: #444 !important;",
	"}",
	"  li#sa_5002 {",
	"    background-color: #111 !important;",
	"}",
	"  li#sa_5003 {",
	"    background-color: #111 !important;",
	"}",
	"  li#sa_5004 {",
	"    background-color: #111 !important;",
	"}",
	"  li#sa_5005 {",
	"    background-color: #111 !important;",
	"}",
	"  li#sa_5006 {",
	"    background-color: #111 !important;",
	"}",
	"  li#sa_5007 {",
	"    background-color: #111 !important;",
	"}",
	"  li#sa_5008 {",
	"    background-color: #111 !important;",
	"}",
	"  li#sa_5009 {",
	"    background-color: #111 !important;",
	"}",
	"  li#sa_5010 {",
	"    background-color: #111 !important;",
	"}",
	"  ",
	"  ",
	"/*",
	"    **   Global",
	"    */",
	"",
	"/* ID */",
	" #id_h, #id_l {",
	"    background: transparent !important;",
	"    /*background: #222 !important;*/",
	"}",
	"/* Settings */",
	" .sw_pref {",
	"    border-color: #222 !important;",
	"}",
	"#id_sc {",
	"    /* Replace image */",
	"}",
	"/* Body */",
	" body {",
	"    background-color: #222 !important;",
	"}",
	"/* Headings */",
	" h2, .h2 {",
	"    color: #c0c0c0 !important;",
	"}",
	"h3 {",
	"    color: #c0c0c0 !important;",
	"}",
	"/* Footers */",
	" p.b_smText {",
	"    color: #868686 !important;",
	"}",
	"/* Text*/",
	" a, .ftrP11, .ftrP12, .inputTitle, .description, .TaskTitle {",
	"    color: #c0c0c0 !important;",
	"    text-decoration: none !important;",
	"}",
	".ftrSe {",
	"    color: #868686 !important;",
	"}",
	"/* Links */",
	" a:hover {",
	"    color: #c0c0c0;",
	"    text-decoration: none !important;",
	"}",
	"a:visited {",
	"    color: #696969 !important;",
	"    text-decoration: none !important;",
	"}",
	"/* Filters */",
	" .ftrH, .b_dropdown, .ftrD {",
	"    background-color: #222 !important;",
	"    border-color: #222 !important;",
	"}",
	".b_selected, .ftrVS {",
	"    background-color: #262626 !important;",
	"}",
	"/* Reviews */",
	" .b_factrownosep > li:not(.b_sritem) {",
	"    background-color: transparent !important;",
	"}",
	"/*",
	"    ** Splash Page",
	"    */",
	" #hp_sw_hdr {",
	"    background-color: #222 !important;",
	"}",
	"/*",
	"    **   Web Tab",
	"    */",
	"",
	"/* Result boxes */",
	" .b_ans, .b_algo {",
	"    background-color: #222 !important;",
	"}",
	"/* Snippets */",
	" p.snippet, span.sn_snip, div.b_mBottom {",
	"    color: #868686 !important;",
	"}",
	"/* Source */",
	" cite {",
	"    color: #4c4c4c !important;",
	"}",
	".b_caption {",
	"    color: #868686 !important;",
	"}",
	"/* Videos */",
	" .vidr {",
	"    background-color: #262626 !important;",
	"}",
	".va_title_mmftb {",
	"    color: #c0c0c0",
	"}",
	"div.va_title_mmftb::after {",
	"    background: transparent linear-gradient(to right, rgba(238, 238, 238, 0), #262626) repeat scroll 0% 0% !important;",
	"}",
	"/*",
	"    **   News Tab",
	"    */",
	"",
	"/* Action Box */",
	" ul.actions {",
	"    background-color: #262626 !important;",
	"}",
	"li.actionsTxt {",
	"    color: #c0c0c0 !important;",
	"}",
	"/*",
	"    **   Images Tab",
	"    */",
	"",
	"/* Headers */",
	" #b_header, #rfPane, #rf_bar, #ftrB {",
	"    background-color: #222 !important;",
	"}",
	"/*",
	"    **",
	"    */",
	"",
	"/* Headers */",
	" #sw_hdr {",
	"    background-color: #222 !important;",
	"}",
	"/* Search Bar */",
	" #sw_b {",
	"    background-color: #fff;",
	"}",
	"/*",
	"    ** Explore Tab",
	"    */",
	"",
	"/* Background */",
	" .TCThreeColumnIrregular {",
	"    background-color: #222;",
	"}",
	".TCFourColumnMediaCTALayout {",
	"    background-color: #333;",
	"}",
	".TCMediaCTANestLayout {",
	"    background-color: #333;",
	"}",
	".Taskcomp0, .Taskcomp1, .Taskcomp2, .Taskcomp3 {",
	"    background: transparent;",
	"}",
	"#taskComp0, #taskComp1, #taskComp2 {",
	"    background-color: #333 !important;",
	"}",
	"/***** Code Editor related *****/",
	" .monaco-editor-background {",
	"    background-color: #272822;",
	"}",
	"/* selected line",
	"    .monaco-editor .view-line {",
	"        background-color: #3C3D38;",
	"    } */",
	"",
	"/* For default text */",
	" .monaco-editor .token {",
	"    color: #F8F8F2;",
	"}",
	"/* For parentheses and stars */",
	" .monaco-editor.vs .token.delimiter {",
	"    color: #F8F8F2;",
	"}",
	"/* For keywords */",
	" .monaco-editor .token.keyword {",
	"    color: #0080FF;",
	"}",
	".b_pag .sb_pagS, .b_pag a:hover, .b_scopebar>ul>li .menu {",
	"    background-color: #444 !important;",
	"    border-color: #333 !important;",
	"}",
	".b_footer, #detail_meta, .dg_b, #detail_meta #actionbar, .iuscp, div.b_dropdown .b_selected, #b_tween a.ftrH.b_selected:hover, #id_hbfo, .ftrH_MmVert:hover, .ftrH_MmVert:focus, #b_header #landing_tabs, #intrbar_wrapper, .cap_src>a, .b_ans.b_topborder .btm_sml a {",
	"    background-color: #333 !important;",
	"}",
	".touchQuery .carousel .carousel-controls, .touchQuery .carousel .items, .touchQuery .carousel .item, .touchQuery .carousel .carousel-controls .nav_left, .touchQuery .carousel .carousel-controls .nav_right, #insights, .ftrHh, .ftrHh:hover, .ftrVS, .ftrHSe, .inline_tile .carousel, .grpitm, .grpsm, #detail_meta #switcher, #isb {",
	"    background: #222;",
	"}",
	"#insights .expandButton, .b_searchboxForm, .inline_tile .carousel .item .card, .expItem:hover, .ftrD_MmVert, #intrschpane, #intrschpane_ipt, .rc_vlHorizontalImage .rc_vlCard, .tab-menu li, #b_content .cbtn, .cbtn input, .b_scopebar .b_active a, .b_scopebar a:hover, .id_button:hover {",
	"    background-color: #333 !important;",
	"    border-color: #444 !important;",
	"    color: #fff;",
	"}",
	".iuscp .ent.inlinecap {",
	"    border: none;",
	"}",
	"input#sb_form_q, #miniheader .itm:hover {",
	"    background-color: #333 !important;",
	"    color: #fff;",
	"}",
	".hb_section:active, .hb_section:hover, .hb_section:visited, #miniheader table, #miniheader_data .sug, #miniheader_switch, #miniheader.detail .relatedGroup, #detail_viewPage:hover, #att_vi:hover {",
	"    background: #222;",
	"}",
	".inline_tile .carousel .item .card .tit, #detail_meta #att_url, .expItem.textItem .horInfo .iscpri, .expandButton .exptext {",
	"    color: #777;",
	"}",
	"#detail_viewPage, #att_vi {",
	"    color: #fff;",
	"    background-color: transparent;",
	"    border: 1px solid #222;",
	"}",
	".dc_mn, #b_results>.b_top .b_prominentFocusLabel, #b_results>.b_top .b_topTitle, #b_results>.b_top .b_focusTextExtraSmall, #b_results>.b_top .b_focusTextExtraSmall a, #b_results>.b_top .b_focusTextSmall, #b_results>.b_top .b_focusTextSmall a, #b_results>.b_top .b_focusTextMedium, #b_results>.b_top .b_focusTextMedium a, #b_results>.b_top .b_focusTextLarge, #b_results>.b_top .b_focusTextLarge a, .ctxt, .dc_st {",
	"    color: #007DAA;",
	"}",
	".tab-menu li:hover {",
	"    -webkit-box-shadow: inset 0 2px 0 0 #007DAA !important;",
	"    -ms-box-shadow: inset 0 2px 0 0 #007DAA !important;",
	"    box-shadow: inset 0 2px 0 0 #007DAA !important;",
	"    color: #007DAA !important;",
	"}",
	".tab-menu li.tab-active {",
	"    -webkit-box-shadow: inset 0 2px 0 0 #007DAA !important;",
	"    -ms-box-shadow: inset 0 2px 0 0 #007DAA !important;",
	"    box-shadow: inset 0 2px 0 0 #007DAA !important;",
	"    color: #007DAA !important;",
	"    border-top: 1px solid #007DAA;",
	"}",
	"#miniheader .col a strong {",
	"    color: azure;",
	"}",
	".vr_pubinfo_mmftb:after {",
	"    background: none;",
	"}",
	".dg_b .dg_u {",
	"    border: 1px solid #000;",
	"    background: #222;",
	"}",
	".dg_b .dg_u .videoInfoPanel .pubInfo {",
	"    color: #999;",
	"}",
	".dc_mn {",
	"    color: #c0c0c0 !important;",
	"}",
	".dc_st {",
	"    font: 13px Arial, Helvetica, Sans-Serif;",
	"    color: #007daa !important;",
	"}",
	".b_searchboxForm .b_searchboxSubmit {",
	"    background-color: transparent !important;",
	"}",
	"body .b_searchboxForm .b_searchboxSubmit {",
	"    border: 8px solid transparent !important;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
