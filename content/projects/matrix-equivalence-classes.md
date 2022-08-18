---
title: Matrix Equivalence Classes
type: page
---

GitHub: [ben9583/matrix-equivalence-classes](https://github.com/ben9583/matrix-equivalence-classes)

This is a Java program I wrote for a [Google Foobar](https://google.com/foobar) challenge ("Disorderly Escape") that counts matrix equivalence classes under row and column swaps. If you're here to see that, you can check out the `foobar` directory. I've also since reorganized my code into a proper Java project.

## Task
Given an $M\times N$ matrix wherein each entry can take one of $S$ states, determine how many possible matrix "groups" can be made such that a group is represented by the set of all matrices formed by swapping the rows and/or columns of a matrix.

## Explained
### Concepts
The set of matrices defined by rows swaps and column swaps can be expressed using the symmetric groups $S_M$ and $S_N$ respectively. Note that the matrices themselves do not define these groups, in fact they can apply to any kind of bijective function under composition, that is a function that undoes itself in the form $f^{-1}(f(x)) = x$. In this case, that would be either row-swapping or column-swapping, since un-swapping gives you the original matrix. We therefore consider any matrix that is the product of swaps on another matrix to be part of the same group.

With this in mind, how can we count the equivalence classes of an $M\times N$ matrix with $S$ possible states per entry? Let's first consider how we can count just row swaps, defined by group $S_M$. We can use [Burnside's Lemma](https://en.wikipedia.org/wiki/Burnside%27s_lemma) to count what is known as the "orbits" of the set of possible matrices acted upon by the group $S_M$. The orbit of a matrix is defined by the set of matrices that can be transformed by a operation (in this case, row swaps) to get the matrix. The orbit, in this case, is an equivalence class, and we can therefore use the following equation:

$$|X/G| = \frac{1}{|G|}\sum_{g \in G}|X^g|$$

Where $|X/G|$ is the number of orbits, $|G|$ is the *cardinality of the group*, and $|X^g|$ is the number of transformations fixed by $g$. What this says is that the number of orbits is the average number of fixed transformations on $X$ over a set of group elements $G$.

The cardinality of a group can be thought of as the number of functions you can perform from one member of an equivalence group to another member of the *same* group. In this case, that's all the possible row swaps you can make (for a $3\times 3$ matrix, you can swap: [], [1-2, 2-1], [1-3, 3-1], [2-3, 3-2], [1-2, 2-3, 3-1], [1-3, 3-2, 2-1] giving 6 operations; note that not swapping rows is considered an operation and you can swap multiple rows as long as they give you a unique permutation of the rows). As it turns out, every set of transformations that can defined by $S_M$ have the same number of such operations: $M!$, the number of permutations of $M$ things (in this case, rows).

The number of transformations fixed by $g$ is the number of matrices that, when transformed by $g$, give you the same matrix.

We therefore need to count the number of matrices left fixed after each row swap individually and divide by $M!$ to get the number of orbits over row swapping. We can find the number of orbits with column swapping the same way, since row swapping and column swapping are indistinguishable for our purposes (though $M$ and $N$ may be different).

How do we combine these two groups? We can take the *Cartesian product group* of the two groups $S_M\times S_N$ giving us this new equation:

$$|X/G| = \frac{1}{M!N!}\sum_{\sigma \in S_M}\sum_{\tau \in S_N}|X^{(\sigma , \tau)}|$$

There are some things to point out in this new equation. $\sigma$ represents some given row operation and $\tau$ a column operation. Now, $|X^{(\sigma, \tau)}|$ is the number of matrices not changed after row swap $\sigma$ and column swap $\tau$. This gives us an equation where all we have to plug in is $S$, which gives us an answer.

### Example
#### Simple
Consider a $2\times 2$ matrix such that each entry can be either $0$ or $1$ $(S=2)$. Here are some such configurations:
$$\begin{bmatrix}1 & 1 \\\\ 1 & 0\end{bmatrix}\ \begin{bmatrix}1 & 0 \\\\ 0 & 0\end{bmatrix}\ \begin{bmatrix}1 & 1 \\\\ 1 & 1\end{bmatrix}\ $$

If we take a look at the configuration with a single $1$ in the top left corner, we see we can swap the rows and columns to form the following equivalent matrices under the group we defined earlier:

$$\begin{bmatrix}1 & 0 \\\\ 0 & 0\end{bmatrix}\ \begin{bmatrix}0 & 1 \\\\ 0 & 0\end{bmatrix}\ \begin{bmatrix}0 & 0 \\\\ 1 & 0\end{bmatrix}\ \begin{bmatrix}0 & 0 \\\\ 0 & 1\end{bmatrix}\ $$

In our problem, **we consider all of these to be part of the same group.** This means they only count for one equivalence class. Here is *a* list of *one* matrix from each of the total equivalence groups for the given parameters:

$$\begin{bmatrix}0 &  0\\\\ 0 & 0\end{bmatrix}\ \begin{bmatrix}1 & 0 \\\\ 0 & 0\end{bmatrix}\ \begin{bmatrix}1 & 1 \\\\ 0 & 0\end{bmatrix}\ \begin{bmatrix}1 & 0 \\\\ 0 & 1\end{bmatrix}\ \begin{bmatrix}1 & 0 \\\\ 1 & 0\end{bmatrix}\ \begin{bmatrix}1 & 1 \\\\ 1 & 0\end{bmatrix}\ \begin{bmatrix}1 & 1 \\\\ 1 & 1\end{bmatrix}\ $$

There are 7 in total. When I say "*a* list of *one* matrix", I mean we could have used any matrix from the same equivalence group to represent the group as a whole. Therefore, this list is valid, but we could have used $\begin{bmatrix}0 & 1 \\\\ 0 & 0\end{bmatrix}$ instead of $\begin{bmatrix}1 & 0 \\\\ 0 & 0\end{bmatrix}$ just as well.

#### General
Let's use the same $2\times 2$ matrix, this time applying Burnside's lemma to get a general solution that could be applying to more columns/rows/states.

We can already fill out $M!$ and $N!$, giving us this equation:

$$|X/G| = \frac{1}{4}\sum_{\sigma \in S_M}\sum_{\tau \in S_N}|X^{(\sigma , \tau)}|$$

Now we need to iterate through all the possible row-column swap permutations. We'll define $\sigma_0$ as the row operation of swapping nothing and $\sigma_1$ as the row operation of swapping the (only) 2 rows. Symmetrically, we'll define the same for columns for $\tau_0$ and $\tau_1$. Now we count:

$(\sigma_0, \tau_0)$ gives us the same matrix no matter what the values are. Because there are $S\*S\*S\*S=S^4$ possible matrices, $|X^{(\sigma_0, \tau_0)}|$ is just $S^4$.

$(\sigma_1, \tau_0)$ gives us just a row swap. A matrix is fixed if the two rows are identical. To count this, we can let the first row be any permutation of states, but the second row has only one possible state: the one identical to the first. This means we have $S\*S\*1\*1=S^2$ possible matrices.

$(\sigma_0, \tau_1)$ gives us a column swap. By symmetry on the last part, we also get $S^2$ possible matrices.

$(\sigma_1, \tau_1)$ gives us a row and column swap. For a matrix to be fixed, the diagonals need to be the same, which gives us an equivalent counting method to $(\sigma_1, \tau_0)$ or $(\sigma_0, \tau_1)$: We have $S^2$ matrices.

We can now sum up all of these possibilities and divide by the 4 possible configurations of $[\sigma_0, \sigma_1] \in S_2$ and $[\tau_0, \tau_1] \in S_2$:

$$\frac{1}{4}\left(S^4 + S^2 + S^2 + S^2\right) = \frac{1}{4}S^4 + \frac{3}{4}S^2$$

With $S=2$, we get the same answer as before: $\frac{1}{4}2^4 + \frac{3}{4}2^2 = 4 + 3 = 7$.

This process was considerably longer than the simple process for a $2\times 2$ matrix with $S=2$ states, but this method of counting is systematic and scales simply with matrix size, and adding another state is as simple as plugging in a different value for $S$.

## Working with the Code
As mentioned at the top, I originally encountered this problem in a level 5 Google Foobar challenge as the last problem I had to complete. As they give users the option to write their code in either Java 8 or Python 2, I picked Java to write this in and left my code in the `foobar` directory. However, I would **not** recommend reading it to understand what's going on and instead direct you to the polished code in `src`.

Since the numbers we're working with are ginormous, I make use of Java's `BigInteger` class and had to create my own `Rational` class for expressing really large fractions without losing accuracy to floating point precision errors. Such is the challenges of doing this in Java instead of Python. I'd mostly focus on the following classes if you want to learn what's going on:

- `impl/Solution.java`
- `impl/utils/Symbol.java`
- `impl/utils/SymbolPair.java`

I also implemented a bunch of extraneous classes for testing/running solutions in a more general settings, so if you want to tinker with this to make it more efficient, expand functionality, or just play around, I've hopefully made that process a bit easier for you.

I've decided to update `src` to Java 17 while keeping `foobar` Java 8; keep this in mind if you plan on working with both. You cannot use Java 8 on `src` as it makes use of later features like records.

## Links
Here are some helpful links for further reading on this topic:
- [Burnside's Lemma](https://en.wikipedia.org/wiki/Burnside%27s_lemma)
- [Symmetric Groups](https://en.wikipedia.org/wiki/Symmetric_group)
- [StackExchange Walkthrough](https://math.stackexchange.com/questions/1941503/number-of-equivalence-classes-of-matrices-under-switching-rows-and-columns)
- [Higher Level Discussion of Burnside's Lemma applied to Matrix Equivalence Classes](https://math.stackexchange.com/questions/2056708/number-of-equivalence-classes-of-w-times-h-matrices-under-switching-rows-and)
- [Maple Code for Counting Matrix Equivalence Classes](https://oeis.org/A058001/a058001.html.txt)
- [Thank you to the OEIS for carrying my math knowledge](https://oeis.org)
