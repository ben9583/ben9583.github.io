---
title: "What is Google Foobar?"
date: 2022-08-21T09:48:45-07:00
description: "A couple weeks ago, I got invited to Google Foobar and finished all the challenges. This is what you can expect from it."
tags: ["Google", "Foobar", "Java", "Python"]
type: "post"
weight: 25
showTableOfContents: true
---

# Google Foobar

## What is Foobar?

If you go to [foobar.withgoogle.com](https://foobar.withgoogle.com) (or if you reasonably see that link and think it's a phishing attack, [https://google.com/foobar](https://google.com/foobar)), you are shown the following:

![Image: Foobar Landing](/images/posts/foobar/landing.png)

This cryptic response doesn't really reveal anything about Foobar, so you probably wonder what this is all about. As it turns out **Foobar is an invite-only coding challenge by Google believed to be used for recruitment.**

## How do you get Access to Foobar?

It's not exactly clear what Google uses to decide whether or not someone should be invited, but if you are, you'll receive a pop-up on your next programming-related Google search that looks something like this:

![Image: Foobar Invitation](/images/posts/foobar/invitation.png)
Source: [Reddit](https://www.reddit.com/r/compsci/comments/5vo58i/i_got_the_google_foobar_challenge_today/)

Clicking "I want to play" will collapse the search page and bring you to Foobar. From what I've heard and read, it seems that Google looks at your search queries and if it sees that you use technical terms like "arraylist java", "mutex lock", "dependency injection", etc. then you stand a decent chance of getting this pop up.

I first learned about this from my friend who was streaming on Discord when the pop-up appeared. He's someone who has been programming for years and as a result used Google a lot for this stuff, so the fact it took this long made me think this was a very stringent evaluation that takes a long time and just the right profile to get. Considering that I have mostly used DuckDuckGo for the past couple years, I figured I was out of the question for getting this invitation. Nevertheless, I tried using Google for just programming-related searches for the next few days, and I was shocked to see the invitation after such a short amount of time.

## What do you do on Foobar?

![Image: First sight of Foobar](/images/posts/foobar/first-sight.png)
Source: [Slawdan](https://slawdan.github.io/14569656614034.html)

Upon arriving at Foobar, you're presented with a unix-like shell that simply says "Google has a code challenge ready for you." Indeed it is very mysterious, so if you know your way around a shell you type `ls` to see what's around. You'll see a text file called `start_here.txt`, which you can use `cat` to read. It tells you you can request a challenge and see a list of commands, which gives you a bunch of non-standard commands you can use to interface with the website.

You're also given the following flavor prompt:

```
Success! You've managed to infiltrate Commander Lambda's evil organization, and finally eqarned yourself an entry-level position as a Minion on her space station. From here, you just might be able to subvert her plans to use the LAMBCHOP doomsday device to destroy Bunny Planet. Problem is, Minions are the lowest of the low in the Lambda hierarchy. Better buck up and get working, or you'll never make it to the top.
```

So you're apparently thrown into a death-star-like space station and you're playing as an imposter trying to stop it from achieving its goal of destroying a planet, all while trying to not appear sus. You go up the hierarchy by completing coding challenges (there are many, not just one) culminating in some completion that stops the weapon.

There are 5 levels to Foobar:

| Level | # of Challenges | Time per Challenge | Notes |
|-------|-----------------|--------------------|-------|
| 1     | 1               | 2 days             |       |
| 2     | 2               | 3 days             | After completing, you'll receive a referral link you can use to invite someone to Foobar      |
| 3     | 3               | 4-7 days           | You'll be asked to put in contact information for potential recruitment |
| 4     | 2               | 2 weeks            | You'll receive another referral link |
| 5     | 1               | 3 weeks            |       |

Completing a challenge goes as follows: When you type `request` and hit enter, a directory will appear in your home that you can `cd` into. You're given a coding challenge with a prompt and you can either use Python 2.7 or Java 8 to coomplete it. Use the `edit` command to edit either `solution.py` or `Solution.java`, check if one of them passes the test cases with `verify`, and then submit the file you chose to edit using `submit`. Once you do that, you'll have completed the challenge and you can move on to the next.

There are certain milestones you reach after completing challenges that will mark your advancement in Foobar. The whole thing is divided up into 5 levels with a certain amount of challenges each and you are given a certain amount of time for each *challenge*, not level. After completing level 2, you get a one-time referral link with which you can invite someone else to the Google Foobar challenge. After completing level 3, you'll be asked to put in some personal information (email, phone number, country/territory) and offered to potentially be reached out to by a Google recruiter. After completing level 4, you get another referral link. Finally, at the end of level 5, you get a nice "congratulations" and are asked if you want to be notified of future challenges. You all receive an encrypted message which you can decipher be first decoding the base64 and XORing it with your username (found after the `foobar:~/` in the terminal).

The challenges increase in difficulty with each level you complete, starting off with a simple are-you-a-programmer screening then testing your skill on algorithms and efficiency. The last level is quite difficult and will test your skills in some advance mathematical principle. For me, that meant group theory and Burnside's Lemma, so I posted my ![solution](/projects/matrix-equivalence-classes) on my Projects page as an explainer and a gauge to others to see what kind of difficulty you can expect from the level 5 challenge.

It is said from other sources I have read that after you complete Foobar, that you *will* be contacted within just a couple days to arrange an interview. These sources are from many years ago though and I was never reached out to; maybe things have changed since then or maybe I'm just a bad programmer, but at least from my experience it isn't a guarantee you will be contacted from this point on.

# My Experience with Foobar

As I said above, it only took me a few days of searching programming-related queries on Google when it took my friend (who is a very good programmer and does this sort of thing a lot) years to get the invite. I'm not really sure why this is — it could be that Foobar remained dormant for some time until recently, but there is certainly an element of uncertainty if you're trying to get invited.

For the challenge, I decided to use Java because I generally prefer it over Python (especially Python 2), but I don't think it makes a difference either way to how Google will grade your performance. There is a stricter time limit with Java, even accounting for how much faster Java runs versus Python, but I didn't find this to be a problem.

My first question was pretty easy. I can't really remember it because I just kinda breezed past it but it's not meant to be that difficult anyway. My friend was actually quite stuck on his first challenge (you are not guaranteed the same challenges between different people, even on the same level) because of weird efficiency requirements that were genuinely bizzare. The `sqrt` function for Python was apparently too slow so he had to do something clever with lists that didn't make Foobar mad, and I was very surprised to see it so early on. I don't think most people will face the same issues.

The next 2 challenges for level 2 were also not much to implement and made use recursion for me, but besides that it also was not so difficult.

Level 3 off the bat was a noticeable step up from previous levels. I got a problem in which I took advantage of Markov chains things like taking the inverse of a matrix. This was a very involved thing to implement and all the while I had to work with fractions and not doubles, so I had to make a `Rational` class holding a numerator and denominator and implemented various math operations on fractions. It was at this point I called it night and stopped working on Foobar.

The rest of the challenges for level 3 were not as hard as the first, so I got through those two in a day. One of which took me a half hour and the other an hour and a half. All in all they were both pretty short solutions if you know how to optimize things.

Level 4 saw extensive use of the algorithms you would learn in an upper division computer science college class. The first one I was an example of there being many ways to approach the problem, but one "most efficient" approach that used the least computation time and memory. This one made use of `gcd` and some mathematical knowledge, but all in all once you figure out the math the coding part becomes something like from level 3. The next one was a max-flow/min-cut graph problem, which I thankfully had much experience with because of my [CS 170](https://cs170.org) class. It was very satisfying to be able to use something I learned from formal instruction in the (kinda) real world.

I'm not going to go into too much detail about the program for level 5 because I do so in the corresponding [project post](/projects/matrix-equivalence-classes), but basically the problem gives you a matrix with `m` rows and `n` columns and each entry can be one of `s` posssible states. The task is to figure out how many possible matrices there can be such that any matrix that can be formed by swapping rows or columns from a given matrix are considered the same and ignored in the counting. Solving this is entirely mathematical, making use of group theory and Burnside's Lemma. It is a bit of a challenge to implement programmatically, but if you understand the math it shouldn't be much harder than the other problems.

Finishing the challenges is a bit anti-climactic, but I found the story accompanying the challenges to be enjoyable and it was nice to see it reach a conclusion. As I said earlier you also get an encrypted message that you decrypt by decoding the base64 and XORing it with your username. I won't spoil it here but if you're curious there are other articles talking about Foobar that include the message. I saw one article that got a completely different message from me and seemingly everyone else, so I'll just put the SHA-1 hash of my message here:
```
b6df9efa2cb6163cc0011a6abb4bc3e60fddd439
```

All in all this was quite a fun experience and a nice thing to work on over the summer. Even if it doesn't lead to any advantage in getting hired at Google, I learned a lot about the many topics this challenge covers and it's a fun story to tell.