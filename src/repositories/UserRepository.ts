import { Repository } from "typeorm";
import UserEntity from "../entities/UserEntity";
import InterfaceUserRepository from "./Interfaces/InterfaceUsuarioRepository";

export default class UserRepository implements InterfaceUserRepository {
  constructor(private repository: Repository<UserEntity>) {}
 
async listaUserPorId(id: number): Promise<{ success: boolean; message?: string; }>  {
    try {
        await this.repository.findOne({ where: { id } });
    } catch (error) {
        console.log(error);
    return {
    success: false,
    message: "Ocorreu um erro ao tentar buscar o usuario.",
    };
    }
}

  criaUser(user: UserEntity): void | Promise<void> {  // a var usuario recebida
    this.repository.save(user);
  }
  async listaUser(): Promise<UserEntity[]> {
    return await this.repository.find();
  }
  async atualizaUser(
    id: number,
    newData: UserEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const usuarioToUpdate = await this.repository.findOne({ where: { id } });

      if (!usuarioToUpdate) {
        return { success: false, message: "admin não encontrado" };
      }

      Object.assign(usuarioToUpdate, newData);

      await this.repository.save(usuarioToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar o usuario.",
      };
    }
  }

  async deletaUser(
    id: number
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const usuarioToRemove = await this.repository.findOne({ where: { id } });

      if (!usuarioToRemove) {
        return { success: false, message: "admin não encontrado" };
      }

      await this.repository.remove(usuarioToRemove);

      return { success: true };
    } catch (error) {
        console.log(error)
      // Se ocorrer um erro inesperado, você pode retornar uma mensagem genérica ou personalizada.
      return {
        success: false,
        message: "Ocorreu um erro ao tentar excluir o usuario.",
      };
    }
  }

}
