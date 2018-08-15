
function doRemoveStaticElements()
{
    var executing = browser.tabs.executeScript({
        file: "removeStaticElements.js"
    });
    executing.then(onExecuted, onError);
}

function onExecuted(result) {
  console.log('GiveMyHeadPeace was successful.');
}

function onError(error) {
  console.log(`Error when running GiveMyHeadPeace: ${error}`);
}

browser.browserAction.onClicked.addListener(doRemoveStaticElements);
