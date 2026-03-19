import { temNumero } from "../pass/validanumero";

export function senhaForte(senha: string): boolean {
  let valido: boolean;
  let validaNumero: boolean = temNumero(senha);
  if (senha.length >= 8 && validaNumero) {
    valido = true;
  } else {
    valido = false;
  }
  return valido;
}