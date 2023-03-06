import { Module } from '@nestjs/common';
import { ComponentsMetaService } from './components-meta.service';
import { ComponentsMetaController } from './components-meta.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ComponentsMetaController],
  providers: [ComponentsMetaService],
  imports:[PrismaModule]
})
export class ComponentsMetaModule {}
