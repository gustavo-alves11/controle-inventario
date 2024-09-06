import { Repository } from "typeorm";
import AdminEntity from "../entities/AdminEntity";
import InterfaceAdminRepository from "./Interfaces/InterfaceAdminRepository";

export default class AdminRepository implements InterfaceAdminRepository {
  constructor(private repository: Repository<AdminEntity>) {}
    
async listaAdminPorId(id: number): Promise<{ success: boolean; message?: string; }>  {
    try {
        await this.repository.findOne({ where: { id } });
    } catch (error) {
        console.log(error);
    return {
    success: false,
    message: "Ocorreu um erro ao tentar buscar o admin.",
    };
    }
}

  criaAdmin(admin: AdminEntity): void | Promise<void> {  // a var admin recebida
    this.repository.save(admin);
  }
  async listaAdmins(): Promise<AdminEntity[]> {
    return await this.repository.find();
  }
  async atualizaAdmin(
    id: number,
    newData: AdminEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const adminToUpdate = await this.repository.findOne({ where: { id } });

      if (!adminToUpdate) {
        return { success: false, message: "admin não encontrado" };
      }

      Object.assign(adminToUpdate, newData);

      await this.repository.save(adminToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar o admin.",
      };
    }
  }

  async deletaAdmin(
    id: number
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const adminToRemove = await this.repository.findOne({ where: { id } });

      if (!adminToRemove) {
        return { success: false, message: "admin não encontrado" };
      }

      await this.repository.remove(adminToRemove);

      return { success: true };
    } catch (error) {
        console.log(error)
      // Se ocorrer um erro inesperado, você pode retornar uma mensagem genérica ou personalizada.
      return {
        success: false,
        message: "Ocorreu um erro ao tentar excluir o admin.",
      };
    }
  }

}
