# This is a [Webring][1] dedicated to [Perl 6][2]

To join up, add your site to the list at the bottom of [members.js][3].
Please note that only `https` sites are supported.

You should add the following links to your site's navigation so visitors
may follow along the ring even when they visited the site directly instead of
going through the webring interface:

    https://6ring.github.io/?<your-site-id>
    https://6ring.github.io/prev?<your-site-id>
    https://6ring.github.io/next?<your-site-id>

There's also a 'magical' script you might add to your page template:

```html
<script type="text/javascript" data-sixring-id="<your-site-id>"
        src="https://6ring.github.io/6ring.js"></script>
```

This will enable some convenience features otherwise prohibited by the
same-origin policy, e.g. loading the currently active page instead of your
frontpage when exiting the ring, or having external links break out of the
frame. If your site is heavily scripted, you should test that this does not
interact badly with the rest of your code.

The script also provides a widget you can use instead of manual links.
To do so, insert the following code where you want the widget to appear:

```html
<script type="text/javascript">document.write(SIXRING_WIDGET)</script>
```

The element is a `<span>` with id `sixring-widget` and a CSS display property of `inline-block`.

[1]: https://en.wikipedia.org/wiki/Webring
[2]: https://perl6.org/
[3]: members.js
