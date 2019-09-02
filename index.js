const express = require ('express');
const fetch = require ('node-fetch');
const redis = require ('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

// set response
const setResponse = (username, repos) => {
  return `<h2>${username} has ${repos} github repos</h2>`
}

// make request to github for data
const getRepos = async (req, res, next) => {
  try {
    console.log('Fetching Data...');

    const { username } = req.params;
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json();
    const repos =  data.public_repos;

    // set data to redis
    client.setex(username, 3600, repos);
    res.send(setResponse(username, repos));
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

app.get('/repos/:username', getRepos);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
