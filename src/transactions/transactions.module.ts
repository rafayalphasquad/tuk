import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { PrismaModule } from 'prisma/prisma.module';
// import { StripeModule } from 'src/stripe/stripe.module';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [PrismaModule],
  exports: [TransactionsService],
})
export class TransactionsModule {}
