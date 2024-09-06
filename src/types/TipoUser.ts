import UserEntity from "../entities/UserEntity";

type TipoRequestBodyUser = Omit<UserEntity, "id">; // objeto que enviamos na requisição estamos omitindo o id 

type TipoRequestParamsUser = {  //parametros recebidos dos parametros de requisição
  id?: string;
};

type TipoResponseBodyUser = {
  data?:
    | Pick<UserEntity, "id" | "nome" | "cpf" >    // pegamos "Pick" os campos do Entitye  
    | Pick<UserEntity, "id" | "nome" | "cpf">[];    // Respostas que podem vir do Body: apenas um objeto, um array de objetos, ou erro
  error?: unknown;
};

export { TipoRequestBodyUser, TipoResponseBodyUser, TipoRequestParamsUser };
