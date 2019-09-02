# Redis caching in NodeJS

This is a NodeJS application that demonstrates how Redis can be used to reduce request time.
Here, I fetched data from the GitHub API and used redis to cache the number of public repos a user has.

## Technologies used

* Node </br>
* Express </br>
* Node Fetch </br>
* Redis

## Setup

* Clone this repository.

```bash
  git clone https://github.com/marcdomain/NodeJS-Redis-Caching.git
```

* cd into the repository

```bash
  cd NodeJS-Redis-Caching
```

* Ensure [Node](https://nodejs.org/en/) and [Redis](https://redis.io/download) are installed on your machine.
* Install the project dependencies

```bash
  npm install
```

## Usage

* The App runs on port 5000 (http://localhost:5000). Feel free to change it to your desired port.
* Start the app

```bash
npm start
```

* Using your browser, visit `repos/:username` API endpoint to get the number of public repos belonging to the user.
