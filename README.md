# CRUD-Node-JS

Basic full-stack project that implements MVC design pattern in a simple Node.js app.

Uses Node.js, Express, Knex, MySQL, JQuery (AJAX) y Bootstrap

## Requirements

[Knex.js](http://knexjs.org/) is required to be installed globally.

```bash
npm i knex -g
```

## Installation

1. Change .env.example extension to .env and modify environment variables

```bash
cp .env.example .env
```

2. Install dependencies declared on `package.json`

```bash
npm install
```

3. Execute knex migrations

```bash
knex migrate:latest
```

4. Execute knex seeds

```bash
knex seed:run
```

5. Start Node.js server

```bash
node index.js
```

## Credits

Some CRUD implementation ideas: http://appsbuilders.org/guides/build-a-full-stack-javascript-crud-app-with-node-express-handlebars-bootstrap-postgres-knex/
