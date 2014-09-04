var DOMScript = {
  init: function() {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      DOMScript.processRequest(request, sender, sendResponse);
    });
  },

  processRequest: function(request, sender, sendResponse) {
    switch (request.action) {
      case "show":
        $(request.element).show();
        sendResponse({});
        break;
      case "hide":
        $(request.element).hide();
        sendResponse({});
        break;
      case "get":
        var list = [];
        $.each($(request.element), function(index, item) {
          list.push($(item).attr("src"));
        });
        sendResponse({result: list});
    }
  }
};

DOMScript.init();