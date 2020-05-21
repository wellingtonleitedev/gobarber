import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './listProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProvidersService: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProvidersService = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list all providers', async () => {
    const firstUser = await fakeUsersRepository.create({
      name: 'John First',
      email: 'johnfirst@email.com',
      password: '123456',
    });

    const secondUser = await fakeUsersRepository.create({
      name: 'John Second',
      email: 'johnsecond@email.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    const providers = await listProvidersService.execute({ user_id: user.id });

    expect(providers).toEqual([firstUser, secondUser]);
  });
});
