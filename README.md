# Userscripts

This is my collection of browser userscripts that I use.

## Requirements

- Something like Tampermonkey's browser extension

## Scripts

### 7tv

This script is used to replace the `.webp` extension to `.png` in the URL.

## Notes

I try to use `@match` instead of `@include` as much as possible as it is [considered more secured](https://developer.chrome.com/docs/extensions/develop/concepts/match-patterns).

For 7tv, this include `@include /^https://cdn\.7tv\.app/.*/.*\.webp$` is replaced by `@match https://cdn.7tv.app/emote/*/*.webp`.

