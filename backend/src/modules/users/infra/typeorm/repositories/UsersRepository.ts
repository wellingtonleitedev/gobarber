import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { Repository, getRepository } from 'typeorm';
import CreateUserDTO from '@modules/users/dtos/CreateUserDTO';
import FindAllProvidersDTO from '@modules/users/dtos/FindAllPRovidersDTO';
import User from '../entities/User';

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async findAllProviders({
    execept_user_id,
  }: FindAllProvidersDTO): Promise<User[]> {
    let users = await this.ormRepository.find();

    if (execept_user_id) {
      users = users.filter(user => user.id !== execept_user_id);
    }

    return users;
  }

  public async create({ name, email, password }: CreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ name, email, password });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}
