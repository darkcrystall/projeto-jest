export function temNumero(senha: string): boolean {
  let temNumero: boolean = false;
  const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < senha.length; i++) {
    const caractere = senha[i];
    for (let i = 0; i < numeros.length; i++) {
      const numero = numeros[i];
      if (caractere === numero) {
        temNumero = true;
        return temNumero;
      } else {
        temNumero = false;
      }
    }
  }
  return temNumero;
}