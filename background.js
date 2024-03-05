chrome.runtime.onInstalled.addListener(function () {
    chrome.webRequest.onBeforeRequest.addListener(
        function (details) {
            if (details.url.startsWith("https://www.reddit.com/") && !details.url.includes("preview.redd.it")) {
                return { redirectUrl: details.url.replace("https://www.reddit.com/", "https://new.reddit.com/") };
            }
        },
        { urls: ["<all_urls>"] },
        ["blocking"]
    );
});
