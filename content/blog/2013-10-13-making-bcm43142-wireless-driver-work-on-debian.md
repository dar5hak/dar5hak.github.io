+++
title = "Making BCM43142 Wireless Chipset Work on Debian"
date = 2013-10-13

[taxonomies]
tags = ["debian"]
+++

So I couldn't get WiFi to work on my SolydK installation. It does come with a nifty tool called 'Device Driver Manager', but even that couldn't find a driver for my wireless chipset --- the Broadcom BCM43142. Some other Broadcom drivers sure are available in the Debian repos, but this one isn't. So I did the only sensible thing to do: searched the Web. And here's the solution.<!-- more -->

**Note:** I assume that you know the basics of `apt-get` and `cd` commands.

### What's your chipset?

Open the terminal and run

```sh
lspci | grep BCM
```

and check if the output contains `BCM43142`. If it does, this post is for you.

### Get the driver

1. Run
   ```sh
   sudo apt-get install linux-headers-generic build-essential dkms broadcom-sta-modules
   ```
   If it freaks out with the first package, just skip that one.

2) Download [this deb package](https://drive.google.com/open?id=0B1iuY5gfFnsyalVLOUxNNnotYk0).

3. `cd` into the directory containing the package.

4) Install it using
   ```sh
   sudo dpkg -i wireless-bcm43142-dkms_6.20.55.19-1_amd64.deb
   ```

5. Activate it.
   ```sh
   sudo modprobe wl
   ```

6) Done. It should work now.

### What's inside?

I haven't checked, but there's one thing I know: the person who has provided the deb package, has tweaked a copy of the driver package found inside an Ubuntu installation.

### Source

[jas.gemnetworks.com](http://jas.gemnetworks.com)
