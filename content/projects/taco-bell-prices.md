---
title: "Taco Bell Price Comparer"
type: "page"
---

GitHub: [ben9583/taco-bell-prices](https://github.com/ben9583/taco-bell-prices)

*A website that grabs the latest price data between Taco Bell locations in the US and compares them to national averages.*

![Taco Bell Prices Demonstration](https://github.com/ben9583/taco-bell-prices/assets/16968917/a21f406e-bbac-4fae-9487-0058a1a64575)

# Why...?

Let's say you're in Berkeley, California and you're looking to get a Taco Bell party pack for ~~yourself~~ a group of people. You have the Taco Bell app and it picks the closest Taco Bell location nearest to you, and naturally you order from there. This is however, a major mistake.

Taco Bell, like many chain restaurants, **varies their prices by location, sometimes by a lot**. This price data get be updated very frequently and I speculate depends on the buying habits of people nearby. Even nearby locations can have *substantially* different prices for the same product.

This website uses the Taco Bell API to gather pricing data on locations across the US in a way that is much more navigable than the website and the app (which don't like it when you comparison shop between locations). Not only are you able to view the prices right in front of you, but you can also directly compare prices between stores.

Let's go back to the scenario at the top and view the pricing data for party packs in Berkeley:

![Berkeley Taco Bell prices](https://github.com/ben9583/taco-bell-prices/assets/16968917/41abbc57-57ba-4b46-903a-9366d340a90c)

The prices vary from $23-$33, and the red background indicates this is significantly above the national average. However, if we look at Oakland's prices just a couple miles away, we see the following:

![Oakland Taco Bell prices](https://github.com/ben9583/taco-bell-prices/assets/16968917/25bb42e3-01b6-431b-bcb3-08d1444adf20)

You can save as much as $5 on party packs by just walking to a different Taco Bell location. This breakdown can be viewed using the comparison tool:

![Berkeley Oakland Comparison](https://github.com/ben9583/taco-bell-prices/assets/16968917/2a86ec4e-81a1-4969-a67f-90861540a902)

You can add as many stores as you like to the comparison tool and find the one near you that has the best prices for what you want to buy (or, you can use the colors to find something that has the best value and find its location).

It's worth noting that locations are not universally more expensive than the other — Berkeley has a Taco & Burrito Cravings Pack that is *way cheaper!*

![Berkeley Strange Deal](https://github.com/ben9583/taco-bell-prices/assets/16968917/3fc272ef-fd37-4ed7-86b7-0cc16a15e4e8)

You'll find all sorts of idiosyncrasies like this where you are. Berkeley just happens to be where I made this project.

## Takeaways from this Project

- Taco Bell varies their prices by location, sometimes by a lot.
- This even happens locally for Taco Bells near each other.
- Some locations have stupidly high or stupidly low pricing for certain items.
- Some locations don't serve the same things as other locations. You can use this tool to find such items.
- Some locations are good value for regular items but *terrible* value for breakfast. Some locations are the reverse.
- Some locations have good value for veggie items but awful value for meat items. Some locations are the reverse.
- Some locations price gouge for group items, especially in college towns, but don't bother for locations right outside these areas.

# Getting Started

## First Time Steps

This project is built with React on Next.js 13 with the `app` directory. Building it yourself is a pretty straightforward affair, but there are some caveats you should be aware of.

**Please ensure NodeJS v18 is installed on your system as is Git before starting. This project uses Yarn 2, please enable yarn with `corepack enable` before continuing.**

Run the following commands to get started:

```sh
git clone https://github.com/ben9583/taco-bell-prices.git taco-bell-prices
cd taco-bell-prices
yarn
```

This will download the project and install the `npm` packages. It will also compy the `.env.template` file to `.env` filling in the environment variables as needed. 

## Note About Getting National Pricing Data

Right now, the only environment variable is `GET_PRODUCTS_TOKEN`, which is a token used to authenticate requests to generate the `locations.json` and `averagePrices.json` files which are referenced for coloring the prices in as reference for national averages. When you run `yarn`, a post-install script is run that automatically generates a random UUID as your token. You can change this in `.env` to whatever you'd like, or delete it to remove the token as a security measure.

You can generate these files by making a post request to the `/api/priv/getAllProducts` endpoint and setting the `token` header to the value in `GET_PRODUCTS_TOKEN`:

```sh
 curl -X POST 'http://localhost:3000/api/priv/getAllProducts' --header "token: [YOUR TOKEN HERE]"
```

Run this everytime you want to update pricing data. I would do this every few days or so, or if Taco Bell releases a new bunch of items.

You can set `GET_PRODUCTS_TOKEN` to whatever you'd like or leave it empty to remove the token-based authentication. I don't recommend this however, as it allows anyone to DOS Taco Bell's API, whose infrastructure is surprisingly weak and can be easily overwhelmed by a single network making enough `fetch` requests.

You don't need to do any of this to have a functioning website. The only difference is that it provides national data to color in each of the items as being good deals nationally. If these files are missing, the colors will not show but you can still compare against a list of stores of your selection.

## Developing and Deploying

The development and deployment process is pretty straightforward as the process follows a typical Next.js project. Simply run `yarn dev` to start a development server and `yarn build && yarn start` to build and host a production deployment. Please note that Next.js 13 is still in development at time of writing, and I have had some issues with running these commands in the past that were fixed by updating Next.js.

## Known Issues

There are a few issues that I would hope to have resolved when this project is completed:

- The UI is more function than form. It's pretty ugly but it gets the job done, but if I were using this project I would try and pretty things up a bit.
- The `/compare` endpoint has no frontend way of using it. If you run the app, you'll see I have an "add to compare" button, but this doesn't do anything at the moment and you manually have to enter the locations you want to compare (for instance, `/compare?stores=030756,032759`. You can add more locations to this list too).
- When you visit `/store/[id]` or `/compare?stores=[id],[id]`, you'll notice that the webpage doesn't display the address like it does in the search bar. This is a function of Taco Bell's own API, which doesn't return this information given a store ID and I need to figure out how I can show this. Personally, I've memorized the locations of the store IDs I work with a lot but this is far from ideal.
- Sometimes, images don't render at all. I've noticed this when a new item gets added to Taco Bell's menu and the image doesn't load on the website *until I load the item on Taco Bell App*. I'm not sure what this is about, but I'm suspecting that the Taco Bell app loads the image in a way that says that this IP address isn't suspicious for this request and allows future requests to load this image. This is a really weird way of trying to secure your website, but it's something worth noting if you're experiencing this issue.

# Other Information

## Resources

Here are some helpful resources you might want to use when working on this project:

- [React](https://reactjs.org/)
- [Next.js 13 docs](https://nextjs.org/docs) (select "Using App Router" on the left)

## License

This project is licensed under AGPL 3.0, the details of which can be found in the `LICENSE` file.
