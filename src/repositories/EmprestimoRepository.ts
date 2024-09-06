import { Repository } from "typeorm";
import EmprestimoEntity from "../entities/EmprestimoEntity";
import InterfaceEmprestimoRepository from "./Interfaces/InterfaceEmprestimoRepository";

export default class EmprestimoRepository implements InterfaceEmprestimoRepository {
  constructor(private repository: Repository<EmprestimoEntity>) {}
   
   
async listaEmprestimoPorId(id: number): Promise<{ success: boolean; message?: string; }>  {
    try {
        await this.repository.findOne({ where: { id } });
    } catch (error) {
        console.log(error);
    return {
    success: false,
    message: "Ocorreu um erro ao tentar buscar o emprestimo.",
    };
    }
}

    criaEmprestimo(emprestimo: EmprestimoEntity): void | Promise<void> {  // a var emprestimo recebida
    this.repository.save(emprestimo);
  }
  async listaEmprestimos(): Promise<EmprestimoEntity[]> {
    return await this.repository.find();
  }
  async atualizaEmprestimo(
    id: number,
    newData: EmprestimoEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const emprestimoToUpdate = await this.repository.findOne({ where: { id } });

      if (!emprestimoToUpdate) {
        return { success: false, message: "emprestimo não encontrado" };
      }

      Object.assign(emprestimoToUpdate, newData);

      await this.repository.save(emprestimoToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar o emprestimo.",
      };
    }
  }

  async deletaEmprestimo(
    id: number
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const emprestimoToRemove = await this.repository.findOne({ where: { id } });

      if (!emprestimoToRemove) {
        return { success: false, message: "emprestimo não encontrada" };
      }

      await this.repository.remove(emprestimoToRemove);

      return { success: true };
    } catch (error) {
        console.log(error)
      // Se ocorrer um erro inesperado, você pode retornar uma mensagem genérica ou personalizada.
      return {
        success: false,
        message: "Ocorreu um erro ao tentar excluir o emprestimo.",
      };
    }
  }

}
