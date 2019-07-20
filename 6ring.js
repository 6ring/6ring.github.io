addEventListener('DOMContentLoaded', function(event) {
    if(top.name === 'sixring') {
        top.postMessage(
            { type: 'loaded', title: document.title, url: document.URL },
            'https://6ring.github.io'
        );
    }
});

addEventListener('beforeunload', function(event) {
    let url = document.activeElement.href || document.activeElement.dataset.href;
    if(url && top.name === 'sixring') {
        url = new URL(url, document.URL).href;
        top.postMessage(
            { type: 'go', url: url, referrer: document.URL },
            'https://6ring.github.io'
        );
    }
});
