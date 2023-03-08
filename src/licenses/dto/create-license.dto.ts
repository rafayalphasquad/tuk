import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateLicenseDto {
  @Type(() => String)
  type: string;
  @IsNumber()
  @Type(() => Number)
  price: number;
  @IsString()
  description: string;
  @IsOptional()
  @IsNumber()
  usersId: number;
}
