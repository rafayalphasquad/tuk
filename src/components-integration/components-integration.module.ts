import { Module } from '@nestjs/common';
import { ComponentsIntegrationService } from './components-integration.service';
import { ComponentsIntegrationController } from './components-integration.controller';
import { PrismaModule } from 'src/prisma/prisma.module';



@Module({
  controllers: [ComponentsIntegrationController],
  providers: [ComponentsIntegrationService],
  imports :[PrismaModule]
})
export class ComponentsIntegrationModule {}
