export class CreateTransactionDto {
  usersId: number;
  licensesId: number;
  templatesId: number;
  method?: string;
  status?: boolean;
  amount?: number;
}
