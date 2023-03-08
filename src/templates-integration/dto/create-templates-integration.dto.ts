import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
export class CreateTemplatesIntegrationDto {
  @IsString()
  framework: string;
  @IsString()
  code: string;
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  templatesId?: number;
}
