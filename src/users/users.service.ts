import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/migrations/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}
  create(createUserDto: CreateUserDto) {
       return this.prisma.users.create({
      data: createUserDto
    }); 
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({
      where:{
        id:id,
      }
    }); 
  }

  getuserByEmail(email:string,password:string){
    return this.prisma.users.findUnique({
      where: {
        email,
      },
    });
  }
  findByEmail(email:string){
    return this.prisma.users.findUnique({
      where: {
        email:email,
      },
    });
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where:{
        id:id,
      },
      data: updateUserDto,
    
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: {
        id: id,
      },
    });  
  }
}
