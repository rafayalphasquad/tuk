import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
export class CreateUiKitDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  licensesId?: number;
  @IsString()
  name: string;
  @IsString()
  description: string;
}
