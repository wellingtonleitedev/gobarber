import AppError from '@shared/errors/appError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './createUserService';
import FakeBCryptHashProvider from '../providers/fakes/FakeBCryptHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeBCryptHashProvider: FakeBCryptHashProvider;
let createUserService: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeBCryptHashProvider = new FakeBCryptHashProvider();

    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeBCryptHashProvider,
    );
  });

  it('should be able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user', async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await expect(
      createUserService.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
