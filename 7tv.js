// ==UserScript==
// @name         7tv replace webp to png
// @namespace    https://greasyfork.org/en/users/1385483-nakama
// @version      2024-10-24
// @description  Replace the .webp extension to .png in the URL.
// @author       nakama
// @match        https://cdn.7tv.app/emote/*/*.webp
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=7tv.app
// @grant        none
// ==/UserScript==

window.location.replace(window.location.href.replace(".webp", ".png"))

