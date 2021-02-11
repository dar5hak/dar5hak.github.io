+++
title = "Creating Underlined Hyperlinks in Inkscape"
date = 2021-02-11

[taxonomies]
tags = ["SVG", "Inkscape"]
+++

Sometimes you want to create a vector graphic résumé or an infographic and export it as PDF. Doing this is easy in Inkscape using its **Print** function to create a file instead of printing on paper.

If your document has a web or email address, it is a good idea to make it clickable, so that anyone looking at the PDF doesn't have to copy and paste the address.

I'll show you how to do that.

## Creating a link

Using the **Select** tool (the mouse-pointer arrow thing), select the object which you want to turn into a hyperlink. This will usually be text, but it can be anything: a rectangle, a path, a vectorized taco, anything.

![](/images/underlined-link-inkscape/text-unstyled.png)

Now right click on this object and select **Create Link**.

This will open up a pane on the right that looks like this:

![](/images/underlined-link-inkscape/attr-pane-empty.png)

In the **Href** field, type your address:

![](/images/underlined-link-inkscape/attr-pane-filled.png)

That's it. There's no **Apply** button. Your object is now clickable. Go home.

But there's a problem. Our text doesn't _look like_ it's clickable.

## Adding an underline

The most foolproof way to make text look like a link is to underline it.

To do that, open the **Object** menu at the top of your window, and select an option called **Selectors and CSS…**. Then select your text object. This will open up another pane to the right:

![](/images/underlined-link-inkscape/css-pane-default.png)

What you see is a table of the various style properties applied to the text under the hood. These are the defaults, but we want to add one more property here.

Click the **+** icon at the top left corner. It will add a new row.

Start typing <kbd>text-decoration</kbd>.

![](/images/underlined-link-inkscape/css-pane-text-decoration-typing.png)

You can select the suggestion. Once done, press <kbd>Tab</kbd> to go to the next column. Here, type <kbd>underline</kbd> and hit <kbd>Enter</kbd>.

![](/images/underlined-link-inkscape/css-pane-text-decoration.png)

Boom! You have your underline.

![](/images/underlined-link-inkscape/text-black-underline.png)

But it's not over yet.

What if you, like myself, are not a fan of pure black text on white, and prefer some colour in your life? A black underline is no good.

## Colouring the underline

Easy. In the same pane where you added the underline, add another property called <kbd>text-decoration-color</kbd>.

![](/images/underlined-link-inkscape/css-pane-text-decoration-color-typing.png)

In the right column goes your colour's hex code, <kbd>#156255</kbd> in my case.

![](/images/underlined-link-inkscape/css-pane-text-decoration-color.png)

You should see the coloured underline now!

![](/images/underlined-link-inkscape/text-coloured-underline.png)

## Bonus

If you're okay with typing commands in a terminal, there's [an extension](https://github.com/mcjohnalds/inkscape-underlinetext) that makes it 100x easier to add an underline to text.

## References

- [This one](https://alpha.inkscape.org/vectors/www.inkscapeforum.com/viewtopicb247.html?t=2025)
- [This one](https://wallpapersite.com/en/knowledge-base/66990/how-to-underline-text-in-inkscape)
- [And this one](https://graphicdesign.stackexchange.com/questions/66990/how-to-underline-text-in-inkscape)
