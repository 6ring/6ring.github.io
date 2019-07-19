let sixringId = document.currentScript.dataset.sixringId; 
document.write(
    '<span style="display: inline-block" id="sixring-widget">' +
    '<button style="cursor: pointer; border: 0 none; background: transparent; display: block" ' +
        'onclick="top.location.href=\'https://6ring.github.io/\'" ' +
        'title="visit ring homepage">🦋 <b>Perl 6</b> webring</button>' +
    '<button style="cursor: pointer; width: 6em" ' +
        'onclick="location.href=\'https://6ring.github.io/prev?' + sixringId + '\'" ' +
        'title="visit previous site in ring">⮜⮜ prev</button>' +
    '<button style="cursor: pointer; width: 6em" ' +
        'onclick="top.location.href=\'https://6ring.github.io/?' + sixringId + '&' + location.origin + location.pathname + '\'" ' +
        'title="load ring toolbar">🔗 load</button>' +
    '<button style="cursor: pointer; width: 6em" ' +
        'onclick="location.href=\'https://6ring.github.io/next?' + sixringId + '\'" ' +
        'title="visit next site in ring">next ⮞⮞</button>' +
    '</span>'
); 
