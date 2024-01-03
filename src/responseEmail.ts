import { DefaltResponse } from "./DefaultResponse";
export class responseMail extends DefaltResponse{
    constructor(message:string, status:string){
        super()
        this.status = status;
        this.message = message;
    }  
}