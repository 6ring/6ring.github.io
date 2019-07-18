addEventListener("message", function(event) {
   if(event.origin === 'https://6ring.github.io') switch(event.data) {
        case 'exit':
        parent.location = self.location;
        break;
    }
}, false);
