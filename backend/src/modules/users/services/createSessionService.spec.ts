import AppError from '@shared/errors/appError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateSessionService from './createSessionService';
import CreateUserService from './createUserService';
import FakeBCryptHashProvider from '../providers/fakes/FakeBCryptHashProvider';

describe('CreateSession', () => {
  it('should be able to authenticate user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeBCryptHashProvider = new FakeBCryptHashProvider();

    const createSessionService = new CreateSessionService(
      fakeUsersRepository,
      fakeBCryptHashProvider,
    );

    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeBCryptHashProvider,
    );

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    const response = await createSessionService.execute({
      email: 'johndoe@email.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate user without non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeBCryptHashProvider = new FakeBCryptHashProvider();

    const createSessionService = new CreateSessionService(
      fakeUsersRepository,
      fakeBCryptHashProvider,
    );

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
      createSessionService.execute({
        email: 'johndoetest@email.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate user with wrong password', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeBCryptHashProvider = new FakeBCryptHashProvider();

    const createSessionService = new CreateSessionService(
      fakeUsersRepository,
      fakeBCryptHashProvider,
    );

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
      createSessionService.execute({
        email: 'johndoe@email.com',
        password: '123455',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
