import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryController } from './sub-category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SubCategoryController],
  providers: [SubCategoryService],
  imports:[PrismaModule]
})
export class SubCategoryModule {}
