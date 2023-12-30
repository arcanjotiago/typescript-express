export class validatEmail{
    constructor(email:string){
        this.email = email;
    }
    email: string;

    testMail(){
        const regEx = new RegExp(/^[\a-z-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
        
        if(regEx.test(this.email)){
            return {message: `The email informed is valid!`};
          }
          return {mesage: `The email informed is invalid. Try again!`};
        }
}