import express, { Request, Response } from 'express'
import { getUserId } from './utils'

const app = express()
const host = '0.0.0.0'
const port = 8080

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.get('/user/:id', (req: Request, res: Response) => {
  res.send(getUserId(req.params.id))
})

app.listen(port, host, () => {
  console.log(`Example app listening on ${host}:${port}`)
})
