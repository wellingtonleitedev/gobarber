import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/appError';
import { injectable, inject } from 'tsyringe';
import IStorageProvider from '@shared/containers/providers/StorageProvider/models/IStorageProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface RequestDto {
  user_id: string;
  filename: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('StorageProvider') private storageProvider: IStorageProvider,
  ) {}

  public async execute({ user_id, filename }: RequestDto): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }

    user.avatar = await this.storageProvider.saveFile(filename);

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
