import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.in';
import { UserService } from './user.service';
import { User as UserEntity } from './schemas/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':username')
  async findByUsername(@Param('username') username: string): Promise<UserEntity[]> {
    return this.userService.findByUsername(username);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    createUserDto.createdAt = new Date();
    return this.userService.create(createUserDto);
  }
}
