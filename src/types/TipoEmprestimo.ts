import EmprestimoEntity from "../entities/EmprestimoEntity";

type TipoRequestBodyEmprestimo = Omit<EmprestimoEntity, "id">; // objeto que enviamos na requisição estamos omitindo o id 

type TipoRequestParamsEmprestimo = {  //parametros recebidos dos parametros de requisição
  id?: string;
};

type TipoResponseBodyEmprestimo = {
  data?:
    | Pick<EmprestimoEntity, "id" | "data" | "status" >    // pegamos "Pick" os campos do Entitye  
    | Pick<EmprestimoEntity, "id" | "data" | "status">[];    // Respostas que podem vir do Body: apenas um objeto, um array de objetos, ou erro
  error?: unknown;
};

export { TipoRequestBodyEmprestimo, TipoResponseBodyEmprestimo, TipoRequestParamsEmprestimo };
