const SIXRING_ID = document.currentScript.dataset.sixringId;

addEventListener('DOMContentLoaded', function(event) {
    if(top.name === 'sixring') {
        let msg = {
            type: 'loaded',
            id: SIXRING_ID,
            title: document.title,
            url: document.URL,
        };

        top.postMessage(msg, 'https://6ring.github.io');
    }
});

addEventListener('beforeunload', function(event) {
    let url = document.activeElement.href || document.activeElement.dataset.href;
    if(url && top.name === 'sixring') {
        url = new URL(url, document.URL).href;
        let msg = {
            type: 'go',
            id: SIXRING_ID,
            dest: url,
            src: document.URL,
        };

        top.postMessage(msg, 'https://6ring.github.io');
    }
});
