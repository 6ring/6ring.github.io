const SIXRING_ID = document.currentScript.dataset.sixringId;
const SIXRING_WIDGET = `<span style="display: inline-block" id="sixring-widget"
><button
  data-href="https://6ring.github.io/"
  onclick="top.location.href = this.dataset.href"
  style="cursor: pointer; border: 0 none; background: transparent; display: block"
  title="visit ring homepage">🦋 <b>Perl 6</b> webring</button
><button
  data-href="https://6ring.github.io/prev?${SIXRING_ID}"
  onclick="location.href = this.dataset.href"
  style="cursor: pointer; width: 6em"
  title="visit previous site in ring">⮜⮜ prev</button
><button
  data-href="https://6ring.github.io/?${SIXRING_ID}#${document.URL}"
  onclick="location.href = this.dataset.href"
  style="cursor: pointer; width: 6em"
  title="load ring toolbar">🔗 load</button
><button
  data-href="https://6ring.github.io/next?${SIXRING_ID}"
  onclick="location.href = this.dataset.href"
  style="cursor: pointer; width: 6em"
  title="visit next site in ring">next ⮞⮞</button
></span>`;

document.addEventListener('DOMContentLoaded', function(event) {
    if(!SIXRING_ID) return;

    let msg = {
        type: 'loaded',
        id: SIXRING_ID,
        url: document.URL,
        title: document.title,
    };

    try { top.postMessage(msg, 'https://6ring.github.io') }
    catch(e) {}
});

document.addEventListener('click', function(event) {
    let tg = event.target;
    let href = tg.href;
    if(!href) return;

    if(href.startsWith('https://6ring.github.io/')) {
        if(SIXRING_ID && href === 'https://6ring.github.io/?' + SIXRING_ID)
            tg.href = href + '#' + document.URL;
    }
    else {
        let origin = new URL(href, location.href).origin;
        if(origin !== location.origin && !tg.target)
            tg.target = '_top';
    }
}, true);
