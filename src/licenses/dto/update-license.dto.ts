import { PartialType } from '@nestjs/mapped-types';
import { CreateLicenseDto } from './create-license.dto';

export class UpdateLicenseDto extends PartialType(CreateLicenseDto) {
  type?: string;
  price?: number;
  description?: string;
  usersId?: number;
}
