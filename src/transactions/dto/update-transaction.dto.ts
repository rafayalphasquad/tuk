import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './create-transaction.dto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
  usersId: number;
  licensesId: number;
  templatesId: number;
  method?: string;
  status?: boolean;
  amount?: number;
}
