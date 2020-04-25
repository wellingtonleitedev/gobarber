import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';
import User from '../models/user.model';
import AppError from '../errors/appError';

interface RequestDto {
  email: string;
  password: string;
}
interface ResponseDto {
  user: User;
  token: string;
}
class CreateSessionService {
  public async execute({ email, password }: RequestDto): Promise<ResponseDto> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError('Incorrect email/password not compatible', 401);
    }

    const passwordChecked = await compare(password, user.password);

    if (!passwordChecked) {
      throw new AppError('Incorrect email/password not compatible', 401);
    }

    delete user.password;

    const token = await sign({}, authConfig.secret, {
      subject: user.id,
      expiresIn: authConfig.expiresIn,
    });

    return { user, token };
  }
}

export default CreateSessionService;
