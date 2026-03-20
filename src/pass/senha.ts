import { temNumero } from "../pass/validanumero";

export function senhaForte(senha: string): boolean {
  let valido: boolean = false;
  let validaNumero: boolean = temNumero(senha);
  if (senha.length >= 8 && validaNumero) {
    valido = true;
  } 
  return valido;
}