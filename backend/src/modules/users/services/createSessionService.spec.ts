import AppError from '@shared/errors/appError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateSessionService from './createSessionService';
import CreateUserService from './createUserService';
import FakeBCryptHashProvider from '../providers/fakes/FakeBCryptHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeBCryptHashProvider: FakeBCryptHashProvider;
let createSessionService: CreateSessionService;
let createUserService: CreateUserService;

describe('CreateSession', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeBCryptHashProvider = new FakeBCryptHashProvider();

    createSessionService = new CreateSessionService(
      fakeUsersRepository,
      fakeBCryptHashProvider,
    );

    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeBCryptHashProvider,
    );
  });

  it('should be able to authenticate user', async () => {
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
    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await expect(
      createSessionService.execute({
        email: 'johndoetest@email.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate user with wrong password', async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await expect(
      createSessionService.execute({
        email: 'johndoe@email.com',
        password: '123455',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
