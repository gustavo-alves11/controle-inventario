import RetiradaEntity from "../entities/RetiradaEntity";

type TipoRequestBodyRetirada = Omit<RetiradaEntity, "id">; // objeto que enviamos na requisição estamos omitindo o id 

type TipoRequestParamsRetirada = {  //parametros recebidos dos parametros de requisição
  id?: string;
};

type TipoResponseBodyRetirada = {
  data?:
    | Pick<RetiradaEntity, "id" | "data"  >    // pegamos "Pick" os campos do Entitye  
    | Pick<RetiradaEntity, "id" | "data"  >[];    // Respostas que podem vir do Body: apenas um objeto, um array de objetos, ou erro
  error?: unknown;
};

export { TipoRequestBodyRetirada, TipoResponseBodyRetirada, TipoRequestParamsRetirada };
