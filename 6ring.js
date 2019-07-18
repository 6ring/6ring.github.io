window.addEventListener('message', function(event) {
   if(event.origin === 'https://6ring.github.io') switch(event.data) {
        case 'exit':
        top.location = self.location;
        break;
    }
}, false);

document.addEventListener('click', function(event) {
    if(event.target.nodeName.toUpperCase() !== 'A'
        || event.ctrlKey || event.shiftKey) return;

    let url = event.target.href;
    if(new URL(url, location.href).origin !== location.origin) {
        event.preventDefault();
        top.location.href = url;
    }
}, false);
