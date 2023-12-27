import express from 'express';
import { Router, Request, Response } from 'express';
const app = express();
const route = Router(); 
const port = 3000;
app.use(express.json());



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.get('/status', (req: Request, res: Response) => {
  const msg = `Hello!, This app working on type script...`;   
  res.send(msg)
})

app.post('/calcnumber', (req: Request, res: Response) => {
  
  const reqNumber = req.body.number;

  const apiResponse = {
    Number: reqNumber,
    PreviousNumber: (reqNumber - 1),
    NextNumber: (reqNumber + 1)
  } 
 
  res.send(apiResponse);

})

app.post('/validatemail', (req: Request, res: Response) => {
  const regEx = new RegExp(/^[\a-z-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const email = req.body.Email;
  
  if(regEx.test(email)){
    return res.json(`The email informed is valid!`);
  }
  return res.json(`The email informed is invalid. Try again!`);
})