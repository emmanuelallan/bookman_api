# Bookman REST API

Bookman Bookstore RESTful APIs and microservices using Node.js, Express and MongoDB

![bookman_api dashboard](https://user-images.githubusercontent.com/29913493/159889890-e582b778-03b1-499f-b6b0-0aa632da4c2f.png)

## Features

- CRUD books
- stores images in aws s3 bucket
- uses flutterwave payment gateway for mpesa, paypal and card processing
- stock and sales stats
- backup report in csv
- customizable next js dashboard

## Requirements

- [Node v7.6+](https://nodejs.org/en/download/current/)
- [Npm](https://npm.com/en/docs/install)

## Getting Started

#### Clone the repo and make it yours:

```bash
git clone repo
cd bookman_api
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
npm run build
```

## Inspirations

- [itbook.store](https://itbook.store/)
- [danielfsousa/express-rest-boilerplate](https://github.com/danielfsousa/express-rest-boilerplate)

## License

[MIT License](LICENCE.md) - [Max The Stranger](https://github.com/maxthestranger)
