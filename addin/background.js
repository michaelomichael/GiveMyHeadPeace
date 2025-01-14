var __browser;

if (chrome) {
	__browser = chrome
} else {
	__browser = browser
}

function doRemoveStaticElements() {
    __browser.tabs.executeScript({
        file: "removeStaticElements.js"
    });
}

__browser.browserAction.onClicked.addListener(doRemoveStaticElements);
