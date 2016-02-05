"use strict";

chrome.pageAction.onClicked.addListener(function(tab) {
  if (tab && tab.url.slice(0, 7) === "http://") {
    chrome.tabs.update({
       url: "https://" + tab.url.slice(7)
    });
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if (tab.url && tab.url.slice(0, 7) === "http://") {
    chrome.pageAction.setIcon({
      path: {
        "19": "images/pageActionIconInsecure-19px.png",
        "38": "images/pageActionIconInsecure-38px.png"
      },
      tabId: tabId
    });
    chrome.pageAction.show(tabId);
  } else {
    chrome.pageAction.setIcon({
      path: {
        "19": "images/pageActionIconSecure-19px.png",
        "38": "images/pageActionIconSecure-38px.png"
      },
      tabId: tabId
    });

    chrome.storage.sync.get({
      alwaysShow: false
    }, function(items) {
      if (items.alwaysShow) {
        chrome.pageAction.show(tabId);
      } else {
        chrome.pageAction.hide(tabId);
      }
    });

  }
});
