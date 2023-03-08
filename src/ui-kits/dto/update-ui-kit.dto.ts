import { PartialType } from '@nestjs/mapped-types';
import { CreateUiKitDto } from './create-ui-kit.dto';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class UpdateUiKitDto extends PartialType(CreateUiKitDto) {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  licensesId?: number;
  @IsString()
  name: string;
  @IsString()
  description: string;
}
