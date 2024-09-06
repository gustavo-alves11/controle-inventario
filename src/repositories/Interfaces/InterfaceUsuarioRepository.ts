import usuarioEntity from '../../entities/UserEntity.js'

export default interface InterfaceUsuarioRepository {
  criaUser(usuario: usuarioEntity): void | Promise<void>;  // recebe um tipo usuario que é uma entity e retorna uma promisse ou mensagem de erro

  listaUser(): usuarioEntity[] | Promise<usuarioEntity[]>; // retorna uma promisse ou array de usuario

  listaUserPorId(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  atualizaUser(
    id: number,
    usuario: usuarioEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaUser(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  
}