// ==UserScript==
// @name         AutoSignin_gamer
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Auto Sign in gamer.com.tw
// @author       You
// @match        http*://www.gamer.com.tw/*
// @grant        GM_addStyle
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
        setTimeout(function()
        {
            //Wait 0.5 sec and do this process
            var strCheck = "", objCheckbox, objCheckIcon;

            objCheckbox = document.querySelector("#signin-btn");
            objCheckIcon = document.querySelector("#signin-btn > i");

            if (objCheckbox != null)
            {
                strCheck = objCheckbox.innerText;
                console.log(document.querySelector("#signin-btn").innerText);
            }
            if(strCheck.search("check_box") == -1 || objCheckIcon.innerText != 'check_box')
            {
                console.log(strCheck);
                console.log(strCheck.search("check_box") == -1?"T":"F");
                console.log(objCheckIcon.innerText != 'check_box'?"T":"F");
                console.log("[AutoSignIn] Do the Sign in");
                document.querySelector("#signin-btn").click();
            }
            else
            {
                console.log("[AutoSignIn] Sign in done");
                success_prompt("每日簽到已完成", 1500);
            }
        }, 500);
    }
})();
