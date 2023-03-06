import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersMetaModule } from './users-meta/users-meta.module';
import { UiKitsModule } from './ui-kits/ui-kits.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TemplatesIntegrationModule } from './templates-integration/templates-integration.module';
import { TemplatesModule } from './templates/templates.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, UsersMetaModule, UiKitsModule, TransactionsModule, TemplatesIntegrationModule, TemplatesModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
