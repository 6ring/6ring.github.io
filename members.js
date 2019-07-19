class MemberList {
    constructor(head, list) {
        this.head = head;
        this.list = [];
        this.hash = {};

        let i = 0;
        for(let member of list) {
            this.list.push(this.hash[member[1]] = {
                id: member[1],
                name: member[2],
                url: member[3],
                description: member[4],
                icon: member[0],
                pos: i++,
            });
        }
    }

    get length() {
        return this.list.length;
    }

    get(id) {
        return this.hash[id];
    }

    next(id) {
        let pos = this.get(id).pos + 1;
        if(pos < this.head || pos >= this.length)
            pos = this.head;

        return this.list[pos];
    }

    prev(id) {
        let pos = this.get(id).pos - 1;
        if(pos < this.head)
            pos = this.length - 1;

        return this.list[pos];
    }

    random(id) {
        let idx = this.head
            + Math.floor(Math.random() * (this.length - this.head - 1));

        if(pos >= this.get(id).pos)
            ++pos;

        return this.list[pos];
    }
}

var members = new MemberList(2, [
    // infrastructural sites, not part of the ring proper
    [ "🦋", "home", "Ring Home", "home.html" ],
    [ "💬", "irc", "Ring Chat", "https://webchat.freenode.net/#perl6-webring" ],

    // member sites
    [ "🔗", "cygx", "cygx's musings", "https://cygx.github.io/", "life, the universe and programming woes" ],
    [ "🔗", "timotimo", "my Timotimo \\this", "https://wakelift.de/", "Progress reports, general musings. Perl 6." ],
    [ "🔗", "6guts", "6guts blog", "https://6guts.wordpress.com/", "Tales of Perl 6 guts hacking" ],
    [ "🔗", "pamplemousse", "Yak Shaving Cream", "https://yakshavingcream.blogspot.com/", "Progress reports and ramblings on Perl 6." ],
]);
