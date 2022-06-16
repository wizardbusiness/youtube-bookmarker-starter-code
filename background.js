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

  //check service workers, listen for new tabs//