// ==UserScript==
// @name         AutoSignin_gamer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Auto Sign in gamer.com.tw
// @author       You
// @match        http*://www.gamer.com.tw/*
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

GM_addStyle(`
    .alert {display: none;position: fixed;top: 50%;left: 50%;min-width: 300px;max-width: 600px;transform: translate(-50%,-50%);z-index: 99999;text-align: center;padding: 15px;border-radius: 3px;}
    .alert-success {color: #3c763d;background-color: #dff0d8;border-color: #d6e9c6;}
`);

var prompt = function (message, style, time)
{
    style = (style === undefined) ? 'alert-success' : style;
    time = (time === undefined) ? 1200 : time;
    $('<div>')
        .appendTo('body')
        .addClass('alert ' + style)
        .html(message)
        .show()
        .delay(time)
        .fadeOut();
};

var success_prompt = function(message, time)
{
    prompt(message, 'alert-success', time);
};

// Main function
(function() {
    if(document.querySelector("#signin-btn") != null)
    {
        var strCheck = document.querySelector("#signin-btn").innerText;
        if(strCheck.search('達成') == -1)
        {
            console.log("[AutoSignIn] Do the Sign in");
            document.querySelector("#signin-btn").click();
        }
        else
        {
            console.log("[AutoSignIn] Sign in done");
            success_prompt("每日簽到已達成", 1500);
        }
    }
})();
