import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get()
  findOne(@Body('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch()
  update(@Body('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
  // @Post('UT')
  // updateTemplate(
  //   @Body('usersId') usersId: string,
  //   @Body('templatesId') templatesId: string,
  // ) {
  //   return this.usersService.addTemplate(+usersId, +templatesId);
  // }

  
  @Delete()
  remove(@Body('id') id: string) {
    return this.usersService.remove(+id);
  }
}
