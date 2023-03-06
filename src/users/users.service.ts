import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: createUserDto,
      include: {
        templates: true,
      },
    });
  }

  findAll() {
    return this.prisma.users.findMany({
      include: {
        templates: true,
        licenses: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.users.findMany({
      where: {
        id: id,
      },
      include: {
        templates: true,
        licenses: true,
      },
    });
  }

  findUser(email: string, password: string) {
    return this.prisma.users.findUnique({
      where: {
        email,
      },
    });
  }

 async findByEmail(email: string) {
    return this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: {
        id: id,
      },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        password: updateUserDto.password,
      },
    });
  }

  // addTemplate(usersId: number, templatesId: number) {
  //   return this.prisma.users.update({
  //     where: {
  //       id: usersId,
  //     },
  //     data: {
  //       templates: {
  //         connect: { id: templatesId },
  //       },
  //     },
  //   });
  // }

  remove(id: number) {
    return this.prisma.users.delete({
      where: {
        id: id,
      },
    });
  }
}
