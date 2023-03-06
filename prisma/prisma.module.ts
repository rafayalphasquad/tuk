import { Global, Module } from '@nestjs/common';
import { PrismaService } from './migrations/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
