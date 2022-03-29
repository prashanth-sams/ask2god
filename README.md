# Ask2God
[![codecov](https://codecov.io/gh/prashanth-sams/a2g_manager/branch/master/graph/badge.svg)](https://codecov.io/gh/prashanth-sams/a2g_manager)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7cdb996f24384f4194f6a6cd288e24ad)](https://app.codacy.com/app/prashanth-sams/a2g_manager?utm_source=github.com&utm_medium=referral&utm_content=prashanth-sams/a2g_manager&utm_campaign=Badge_Grade_Dashboard)

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