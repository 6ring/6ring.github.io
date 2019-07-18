var mHead = 2; // number of sites to skip at the beginning of the list
var mHash = {}, mList = [
    // infrastructural sites, not part of the ring proper
    [ "🦋", "6ring", "Ring Home", "home.html" ],
    [ "💬", "irc", "Ring Chat", "https://webchat.freenode.net/#perl6-webring" ],

    // member sites
    [ "🔗", "cygx", "cygx's musings", "https://cygx.github.io/", "life, the universe and programming woes" ],
    [ "🔗", "timotimo", "my Timotimo \\this", "https://wakelift.de/", "Progress reports, general musings. Perl 6." ],
    [ "🔗", "6guts", "6guts blog", "https://6guts.wordpress.com/", "Tales of Perl 6 guts hacking" ],
];

let i = 0;
for(let m of mList) {
    mList[i] = mHash[m[1]] = {
        id: m[1],
        name: m[2],
        url: m[3],
        description: m[4],
        icon: m[0],
        pos: i,
    };
    ++i;
}
