import AppError from '@shared/errors/appError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './showProfileService';

let usersRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe('ShowProfile', () => {
  beforeEach(() => {
    usersRepository = new FakeUsersRepository();

    showProfileService = new ShowProfileService(usersRepository);
  });

  it('should be able show profile', async () => {
    const user = await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email',
      password: '123456',
    });

    const profile = await showProfileService.execute({ user_id: user.id });

    expect(profile.name).toBe('John Doe');
  });

  it('should not be able show profile', async () => {
    await expect(
      showProfileService.execute({
        user_id: 'non-existing-user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
