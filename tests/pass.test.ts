import { senhaForte } from "../src/pass/senha";

describe("Testes de validação de senha", () => {
    it("Senha é válida, retorna true", () => {
        const pass = "1senhaforte"
        expect(senhaForte(pass)).toBeTruthy();
    });
    it("Senha sem a quantidade mínima de caracteres", () => {
        const pass = "se1nha"
        expect(senhaForte(pass)).toBeFalsy();
    });
    it("Senha sem pelo menos um número", () => {
        const pass = "senhaforte"
        expect(senhaForte(pass)).toBeFalsy();
    });
});