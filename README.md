This is a webring dedicated to Perl 6. To join up, add your site to the list
in `members.js`. Note that only https sites are supported.

You may want to add the following links to your site's navigation so visitors
may follow along the ring even when they visited the site directly instead of
through the webring interface:

    https://6ring.github.io/?<your-site-id>
    https://6ring.github.io/prev?<your-site-id>
    https://6ring.github.io/next?<your-site-id>

There's also a 'magical' script you can add to your site's template:

    <script src="https://6ring.github.io/6ring.js" type="text/javascript"></script>

This will enable some convenience features otherwise prohibited by the
same-origin policy, e.g. loading the currently active page instead of your
frontpage when exiting the ring, or having external links break out of the
frame. If your site is heavily scripted, you should test that this does not
interact badly with the rest of your code.
