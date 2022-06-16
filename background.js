chrome.tabs.onUpdated.addListener((tabId, tab) => {
  console.log(tab.url)
    if (tab.url && tab.url.includes("star")) {
      // const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
      console.log(urlParameters)
      console.log('HELLO THERE BACKGROUND.JS')
      chrome.tabs.sendMessage(tabId, {
        type: "STAR",
        urlID: urlParameters.get("star"),
      });
    }
  });

  chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
      // read changeInfo data
      if (changeInfo.url) {
        // url has changed; do something here
        // like send message to content script
        chrome.tabs.sendMessage( tabId, {
          message: 'hello!',
          url: changeInfo.url
        })
      }
    }
  );
  //check service workers, listen for new tabs//