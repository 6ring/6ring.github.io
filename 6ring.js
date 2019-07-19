window.addEventListener('message', function(event) {
   if(event.origin === 'https://6ring.github.io') switch(event.data.action) {
        case 'exit':
        top.postMessage(
            { action: 'clear', timer: event.data.timer },
            'https://6ring.github.io');
        top.location = self.location;
        break;
    }
}, false);

document.addEventListener('click', function(event) {
    if(event.target.nodeName.toUpperCase() !== 'A'
        || event.ctrlKey || event.shiftKey) return;

    let url = event.target.href;
    if(url.startsWith('https://6ring.github.io/?'))
        url += '&' + location.origin + location.pathname;

    else if(new URL(url, location.href).origin === location.origin
        || url.startsWith('https://6ring.github.io/')) return;

    event.preventDefault();
    top.location.href = url;
}, false);
