import { injectable, inject } from 'tsyringe';
import IMailProvider from '@shared/containers/providers/MailProvider/models/IMailProvider';
import AppError from '@shared/errors/appError';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';

interface RequestDto {
  email: string;
}

@injectable()
export default class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('MailProvider') private mailProvider: IMailProvider,
    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  public async execute({ email }: RequestDto): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exist.');
    }

    await this.userTokensRepository.generate(user.id);

    this.mailProvider.sendMail(email, 'E-mail de recuperação de senha');
  }
}
