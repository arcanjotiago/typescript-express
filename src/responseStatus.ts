import { DefaltResponse } from "./DefaultResponse";

export class ResponseStatus extends DefaltResponse{
    constructor(message:string){
        super()
        this.message = message;
    }
}