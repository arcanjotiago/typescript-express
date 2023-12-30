import { defaltResponse } from './defaltResponse';
import { responseNumber } from './responseNumber';
import { validatEmail  } from './responseEmail';
import express from 'express';
import { Request, Response } from 'express';
const app = express();
const port = 3000;
app.use(express.json());




app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.get('/status', (req: Request, res: Response) => {
 
  let msgResponse = new defaltResponse(`online`)
  res.send(msgResponse)

})

app.post('/calcnumber', (req: Request, res: Response) => {
  
  const apiResponse = new responseNumber((req.body.number), ((req.body.number) - 1), ((req.body.number) + 1))
  res.send(apiResponse);

})

app.post('/validatemail', (req: Request, res: Response) => {
  
  let responseMail = new validatEmail(req.body.Email);
  return res.json(responseMail.testMail())

})