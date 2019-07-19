addEventListener('message', function(event) {
   if(event.origin === 'https://6ring.github.io') switch(event.data.action) {
        case 'exit':
        top.postMessage(
            { action: 'load-url', url: location.href, referrer: location.href },
            'https://6ring.github.io'
        );
        break;
    }
});

addEventListener('DOMContentLoaded', function(event) {
    if(top.name === 'sixring') {
        top.postMessage(
            { action: 'set-title', title: document.title },
            'https://6ring.github.io'
        );
    }
});

addEventListener('beforeunload', function(event) {
    let url = document.activeElement.href || document.activeElement.dataset.href;
    if(url && top.name === 'sixring') {
        top.postMessage(
            { action: 'load-url', url: url, referrer: location.href },
            'https://6ring.github.io'
        );
    }
});
