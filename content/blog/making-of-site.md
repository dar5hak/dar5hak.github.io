+++
title = "The Making of This Site"
date = 2020-09-19

[taxonomies]
tags = ["web"]
+++

This is not my first site. I've had a blog hosted on this domain since 2013. It was built on [WordPress.com](https://wordpress.com/), an excellent service I recommend to anyone who wants to start their own site or blog but cannot write HTML and CSS.

However, I decided to move away from WordPress. As an experienced web developer, I was itching to write my own site by hand. Reasons being:

- I wanted to tune the performance and accessibility in very specific ways.
- I wanted it to be a static site, which makes it inherently faster than a CMS-based site.
- I wanted to add personal style and navigation that was only possible if I wrote the code myself.

And thus began my hunt for the right tools.

## Static Site Generator

While there's no shortage of [static site generators](https://www.staticgen.com/) on the internet, I was looking for something with sub-second build times even on low-end hardware. It made sense to go for something written in Go or Rust, and that filter led me to two choices: [Hugo](https://gohugo.io/) and [Zola](https://www.getzola.org/).

After trying them both for a while, I decided to go with Zola for its relative simplicity and ease of learning.

I knew I'd miss out on the huge community that comes with Hugo, but thanks to Zola's excellent documentation and forum, I rarely felt stuck with anything. The number of community themes was irrelevant to me since I planned to write my own.

## Turbolinks

I came across [taniarascia.com](https://www.taniarascia.com/) while searching for something. It looked so clean that I decided to explore it, and was floored by how fast the navigation was. Unvisited pages opened as if they were stored offline. Something was fishy.

I dug around the site to find [a post](https://www.taniarascia.com/migrating-from-wordpress-to-gatsby/) about how it was made (much like this one). It uses Gatsby, which turns the site into a single-page application. Each page load is just an JSON API call, and even that is likely preloaded by the current page.

While I had no intention of switching away from Zola, I remembered seeing a GitHub repo that can add similar powers to a site using traditional navigation. I looked into my Pensieve (read: Firefox history) and came out with [Turbolinks](https://github.com/turbolinks/turbolinks/).

This library hijacks all same-origin hyperlinks on your site and fetches them in the background. Then, without causing a full page reload, it swaps out the `<body>` and merges the `<head>`, making navigation blazing fast. This way, you can still use old school hyperlinks and your site will behave like a single-page application.

The best part is that there's nothing to configure. Just load it in a `<script>` and it starts working. And if a browser doesn't support JavaScript, links work like they always have. Everybody wins!

Which brings me to—

## Progressive Enhancement

It doesn't take a read-through of _[Resilient Web Design](https://resilientwebdesign.com/)_ to understand the importance of accessibility and progressive enhancement.

My site had to work on everything from a command-line browser to a full-blown Firefox. This is achieved easily by using accessible, semantic markup and serving it statically without any client-side DOM manipulation. Everything else is an addition. Even CSS.

Speaking of CSS, I was itching to use the new [underline customizations](https://www.youtube.com/watch?v=sZS-7RX_c7g) now possible with pure CSS. At the time of writing, they only fully work on Firefox. How do I [not break](http://motherfuckingwebsite.com/) over 90% of the web for some snazzy effect I felt like adding?

Feature queries to the rescue.

CSS supports the `@supports` at-rule to detect whether the browser supports what you mentioned in `@supports`. Then you can write supporting styles for supporting browsers, and different supporting styles for non-supporting browsers. The only problem is IE support, because it doesn't support `@supports`, so I don't support it.

Fine, I'll stop saying 'support'. No need to be mad.

_Support_.

Sorry.

Another thing you will notice on some pages (like the home page) is that you can navigate the menus using the arrow keys (and Vim-style HJKL keys, if you're into that kind of thing).

This is a feature that games and CLI apps offer out of the box but is rare on the web. I wrote some JavaScript to enable it where it makes sense.

Since it's another progressive enhancement, you can still click the links as usual if you disable JavaScript.

## Design

I felt I should let my retrogaming interest ooze into my site, so I originally designed it to look like a game straight out of 1990.

The font I'd have used for headings and menus was [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P). This is also why I wanted the keyboard navigation in the first place: to emulate the directional pad on a game controller.

![Old design](/images/making-of-site/old-design.png)

Eventually, I decided to use [Recursive](https://www.recursive.design/) for the body text because I liked its variable font features. It looked so good on headings as well that I dropped the whole blockiness idea and went full-blown Recursive.

Two remnants of the old design are the animated avatar on the home page and the site logo. I couldn't help it.

## Performance

![Google Lighthouse report with a Performance score of 100](/images/making-of-site/lighthouse.png)

Need I say more?

## Final thoughts

While it intentionally lacks many features, I am happy with the result. It's fast, responsive, privacy-respecting, open source, and most importantly, it's mine. It is exactly how I want it to be.

I recommend this to anyone who knows even basic HTML and CSS: if you want to make a site, write it yourself. Not only does it give you street cred and bragging rights, it is also more satisfying and rewarding. And of course, you learn a lot along the way.
