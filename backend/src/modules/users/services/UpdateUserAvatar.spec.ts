import FakeStorageProvider from '@shared/containers/providers/StorageProvider/fakes/FakeStorageProvider';
import AppError from '@shared/errors/appError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from './UpdateUserAvatarService';

let fakeUsersRepository: FakeUsersRepository;
let fakeStorageProvider: FakeStorageProvider;
let updateUserAvatarService: UpdateUserAvatarService;

describe('UpdateUserAvatar', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeStorageProvider = new FakeStorageProvider();

    updateUserAvatarService = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to update user avatar', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      filename: 'perfil.png',
    });

    expect(user.avatar).toBe('perfil.png');
  });

  it('should not be able to update user avatar from a non existing user', async () => {
    await expect(
      updateUserAvatarService.execute({
        user_id: 'non-existing-user',
        filename: 'perfil.png',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete old avatar on updating new one', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    await updateUserAvatarService.execute({
      user_id: user.id,
      filename: 'perfil.png',
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      filename: 'avatar.png',
    });

    expect(deleteFile).toBeCalledWith('perfil.png');
    expect(user.avatar).toBe('avatar.png');
  });
});
