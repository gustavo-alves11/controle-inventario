import AdminEntity from "../entities/AdminEntity";

type TipoRequestBodyAdmin = Omit<AdminEntity, "id">;

type TipoRequestParamsAdmin = {
  id?: string;
};

type TipoResponseBodyAdmin = {
  data?:
    | Pick<AdminEntity, "id" | "nome" | "cpf" >
    | Pick<AdminEntity, "id" | "nome" | "cpf">[];
  error?: unknown;
};

export { TipoRequestBodyAdmin, TipoResponseBodyAdmin, TipoRequestParamsAdmin };
