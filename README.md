# todo-demo-api

## Initial Project

```
  $ ./lastest/init_project.sh $ProjectName
```
## Setup

```
  $ ./lastest/add_packages.sh && ./lastest/setup.sh
```

create .env
```
PORT=8000
AUTH_SECRET=djsvkasklfkadshfkjashdhfas
SALT_SECRET=djfljskfjlsadjflalks
```

#### Remove

```
  $ rm -rf ./template ./lastest
```

### package.json

```
{
  ...
  "scripts": {
    "start": "node server.js",
    "start:watch": "./node_modules/nodemon/bin/nodemon.js server.js",
    "start:docker": "./node_modules/nodemon/bin/nodemon.js /usr/src/app/server.js",
    "test": "jest",
    "test:watch": "jest --watch test --color",
    "test:CI": "CI=true jest test --color --reporters=jest-junit --forceExit --coverage --coverageDirectory=output/coverage/jest"
  },
  "jest": {
    "testURL": "http://localhost/",
    "collectCoverageFrom": [
      "routes/*.js",
      "!src/server.js",
      "!<rootDir>/node_modules/"
    ],
    "coverageReporters": [
      "text",
      "html"
    ]
  },
  ...
}
```

## Build And Run Container Docker Image

```
  $ docker build . -t todo-demo-api --progress=plain -f deploy/todo-demo-api/Dockerfile
  $ docker run -p 8220:8220 -d todo-demo-api
```

