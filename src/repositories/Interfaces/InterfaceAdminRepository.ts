import adminEntity from '../../entities/AdminEntity.js'

export default interface InterfaceAdminRepository {
  criaAdmin(admin: adminEntity): void | Promise<void>;  // recebe um tipo admin que é uma entity e retorna uma promisse ou mensagem de erro

  listaAdmins(): adminEntity[] | Promise<adminEntity[]>; // retorna uma promisse ou array de admin

  listaAdminPorId(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  atualizaAdmin(
    id: number,
    admin: adminEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaAdmin(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  
}
