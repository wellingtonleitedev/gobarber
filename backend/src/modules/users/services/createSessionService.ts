import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth';
import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/appError';
import { injectable, inject } from 'tsyringe';
import { classToClass } from 'class-transformer';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/models/IHashProvider';

interface RequestDto {
  email: string;
  password: string;
}

interface ResponseDto {
  user: User;
  token: string;
}

@injectable()
export default class CreateSessionService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('HashProvider') private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: RequestDto): Promise<ResponseDto> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password not compatible', 401);
    }

    const passwordChecked = await this.hashProvider.compare(
      password,
      user.password,
    );

    if (!passwordChecked) {
      throw new AppError('Incorrect email/password not compatible', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user: classToClass(user), token };
  }
}
