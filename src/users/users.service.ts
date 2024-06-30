import { Injectable } from '@nestjs/common';
import { getUser } from 'src/users/methods';

@Injectable()
export class UsersService {
  getUser = () => getUser()
}
