import DevolucaoEntity from "../entities/DevolucaoEntity";

type TipoRequestBodyDevolucao = Omit<DevolucaoEntity, "id">; // objeto que enviamos na requisição estamos omitindo o id 

type TipoRequestParamsDevolucao = {  //parametros recebidos dos parametros de requisição
  id?: string;
};

type TipoResponseBodyDevolucao = {
  data?:
    | Pick<DevolucaoEntity, "id" | "data" >    // pegamos "Pick" os campos do Entitye  
    | Pick<DevolucaoEntity, "id" | "data" >[];    // Respostas que podem vir do Body: apenas um objeto, um array de objetos, ou erro
  error?: unknown;
};

export { TipoRequestBodyDevolucao, TipoResponseBodyDevolucao, TipoRequestParamsDevolucao };
