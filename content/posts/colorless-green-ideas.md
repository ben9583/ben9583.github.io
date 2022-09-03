---
title: "'Colorless Green Ideas Sleep Furiously' and Other Challenges for NLP"
date: 2022-09-02T11:40:01-07:00
description: "Ambiguous and nonsensical but syntactically valid sentences are easy to identify and dismiss as a human, but pose serious obstacles for the future of Natural Language Processing."
tags: ["linguistics", "nlp", "deep learning"]
type: "post"
weight: 25
showTableOfContents: true
---

# Barriers to Natural Language Processing

Natural language processing is the field of creating algorithms that can parse human language and interpret its semantics. When we consider it in our everyday lives, we think of virtual assistants like Siri and Alexa—programs known to all who have used them that are quite flawed. There are too many seemingly simple queries and sentences that these interpreters cannot understand for them to be considered "intelligent" enough to have an understanding of language. However, when we consider that the field of linguistics really developed its formalism only in the past century, it's impressive to see how far we've come. In that time, though, we've learned that language is an incredibly complicated system of rules and guidelines that we as people somehow have a strong ability to intuit, even from a very young age. This leaves much ground for computers to make up in the perserverence of NLP.

## Semantically nonsensical sentences

![Image: DALLE-2 response to 'colorless green ideas sleep furiously'](/images/posts/colorless-green-ideas/colorless-green-ideas-dalle.png)
*DALLE-2 response to 'colorless green ideas sleep furiously'*

When we say things in speech or writing, we intend to convey some meaning using the words and other communication devices (like hand gestures, intonations) we employ. However, the English language does not forbid making syntactically correct sentences that have no sensical meaning, or are even self-contradicting. One famous example suggested by [Noam Chomsky](https://en.wikipedia.org/wiki/Noam_Chomsky) is the phrase **'Colorless green ideas sleep furiously.'** This is a sentence that checks all the boxes for syntactic validity, however, to a complete language interpreter (like yourself), it makes no sense semantically; it's not possible for something to be both 'colorless' and 'green', something to 'sleep' 'furiously', and for 'ideas' to exhibit any of those characteristics. Nevertheless, the sentence is perfectly valid: Grammarly won't criticize you for making it and, as it stands today, only a human will be able to point out to you the insanity of the sentence. The images above are what I got from putting in the phrase to DALLE-2, a state-of-the-art AI that takes a text prompt and outputs an image which I got access to a bit over a month ago; I thought it was really interesting to see how the algorithm interpreted the abstract concept of 'ideas' into an image.

## Semantically ambiguous sentences

$$\text{For each of the following sentences, solve for }x: \newline \text{The city councilmen}_1\text{ refused the demonstrators}_2\text{ a permit because they}_x\text{ feared violence.} \newline \text{The city councilmen}_1\text{ refused the demonstrators}_2\text{ a permit because they}_x\text{ advocated violence.}$$

Another problem facing NLP is the issue of ambiguous meaning. NLP algorithms today completely fail at understanding sentences that are both well-formed and understandable to humans because of ambiguity. As we saw earlier, our understanding of language doesn't just depend on how a sentence is structured, but also the context surrounding the words involved. This also extends to meaningful sentences with unclear references in pronouns. 

In his 1972 paper, *Understanding Natural Language*, [Terry Winograd](https://en.wikipedia.org/wiki/Terry_Winograd) proposed the sentences above as being impossible to parse by computers without a semantic understanding of the words themselves. The sentence **'The city councilmen refused the demonstrators a permit because they feared violence'** has an ambiguous pronoun: they. We are able to understand the 'they' in the sentence is referring to the councilmen not because of any syntactic rule, but because we know the concept of 'councilmen' and 'demonstrators' and understand which party would likely fear violence. This can be demonstrated by using the equally valid sentence: **'The city councilmen refused the demonstrators a permit because they advocated violence.'** Here, we know that 'they' refers to the demonstrators in this case, despite the sentence being syntactically equivalent to the former.

This challenge is known as the "Winograd Schema" and is a common suggestion as an improvement to the famous Turing Test: an assessment proposed by [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing) that seeks to determine if a machine has intelligence indistinguishable to humans. In a Winograd schema challenge, sentences like the one above can be given to a machine and it must figure out which subject the pronoun is referring to. These sentences must be carefully crafted to ensure that humans can easily answer with high success rates but with ambiguity requiring commonsense reasoning to solve.

## 'Is the man who is tall happy?'

![Image: Poster for the movie *Is the Man Who Is Tall Happy?*, a documentary of Noam Chomsky](/images/posts/colorless-green-ideas/is-the-man-who-is-tall-happy.jpg)
*Poster for the movie* Is the Man Who Is Tall Happy?*, a documentary of Noam Chomsky*

One final thing I'd like talk about is a famous phrase proposed again by Noam Chomsky (he is quite the figure in linguistics, among other things). Chomsky presents the sentence 'The man who is tall is happy' and asks the listener to phrase the sentence as a question inquiring if the man is happy. The "obvious" answer is the sentence 'Is the man who is tall happy?', but it carries a subtle yet significant challenge to AI: how did we decide which 'is' to move to the front of the sentence?

In English, turning a statement into a question like this involves moving the verb 'is' to the beginning of the sentence, but it is not clear which 'is' we should move. Chomsky points out that it would be computationally much easier to move the first 'is' to the beginning, but that would form a syntactically invalid sentence: 'Is the man who tall is happy?' Instead, we choose to move the 'is' referring to 'happy' to the beginning, which represents a stumbling point to machines but is practically unnoticable to humans. Even children first learning language, Chomsky notes, would never make a mistake like this. While not as much of a challenge to NLP algorithms as the first two points discussed, it is still worth mentioning as it highlights a seemingly inherent gap between humans and machines in interpreting language. There seems to be an almost hard-wired way our brains deal with language that computers would in turn have to acknowledge and replicate.

# How can NLP move on?

This section is purely my reflections and speculations from here on, so keep that in mind when I say the things I say.

Natural Language Processing was always considered a difficult challenge for computers, but I can't help but feel from these challenges that it's even harder than anyone would have imagined. It seems that to have a complete understanding of language, we also need both a complete model of the world with a mapping of diction to ideas as well as an understanding of how the brain works when it interprets languages. Not only is language dependent on the pragmatic world around us, but also the arbitrary mind within us. This will prove to be a major hurdle for companies and institutions who seek to use NLP in their projects but may be the most concrete path we can take to reach general intelligence.

Understanding this, where do we go from here? I feel like deep learning is taking us down the right path; by using structures that are at least inspired by the structure of the brain seems to make a lot of sense. Of course, traditional feed-forward networks and recurrent neural networks differ substantially from human brain, so it's difficult to say those concepts are truly similar to the brain. We've seen quite a lot of success from long short-term memory (LSTM) networks, but they are yet to completely tackle the obstacles mentioned above. I'm interested in looking at how **Self-Organizing Feature Maps (SOFM)** can potentially further the goal of developing a fully functional NLP algorithm, as they much more closely relate their structure and function to the brain. Anyway, I think deep learning models that make more of an attempt to simulate the known mechanism that handles language so well will see the most success, so that's what I would like to explore more in the future.
