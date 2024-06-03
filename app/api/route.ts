import { Hono } from 'hono'
import { handle } from 'hono/vercel'


const app = new Hono().basePath('/api')


app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!',
    c
  })
})


export const GET = handle(app)