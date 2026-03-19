import { senhaForte } from "../src/pass/senha";

describe("Testes de validação de senha", () => {
    test("Senha é válida, retorna true", () => {
        const pass = "1senhaforte"
        expect(senhaForte(pass)).toBeTruthy();
    });
    test("Senha sem a quantidade mínima de caracteres", () => {
        const pass = "se1nha"
        expect(senhaForte(pass)).toBeFalsy();
    });
    test("Senha sem pelo menos um número", () => {
        const pass = "senhaforte"
        expect(senhaForte(pass)).toBeFalsy();
    });
});