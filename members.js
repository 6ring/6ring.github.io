var mHash = {}, mList = [
    [ "🦋", "6ring", "Perl 6 Webring", "home.html" ],
    [ "💬", "freenode", "freenode #perl6-webring", "https://webchat.freenode.net/#perl6-webring" ],
    [ "🔗", "cygx", "cygx's musings", "https://cygx.github.io/" ],
    [ "🔗", "timotimo", "my Timotimo \\this", "https://wakelift.de/"],
];

let i = 0;
for(let m of mList) {
    mList[i] = mHash[m[1]] = {
        id: m[1],
        name: m[2],
        url: m[3],
        icon: m[0],
        pos: i,
    };
    ++i;
}
