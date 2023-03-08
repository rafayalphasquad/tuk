import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { StripeController } from './stripe.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TransactionsModule } from 'src/transactions/transactions.module';
@Module({
  controllers: [StripeController],
  providers: [StripeService],
  imports: [ConfigModule, TransactionsModule],
  exports: [StripeService],
})
export class StripeModule {}
