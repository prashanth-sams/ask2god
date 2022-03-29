# Ask2God
[![codecov](https://codecov.io/gh/prashanth-sams/ask2god/branch/master/graph/badge.svg)](https://codecov.io/gh/prashanth-sams/ask2god)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/98e28527e82546358f617e9c44e6d670)](https://www.codacy.com/gh/prashanth-sams/ask2god/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=prashanth-sams/ask2god&amp;utm_campaign=Badge_Grade)

> Ask and it will be given to you; seek and you will find - `Matthew 7:7`

### library installation

```
npm install
```

### start application server

```
npm start
```
> [http://localhost:3000](http://localhost:3000)


# A2G backend

### library installation

```
cd api
npm install
```

### start db server

```
npm install -g nodemon
nodemon server
```
> [http://localhost:4000](http://localhost:4000)

### `mongodb://localhost:27017/manager`

```
brew tap mongodb/brew
brew install mongodb-community

brew services start mongodb-community
mongod --config /usr/local/etc/mongod.conf

ps aux | grep -v grep | grep mongod
mongo
```

# Tests

### Test Runner
```
npm install -g jest-cli
npm test
```