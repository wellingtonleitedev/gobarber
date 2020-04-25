import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/user.model';
import AppError from '../errors/appError';

interface RequestDto {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: RequestDto): Promise<User> {
    const userRepository = getRepository(User);

    const findUser = await userRepository.findOne({
      where: { email },
    });

    if (findUser) {
      throw new AppError('E-mail address already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);

    delete user.password;

    return user;
  }
}

export default CreateUserService;
