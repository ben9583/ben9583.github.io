---
title: "Authorization Tests"
type: "page"
---

GitHub: [ben9583/authorization-tests](https://github.com/ben9583/authorization-tests)

This is just me experimenting with methods of authorization, such as JWTs. The project has an NodeJS server component and a React frontend making use of redis as a database.

## Description

This project represents a full-stack web app that makes use of secure authentication practices I decided to make for practice. Right now, I'm just using a JWT stored in `document.cookie` with `HttpOnly` and `SameSite=strict` meant to address XSS and CSRF respectively. There are of course other ways to go about authentication and even JWTs (notably using the `Authorization: Bearer [token]` header), but I found this was the easiest way to develop alongside create-react-app.

### Frontend

The frontend makes use of [create-react-app](https://github.com/facebook/create-react-app) for building. During development it's hosted on port 3000 and proxies to the backend on port 3001, though of course during production, the client would be a static deliverable and only the server would need to be hosted.

### Server

This project uses [express](https://github.com/expressjs/express) to expose the API endpoints used to interface with the users database, such as being able to register, login, view profiles, etc. This is also where JWTs for the users are created and verified as requests are being processed.

### Database

Although I could use a more suitable database system like Postgres or MongoDB, I chose to just use [Redis](https://github.com/redis/redis) as I already had it installed and it was quick enough for me to setup that I didn't have to change much from what I started with. Because of this, you'll need to install and startup Redis yourself if you plan on trying this out.

## Development

There are a few prerequisites you'll need to get this project working: NodeJS v16, redis, nodemon, and typescript. Be sure to download and install the former two and `npm i -g` the latter.

Once you've got these tools installed, be sure to install the requisite `node_modules`:

```sh
git clone https://github.com/ben9583/authorization-tests
cd authorization-tests
yarn install  # installs "concurrently" for developing server and client at the same time as well as prettier
cd client
yarn install
cd ../server
yarn install
```

Once you're done installing, you can use `yarn start` from the root directory which should run the client and server development scripts at the same time with the necessary proxying handled automatically.
