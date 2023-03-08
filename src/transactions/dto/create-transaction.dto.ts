import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
} from 'class-validator';
export class CreateTransactionDto {
  @Type(() => Number)
  @IsOptional()
  usersId: number;
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  licensesId: number;
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  templatesId: number;
  @IsString()
  method?: string;
  @IsOptional()
  @IsBoolean()
  status?: boolean;
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  amount?: number;
}
