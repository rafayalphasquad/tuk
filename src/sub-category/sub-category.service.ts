import { Injectable } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { PrismaService } from 'src/prisma/migrations/prisma.service';
@Injectable()
export class SubCategoryService {
  constructor(private prisma:PrismaService){}
  create(createSubCategoryDto: CreateSubCategoryDto) {
    return this.prisma.subCategory.create({
      data: createSubCategoryDto
    }); 
  }

  findAll() {
    return this.prisma.subCategory.findMany();
  }

  findOne(id: number) {
    return this.prisma.subCategory.findUnique({
      where:{
        id:id,
      }
    }); 
  }

  update(id: number, updateSubCategoryDto: UpdateSubCategoryDto) {
    return this.prisma.subCategory.update({
      where:{
        id:id,
      },
      data: updateSubCategoryDto
    });
  }

  remove(id: number) {
    return this.prisma.subCategory.delete({
      where: {
        id: id,
      },
    });  
  }
}
