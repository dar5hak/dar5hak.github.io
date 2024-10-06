+++
title = "Fixing the Stupid Defaults on macOS"
date = 2024-10-06
+++

## Why

My work laptop is usually a MacBook, and installing Linux on that is not possible for various reasons.

Now, being stuck with macOS isn’t all that bad. I’d take it any day over Windows. I even get to sync my [dotfiles](https://github.com/dar5hak/dotfiles) across Linux and macOS.

That said, one of the first things I do after receiving a new MacBook for a project is fixing some of its silly defaults and making it somewhat [more sensible](https://elementary.io/).

## Auto-hide the dock

**System Settings** > **Desktop & Dock** > turn on **Automatically hide and show the Dock**

It’s not as smart as elementary OS, so it stays hidden even when there is no window blocking its space, but turning on this setting is more useful than giving so much real estate to something I [rarely touch](https://www.raycast.com/).

## Stop reordering spaces

**System Settings** > **Desktop & Dock** > turn off **Automatically rearrange Spaces based on most recent use**

I don’t know who uses this, but I prefer to know exactly where my windows are instead of finding them by trial and error.

## Scroll Reverser

Sometimes I use a mouse, sometimes the trackpad. I want natural scrolling on one but not the other, so I should change the setting for each of them, right?

Oh, my sweet summer child! Just because they are two different checkboxes doesn’t mean they are two different settings. They’re bound to the same thing. Changing one updates the other. The US really needs to do something about their drug problem.

But until then, install [Scroll Reverser](https://pilotmoon.com/scrollreverser/) to keep your sanity.

## AltTab

What are all these background apps doing in my <kbd>Cmd</kbd> + <kbd>Tab</kbd> switcher? Why do I see apps from other spaces? Who invited Finder?

[AltTab](https://alt-tab-macos.netlify.app/) fixes all that and lets you tweak it as per your needs.

## Bluesnooze

You’re going for a walk, so you decide to play a podcast on your phone and listen to it on your earphones. But guess what? Your earphones get connected to your sleeping MacBook before your phone.

Now, you could open your backpack, take out your MacBook, unlock it, turn off Bluetooth and put it back in the pack. Or you could install [Bluesnooze](https://github.com/odlp/bluesnooze/) and get on with your life.

There used to be a setting to turn off this (even then) abominable default, but it’s gone now.

## Hidden Bar

No, this is not the name of a shady place you go to for cheap alcohol. [Hidden Bar](https://github.com/dwarvesf/hidden/) is a tool to control the chaos of apps filling up your menu bar with icons you either never click or don’t want to look at because they’re ugly.
