import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplateDto } from './create-template.dto';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
export class UpdateTemplateDto extends PartialType(CreateTemplateDto) {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  usersId?: number;
}
