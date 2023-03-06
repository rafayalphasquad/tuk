import { Module } from '@nestjs/common';
import { LicensesService } from './licenses.service';
import { LicensesController } from './licenses.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [LicensesController],
  providers: [LicensesService],
  imports:[PrismaModule,UsersModule],
  exports:[LicensesService]
})
export class LicensesModule {}
