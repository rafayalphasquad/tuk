export class CreateTransactionDto {
    usersId: number;
    licensesId:number;
    method?:string;
    status?:boolean;
    amount?:number;
}
