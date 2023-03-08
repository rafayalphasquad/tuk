import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplatesIntegrationDto } from './create-templates-integration.dto';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class UpdateTemplatesIntegrationDto extends PartialType(
  CreateTemplatesIntegrationDto,
) {
  @IsString()
  framework: string;
  @IsString()
  code: string;
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  templatesId?: number;
}
