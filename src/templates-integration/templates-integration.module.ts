import { Module } from '@nestjs/common';
import { TemplatesIntegrationService } from './templates-integration.service';
import { TemplatesIntegrationController } from './templates-integration.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TemplatesIntegrationController],
  providers: [TemplatesIntegrationService],
  imports: [PrismaModule],
})
export class TemplatesIntegrationModule {}
