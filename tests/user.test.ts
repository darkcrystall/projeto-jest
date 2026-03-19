import { Usuario } from "../src/user/usuario";
import { validarUsuario } from "../src/user/validar";

describe("Testes de validação de usuário", () => {
    it("Usuário é válido, retorna true", () => {
        const user: Usuario = {
            nome: "Usuario",
            idade: 18
        }
        expect(validarUsuario(user)).toBeTruthy();
    });
    it("Usuário com campo vazio no nome", () => {
        const user: Usuario = {
            nome: "",
            idade: 18
        }
        expect(validarUsuario(user)).toBeFalsy();
    });
    it("Usuário não tem idade mínima", () => {
        const user: Usuario = {
            nome: "Usuario",
            idade: 10
        }
        expect(validarUsuario(user)).toBeFalsy();
    });
});