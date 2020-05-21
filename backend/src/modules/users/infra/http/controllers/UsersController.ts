import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/createUserService';
import UpdateProfileService from '@modules/users/services/updateProfileService';
import ShowProfileService from '@modules/users/services/showProfileService';

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showProfileService = container.resolve(ShowProfileService);

    const user = await showProfileService.execute({
      user_id: request.user.id,
    });

    delete user?.password;

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute({ name, email, password });

    delete user?.password;

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, old_password, password } = request.body;

    const updateProfileService = container.resolve(UpdateProfileService);

    const user = await updateProfileService.execute({
      user_id: request.user.id,
      name,
      email,
      old_password,
      password,
    });

    return response.json(user);
  }
}
