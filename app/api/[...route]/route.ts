import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!',
    c
  })
})

app.get('/goodbye', (c) => {
  return c.json({
    message: 'Goodbye from Hono!',
    c
  })
})

export const GET = handle(app)