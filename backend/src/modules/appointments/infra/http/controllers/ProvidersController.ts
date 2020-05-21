import { Response, Request } from 'express';
import { container } from 'tsyringe';
import ListProvidersService from '@modules/appointments/services/listProvidersService';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProvidersService = container.resolve(ListProvidersService);

    const providers = await listProvidersService.execute({ user_id });

    return response.json(providers);
  }
}
