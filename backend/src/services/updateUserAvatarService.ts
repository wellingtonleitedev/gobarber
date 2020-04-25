import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import User from '../models/user.model';
import uploadConfig from '../config/upload';
import AppError from '../errors/appError';

interface RequestDto {
  user_id: string;
  filename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, filename }: RequestDto): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      where: { user_id },
    });

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    delete user.password;

    const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
    const userAvatarFileExist = fs.promises.stat(userAvatarFilePath);

    if (userAvatarFileExist) {
      fs.promises.unlink(userAvatarFilePath);
    }

    user.avatar = filename;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
