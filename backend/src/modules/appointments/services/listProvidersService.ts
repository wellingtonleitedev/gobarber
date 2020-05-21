import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface RequestDto {
  user_id?: string;
}

@injectable()
export default class ListProvidersService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: RequestDto): Promise<User[]> {
    const users = await this.usersRepository.findAllProviders({
      execept_user_id: user_id,
    });

    return users;
  }
}
