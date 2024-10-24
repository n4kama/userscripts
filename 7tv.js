// ==UserScript==
// @name         7tv .webp to .png
// @namespace    https://git.baguet.org/nakama/userscripts/7tv.js
// @version      2024-10-24
// @description  Changes the raw .wepp url to .png on 7tv.app
// @author       You
// @match        https://cdn.7tv.app/emote/*/*.webp
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=7tv.app
// @grant        none
// ==/UserScript==

window.location.replace(window.location.href.replace(".webp", ".png"))

