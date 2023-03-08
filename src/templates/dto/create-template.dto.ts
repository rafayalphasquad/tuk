import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
export class CreateTemplateDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  usersId?: number;
}
