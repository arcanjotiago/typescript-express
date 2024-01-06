export class DefaltResponse{
    constructor(message:any, status:number){
        this.status = status;
        this.message = message;
    }
    status:number;
    message:any;
}