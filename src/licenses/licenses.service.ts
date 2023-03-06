import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/migrations/prisma.service';
import { UsersService } from 'src/users/users.service';
import { CreateLicenseDto } from './dto/create-license.dto';
import { UpdateLicenseDto } from './dto/update-license.dto';

@Injectable()
export class LicensesService {
  constructor(private prisma:PrismaService){}
 async create(createLicenseDto: CreateLicenseDto) {
  

  
    return this.prisma.licenses.create({
      data: createLicenseDto,
      
    });
  }

  findAll() {
    return this.prisma.licenses.findMany({

    });
  }
  

  findOne(id: number) {
    return this.prisma.licenses.findUnique({
      where:{
        id:id,
      },
      include:{
        transactions:true
      }

    });
  }

  update(id: number, updateLicenseDto: UpdateLicenseDto) {
    return this.prisma.licenses.update({
      where:{
        id:id,
      },
      data: updateLicenseDto
    });
  }

  remove(id: number) {
    return this.prisma.licenses.delete({
      where: {
        id: id,
      },
    }); 
  }
}
