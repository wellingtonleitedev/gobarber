import AppError from '@shared/errors/appError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './createUserService';
import FakeBCryptHashProvider from '../providers/fakes/FakeBCryptHashProvider';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeBCryptHashProvider = new FakeBCryptHashProvider();

    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeBCryptHashProvider,
    );

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeBCryptHashProvider = new FakeBCryptHashProvider();

    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeBCryptHashProvider,
    );

    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    expect(
      createUserService.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
