# Bookman REST API

Bookman Bookstore RESTful APIs and microservices using Node.js, Express and MongoDB

## Features

- No transpilers, just vanilla javascript
- ES2017 latest features like Async/Await
- CORS enabled
- Uses [npm](https://npm.com)
- Uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
- Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
- Gzip compression with [compression](https://github.com/expressjs/compression)
- Linting with [eslint](http://eslint.org)
- Logging with [morgan](https://github.com/expressjs/morgan)

## Requirements

- [Node v7.6+](https://nodejs.org/en/download/current/)
- [Npm](https://npm.com/en/docs/install)

## Getting Started

#### Clone the repo and make it yours:

```bash
git clone --depth 1 https://github.com/maxthestranger/bookman.git
cd bookman
rm -rf .git
```

#### Install dependencies:

```bash
npm install
```

#### Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
npm start
```

## Running in Production

```bash
npm
```

## Inspirations

- [itbook.store](https://itbook.store/)
- [danielfsousa/express-rest-boilerplate](https://github.com/danielfsousa/express-rest-boilerplate)

## License

[MIT License](README.md) - [Max The Stranger](https://github.com/maxthestranger)
