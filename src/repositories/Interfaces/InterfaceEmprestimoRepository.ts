import emprestimoEntity from '../../entities/EmprestimoEntity.js'

export default interface InterfaceEmprestimoRepository {
  criaEmprestimo(emprestimo: emprestimoEntity): void | Promise<void>;  // recebe um tipo emprestimo que é uma entity e retorna uma promisse ou mensagem de erro

  listaEmprestimos(): emprestimoEntity[] | Promise<emprestimoEntity[]>; // retorna uma promisse ou array de emprestimo

  listaEmprestimoPorId(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  atualizaEmprestimo(
    id: number,
    emprestimo: emprestimoEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaEmprestimo(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  
}
