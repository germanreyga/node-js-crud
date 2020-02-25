# Hello MVC

Proyecto básico que muestra como se implementa el patrón de diseño: MVC en Node.js.

Usa Node.js, Express, Knex y MySQL

## Créditos

- Idea para construir el CRUD: http://appsbuilders.org/guides/build-a-full-stack-javascript-crud-app-with-node-express-handlebars-bootstrap-postgres-knex/

## Requerimientos

El sistema depende de que tengas [Knex.js](http://knexjs.org/) instalado de forma global.

```bash
npm i knex -g
```

## Instalación

1. Guarda el archivo .env.example como .env y modifica las variables para que coincidan con tu ambiente

```bash
cp .env.example .env
```

2. Instala los paquetes indicados en el `package.json`

```bash
npm install
```

3. Ejecuta las migraciones

```bash
knex migrate:latest
```

4. Ejecuta los seeds

```bash
knex seed:run
```

5. Ejecuta el servidor de Node.js

```bash
node index.js
```
