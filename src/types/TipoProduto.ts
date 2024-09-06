import ProdutoEntity from "../entities/ProdutoEntity";

type TipoRequestBodyProduto = Omit<ProdutoEntity, "id">; // objeto que enviamos na requisição estamos omitindo o id 

type TipoRequestParamsProduto = {  //parametros recebidos dos parametros de requisição
  id?: string;
};

type TipoResponseBodyProduto = {
  data?:
    | Pick<ProdutoEntity, "id" | "marca" | "modelo"  | "descricao" | "dataDeAquisicao" | "idInventario" | "numSerie" >    // pegamos "Pick" os campos do Entitye  
    | Pick<ProdutoEntity, "id" | "marca" | "modelo"  | "descricao" | "dataDeAquisicao" | "idInventario" | "numSerie" >[];    // Respostas que podem vir do Body: apenas um objeto, um array de objetos, ou erro
  error?: unknown;
};

export { TipoRequestBodyProduto, TipoResponseBodyProduto, TipoRequestParamsProduto };
