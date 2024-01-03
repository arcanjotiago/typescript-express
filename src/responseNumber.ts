import { DefaltResponse } from "./DefaultResponse"

export class ResponseNumber extends DefaltResponse{
    constructor(message:any, status:string){
        super()
        this.status = status;
        this.message = message;
    }
}