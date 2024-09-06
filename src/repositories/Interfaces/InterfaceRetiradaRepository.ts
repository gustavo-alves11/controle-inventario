import retiradaEntity from '../../entities/RetiradaEntity.js'

export default interface InterfaceRetiradaRepository {
  criaRetirada(retirada: retiradaEntity): void | Promise<void>;  // recebe um tipo retirada que é uma entity e retorna uma promisse ou mensagem de erro

  listaRetiradas(): retiradaEntity[] | Promise<retiradaEntity[]>; // retorna uma promisse ou array de retirada

  listaRetiradaPorId(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  atualizaRetirada(
    id: number,
    retirada: retiradaEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaRetirada(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  
}