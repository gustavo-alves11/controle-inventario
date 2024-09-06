import devolucaoEntity from '../../entities/DevolucaoEntity.js'

export default interface InterfaceDevolucaoRepository {
  criaDevolucao(devolucao: devolucaoEntity): void | Promise<void>;  // recebe um tipo devolucao que é uma entity e retorna uma promisse ou mensagem de erro

  listaDevolucao(): devolucaoEntity[] | Promise<devolucaoEntity[]>; // retorna uma promisse ou array de devolucao

  listaDevolucaoPorId(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  atualizaDevolucao(
    id: number,
    devolucao: devolucaoEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaDevolucao(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  
}
