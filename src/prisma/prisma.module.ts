import { Module } from '@nestjs/common';
import { PrismaService } from './migrations/prisma.service';




@Module({
 providers: [PrismaService],
 exports: [PrismaService]
  
})
export class PrismaModule {}
