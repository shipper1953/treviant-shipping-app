#!/bin/bash
echo "Running migrations and starting server..."
npx knex migrate:latest --env production
npx knex seed:run --env production
node server.js
