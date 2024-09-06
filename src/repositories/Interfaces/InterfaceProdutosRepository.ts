import produtosEntity from '../../entities/ProdutoEntity.js'

export default interface InterfaceProdutosRepository {
  criaProduto(produtos: produtosEntity): void | Promise<void>;  // recebe um tipo produtos que é uma entity e retorna uma promisse ou mensagem de erro

  listaProdutos(): produtosEntity[] | Promise<produtosEntity[]>; // retorna uma promisse ou array de produtos

  listaProdutoPorId(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  atualizaProduto(
    id: number,
    produtos: produtosEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaProduto(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  
}