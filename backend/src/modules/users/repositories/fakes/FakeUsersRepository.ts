import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import CreateUserDTO from '@modules/users/dtos/CreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import { uuid } from 'uuidv4';
import FindAllProvidersDTO from '@modules/users/dtos/FindAllPRovidersDTO';

export default class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(findUser => findUser.id === id);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(findUser => findUser.email === email);

    return user;
  }

  public async findAllProviders({
    execept_user_id,
  }: FindAllProvidersDTO): Promise<User[]> {
    let { users } = this;

    if (execept_user_id) {
      users = users.filter(user => user.id !== execept_user_id);
    }

    return users;
  }

  public async create({ name, email, password }: CreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid(), name, email, password });

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    let findedUser = this.users.find(findUser => findUser.id === user.id);

    findedUser = user;

    return findedUser;
  }
}
