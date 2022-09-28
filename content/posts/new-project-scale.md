---
title: "New Project: Scale of the Universe"
date: 2022-09-27T23:18:59-07:00
description: "Over the past year, I've been working on an official remaster of the famous 'Scale of the Universe' project with hundreds of millions of views, and our first version has just launched!"
tags: ["html", "css", "javascript", "svelte", "pixijs", "sotu"]
type: "post"
weight: 25
showTableOfContents: true
---

# Scale of the Universe v3

Over the past year, I've been working on an official remaster of the famous "Scale of the Universe" project with hundreds of millions of views, and our first version has just launched! This project is based on the original Scale of the Universe, developed by [carykh](https://www.youtube.com/user/carykh), and for this project, I've been working with [Dave Caruso](https://davecode.net) to modernize and expand its reach.

## About SotU

Scale of the Universe was first developed by Cary and Michael Huang in 2010 as a way to explore the different sizes of the universe. The app featured a slider that let the user explore scales between the Planck length and the length of the observable universe. The user could explore all the different things between these sizes and click on an object to learn more about it.

![SotU 1 Preview](/images/posts/new-project-scale/sotu1-preview.png)
*A look at the original SotU project*

The website became wildly popular and tens of millions of people (including 10-year-old me) used the site. Unfortunately, since the project was written in Adobe Flash, it died in 2020 when Flash became officially unsupported and removed from most browsers. Because of this, a new version of SotU (version 2) was created in [PixiJS](https://pixijs.com/) by [Matthew Martori](https://github.com/matttt). This worked really well and was very beneficial for lower-end devices which could now run SotU much easier as Flash was known for being quite slow and PixiJS used WebGL to improve performance. Since it was created though, it's largely been untouched; to be fair, this was the plan, but my friend Peter and I thought we could make it into something bigger.

## Scale of Everything

I first met Peter, a good friend of Cary, when I did a summer internship with JumpCutter, a company that Peter and Cary and another friend cofounded that I may talk about later, but is a bit unrelated to this story. Peter and I became friends beyond JumpCutter and were excited to look for more programming projects to work on. When he told me about his idea for a new version of Scale of the Universe, I was interested because I was excited by the idea of bringing back SotU for the next generation of students getting into science. 

However, beyond just recreating the app into another version, we had ideas of **giving people the ability to create their own 'scales'.** Rather than just being a single scale—the scale of the universe—users could add their own sets of objects to their own scales that are themed to something more specific. Some ideas I had in mind were scale of technology, scale of biology, scale of time, scale of buildings, and so on. This 'Scale of Everything' concept was going to give SotU a life of its own and a community that would let it grow organically even when we're not creating new scales. It also would empower educators to create their own interactive experiences for students and let them tailor the experience to their curriculum. We talked with Cary about this concept; although he wouldn't be involved in the project himself, he gave his approval for this to be the next SotU and encouraged the idea.

## Beginning Development

When we started work on the project around December 2021, we found a lot of developers, artists, and translators who were enthusiastic to help realize the project. A few months later, we met Dave, who has been incredibly helpful to this project and we probably would not be able to reach where we are now at all without him. We both spent many months making the website into something more than just a single app (my [solar sim](/projects/solar-sim) project may also go up at some point).

![SotU 3 Preview](/images/posts/new-project-scale/sotu3-preview.png)
*A look at the new SotU 3*

![SotU 3 Website Preview](/images/posts/new-project-scale/sotu3-site-preview.png)
*We also have other content on the website*

Right now, we're basing the design on the original [scaleofuniverse.com](https://scaleofuniverse.com) design (which by the way, wasn't actually owned by Cary, more on that later). However, we're looking into redesigning at least the front page:

![In Development Redesign for SotU 3](/images/posts/new-project-scale/sotu3-new.png)
*Hypothetical redesign for SotU 3*

## Enter James

When we started working on this project, one of the big motivators for making it was that Scale of the Universe didn't have an official website where it was hosted on. SotU 1 and 2 were both hosted on Cary's own website, [htwins.net](https://htwins.net), but many didn't believe that this was the "true" website for SotU and so skipped over it when looking for it, causing an unfavorable result in Google Search. Furthermore, there was an alternative website, [scaleofuniverse.com](https://scaleofuniverse.com), not affiliated with Cary, that would usually rank #1 in search. Peter reached out to the owner of that website to learn more about him, and as it turns out, he's an SEO consultant who just made the website on his own time. Surprisingly, even though SotU wasn't on it, it got thousands of visits per day.

Peter offered James (the owner of the website) a deal where he would get a small percent of SotU 3 in exchange for giving us the domain and helping us with the SEO, which he accepted. Since then, we have migrated over to the domain where we currently are hosting the site.

# Development

We decided to write the website in Svelte as it was a pretty simple project and we wanted the opportunity to use the JavaScript framework since it was pretty popular among developers. All in all, it's worked pretty great for us and there haven't been many hiccups.

At first, we wrote SotU using DOM manipulation of the images. Dave was clever to make sure only visible images were rendered by the browser and that the transformations being run were minimal and it worked great—on Chrome and Firefox. On Safari, the thing was super slow. It was so bad that we decided to go with WebGL using PixiJS in the end (though just for the SotU app, not the whole site), and that helped improve performance on Safari substantially.

We decided from the beginning that it would be a good idea to host the data for SotU separately from the actual app itself, as this would make modularity (and therefore different scales) much easier. Right now, our current solution is to host the data on a separate website which is in turn held in a separate GitHub repository. We've recently decided to change this approach as we felt it would be more proper to use a database instead of GitHub to host our data. This will also make it easier for non-developers to make their own scales using the tools we give them. We're using [Prisma](https://prisma.io) and Postgresql for this and we're looking to find a database hosting provider to provide a more permanent solution.

# Other Thoughts

It's been really fun being able to work on this project with Peter and Dave and I really think this could evolve into something really interesting. We have some cool ideas we're thinking about implementing in the future:

- A comments system for making the scales more interactive
- Private scales created by educators only for a classroom
- A new scale design for timelines (scale of time)
- Support for other projects, like [solar-sim](/projects/solar-sim)

For now though, we just have the single scale on [scaleofuniverse.com](https://scaleofuniverse.com). Feel free to check it out and also join the [Discord](https://discord.gg/zCFKhhcYTt) to follow the development of SotU 3; we post a lot in there and we're open to suggestions/contributions if anyone's interested.

By the way, this isn't going in my projects section for this website because it's not solely mine — Dave and I are the main devs but also Peter and James are contributing significantly to the project. If anything significant happens I may post an update, otherwise development will just keep moving along.
