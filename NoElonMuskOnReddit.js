// ==UserScript==
// @name         No Elon Musk on Reddit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stop showing posts with "Elon Musk" in the title on subreddits
// @author       Veylon
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var anchors = document.getElementsByTagName("a");
    for(var a = 0; a < anchors.length; a++)
    {
        if(anchors[a].innerText.toLowerCase().search("elon musk") != -1)
        {
            var par = anchors[a].parentElement;
            for(var p = 0; p < 3; p++)
                if(par != null)
                    par = par.parentElement;
            if(par != null && par.getAttribute("data-context") == "listing")
                    par.innerHTML = par.innerText = par.class = null;
        }
    }
})();
