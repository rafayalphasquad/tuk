import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { ComponentsModule } from './components/components.module';
import { ComponentsMetaModule } from './components-meta/components-meta.module';
import { ComponentsIntegrationModule } from './components-integration/components-integration.module';
import { LicensesModule } from './licenses/licenses.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { TransactionsModule } from './transactions/transactions.module';


@Module({
  imports: [CategoryModule, PrismaModule, ComponentsModule, ComponentsMetaModule, ComponentsIntegrationModule, LicensesModule, SubCategoryModule, UsersModule, AuthModule,JwtModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
