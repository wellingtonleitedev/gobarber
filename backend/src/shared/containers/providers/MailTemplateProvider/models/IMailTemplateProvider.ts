import IParseMailProviderDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailProviderDTO): Promise<string>;
}
