---
title: "New Personal Website"
date: 2022-08-18T16:15:00-07:00
description: "I made this website you're looking at using the Hugo SSG"
tags: ["Go", "Hugo", "meta"]
type: "post"
weight: 25
showTableOfContents: false
---

# Hello!

This is a new website I made to hold all my programming-related content since my last one was pretty bad. Anyway this gave me an opportunity to try out [Hugo](https://gohugo.io/), a static site generator written in Go. I heard it was pretty lightweight and I had been meaning to making a portfolio website for myself, so this was a good opportunity to try it out.

I'm making this with the Hugo theme "Gokarna", which provides a standard template for blog posts. I've never really done blog posts, but I figure at least for now I can talk about how I made this website.

I've had experience with making static websites in React using Gatsby, but Hugo has its advantages in that I don't really need to think about HTML/CSS/JS when I'm writing this stuff, although I did have to import a JavaScript library for parsing LaTeX in JavaScript. It was pretty easy to do that though as the Gokarna theme provides a place where you can put head tags, so after that everything worked as expected.

You may have heard that Hugo has really fast build times, and I can confirm this is true. This website builds in `50ms`, serves in `35ms`, and updates in `5ms`. Furthermore, the bundle sizes are quite small, so page loads are snappy. One downside about Hugo is that going between pages reloads all content, even reused components like the header and footer. I'm not too fussed about this though since it is still quite fast to load and does make things simpler for development.

Anyway, I may post some more stuff here if I have updates to projects or anything else I want to talk about. I'll probably make a post about my Google Foobar experience though since I haven't found a lot of information about it elsewhere and it was pretty interesting.
