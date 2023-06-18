chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: 'https://wp.new' });
  });
  