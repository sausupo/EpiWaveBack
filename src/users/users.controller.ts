import { Body, Controller, Get } from '@nestjs/common';
import { GetUserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUser(@Body() getUserDto: GetUserDto): Promise<string> {
    return this.usersService.getUser();
  }
}
