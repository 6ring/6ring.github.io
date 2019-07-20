const SIXRING_ID = document.currentScript.dataset.sixringId;
const SIXRING_WIDGET = `<span style="display: inline-block" id="sixring-widget"
><button
  data-href="https://6ring.github.io/"
  onclick="location.href = this.dataset.href"
  style="cursor: pointer; border: 0 none; background: transparent; display: block"
  title="visit ring homepage">🦋 <b>Perl 6</b> webring</button
><button
  data-href="https://6ring.github.io/prev?${SIXRING_ID}"
  onclick="location.href = this.dataset.href"
  style="cursor: pointer; width: 6em"
  title="visit previous site in ring">⮜⮜ prev</button
><button
  data-href="https://6ring.github.io/?${SIXRING_ID}"
  onclick="location.href = this.dataset.href"
  style="cursor: pointer; width: 6em"
  title="load ring toolbar">🔗 load</button
><button
  data-href="https://6ring.github.io/next?${SIXRING_ID}"
  onclick="location.href = this.dataset.href"
  style="cursor: pointer; width: 6em"
  title="visit next site in ring">next ⮞⮞</button
></span>`;

addEventListener('DOMContentLoaded', function(event) {
    let msg = {
        type: 'loaded',
        id: SIXRING_ID,
        title: document.title,
        url: document.URL,
    };

    try { top.postMessage(msg, 'https://6ring.github.io') }
    catch(e) {}
});

addEventListener('beforeunload', function(event) {
    let url = document.activeElement.href || document.activeElement.dataset.href;
    if(url) {
        url = new URL(url, document.URL).href;
        let msg = {
            type: 'go',
            id: SIXRING_ID,
            dest: url,
            src: document.URL,
        };

        try { top.postMessage(msg, 'https://6ring.github.io') }
        catch(e) {}
    }
});
