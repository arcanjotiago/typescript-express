export class DefaltResponse{
    constructor(status:number, message?:any){
        this.status = status;
        this.message = message;
    }
    status:number;
    message?:any;
}