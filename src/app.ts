import { ResponseNumber } from './responseNumber';
import { responseMail  } from './responseEmail';
import { ResponseStatus  } from './responseStatus';
import express from 'express';
import { Request, Response } from 'express';
const app = express();
const port = 3000;
app.use(express.json());



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.get('/status', (req: Request, res: Response) => {
 
  let msgResponse = new ResponseStatus(`online`)
  res.send(msgResponse)

})

app.post('/calcnumber', (req: Request, res: Response) => {
  const number = (req.body.number);
  const previousNumber = (number - 1);
  const nextNumber = (number+1);

  const apiResponse = new ResponseNumber({ number, previousNumber, nextNumber}, 'calculated')

  res.send(apiResponse);

})

app.post('/ValidatEmail', (req: Request, res: Response) => {
  const regEx = new RegExp(/^[\a-z-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const email = req.body.Email;
    
    if(regEx.test(email)){
      let emailResponse = new responseMail(`The email informed is valid!`, `sucess`);
      return res.json(emailResponse);
      }
    let emailResponse = new responseMail(`The email informed is invalid. Try again!`, `error!`);
    return res.json(emailResponse);

    })