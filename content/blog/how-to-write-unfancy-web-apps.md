+++
title = "How to Write Unfancy Web Apps"
date = 2015-12-19
path = "2015/12/19/how-to-write-unfancy-web-apps"

[taxonomies]
tags = ["web", "js", "jquery"]
+++

Ever since the advent of HTML5 and ES6, the web is moving forward at the speed of the Millennium Falcon.

While the world was still in awe at Angular's superpowers, the React phenomenon happened. And while the average corporate Java dev gets over the overwhelming pace of events, Angular 2 and Polymer will be ready to refill their pile of things to be amazed at.

And that is a good thing. It means better APIs, better developer ergonomics, and most importantly, better resulting products.

However, sometimes people forget that they do not need a Batmobile to get to the grocery store. When you're building a simple web app that does one small thing, you do not need an MV\* framework, with a component-driven view layer, powered by a Swiss Army CSS Toolkit. All you need is the bare minimum abstraction, just enough to save you from the nitty-gritty of the raw JavaScript and CSS.<!-- more -->

## My toolbox

At work, I often have to develop simple web-based utilities that Do One Thing and Do It Well™. For times like these, I carry a small toolbox that meets my needs in under 20 kB minified and gzipped.

### Zepto

Let's face it. Even those who still use jQuery, do not use every nook and cranny of it. [Zepto](http://zeptojs.com/), the lightweight jQuery-compatible library, meets most of your needs when it comes to DOM manipulation, event handling and AJAX. Usually, the only time you need the full weight of jQuery is when you're using one of its add-ons like jQuery UI or jQuery Mobile. In most other cases, Zepto gets the job done just fine.

That being said, using jQuery in 2016 is fine, really. If it works for you, then go use the heck out of it.

### Mustache

You could fill your DOM with AJAX-received data using Zepto alone, but it makes your code look like really delicious spaghetti. This is where (arguably) the simplest templating engine, [Mustache](https://github.com/janl/mustache.js), comes in. No nonsense, logicless templates.

I like Mustache because it is simple _and_ works cross-browser. However, it does have a slight learning curve. Some day, when the world stops using Internet Explorer, I plan on replacing Mustache in my toolbox with maybe [t7](https://github.com/trueadm/t7).

### Pure

[Pure](http://purecss.io/) is a tiny CSS library from Yahoo! which is surprisingly handy and beautiful for something that's less than 4 kB. It doesn't come with all the bells and whistles of Bootstrap, but if you want pretty forms, buttons, tables and grids, go for Pure.

## Counter-argument

You might ask, why I prefer not to use more robust frameworks which make a far better developer experience.

**Blunt answer:** because this works.

**Reasonable answer:** because I'm not building a GitHub. I don't see the point of adding more kilobytes to an application, unless absolutely needed. Better developer experience is no substitute for better user experience.

## Conclusion

These tiny tools are generally enough to build a nice, clean web app that is just a semi-dynamic interface to a fairly robust backend with a solid REST API.

I'm not saying that Angular/React/Ember/Bootstrap/ are useless. I'm just saying, don't use them just because [they are there and they are cool](https://en.wikipedia.org/wiki/Law_of_the_instrument). Ask yourself if you can do the job and still keep your code uncluttered without using them. Aim for less, not more.

>"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
>
>— Antoine de Saint-Exupery, French writer

#### Update

I just posted this on [Echo JS](http://www.echojs.com/), and realized what a perfect example it is of a simple, unfancy web app. They run on just jQuery.

#### Update 2

Pedro Canterini developed [this nifty Unfancy Starter](https://github.com/pcanterini/unfancy-starter), which bundles a slightly modified and refined version of the aforementioned toolbox into an easy, preconfigured scaffold.
