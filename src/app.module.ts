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
import { LicensesModule } from './licenses/licenses.module';
import { ComponentsMetaModule } from './components-meta/components-meta.module';
import { ComponentsModule } from './components/components.module';
import { CategoryModule } from './category/category.module';
import { SubCategory } from './sub-category/entities/sub-category.entity';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { ComponentsIntegration } from './components-integration/entities/components-integration.entity';
import { ComponentsIntegrationModule } from './components-integration/components-integration.module';

@Module({
  imports: [
    UsersModule,
    UsersMetaModule,
    UiKitsModule,
    TransactionsModule,
    TemplatesIntegrationModule,
    TemplatesModule,
    PrismaModule,
    AuthModule,
    LicensesModule,
    ComponentsMetaModule,
    ComponentsModule,
    CategoryModule,
    SubCategoryModule,
    ComponentsIntegrationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
