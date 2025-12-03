import express from 'express'
import bodyParser from 'body-parser';
import { initDatabase } from './lib/db/prisma/index.js';

const app = express()
app.set('x-powered-by', false)
app.set('etag', false)
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (_req, res) => {
  res.send('Hello World!')
});

// Initialize the database connection and run migrations
await initDatabase();

export default app