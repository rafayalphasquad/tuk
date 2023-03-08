import { PartialType } from '@nestjs/mapped-types';
import { CreateLicenseDto } from './create-license.dto';
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateLicenseDto extends PartialType(CreateLicenseDto) {
  @IsOptional()
  @IsString()
  type: string;
  @IsOptional()
  @Type(() => Number)
  price: number;
  @IsOptional()
  @IsString()
  description: string;
  @IsNumber()
  userId: number;
}
