import { PartialType } from '@nestjs/mapped-types';
import { CreateUiKitDto } from './create-ui-kit.dto';

export class UpdateUiKitDto extends PartialType(CreateUiKitDto) {
  licenseId?: number;
  name: string;
  description: string;
}
