import User from '@modules/users/infra/typeorm/entities/User';
import CreateUserDTO from '../dtos/CreateUserDTO';
import FindAllProvidersDTO from '../dtos/FindAllPRovidersDTO';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findAllProviders(data: FindAllProvidersDTO): Promise<User[]>;
  create(data: CreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
