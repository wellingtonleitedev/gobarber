interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseMailProviderDTO {
  file: string;
  variables: ITemplateVariables;
}
