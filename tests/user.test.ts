import { Usuario } from "../src/user/usuario";
import { validarUsuario } from "../src/user/validar";

describe("Testes de validação de usuário", () => {
    test("Usuário é válido, retorna true", () => {
        const user: Usuario = {
            nome: "Usuario",
            idade: 18
        }
        expect(validarUsuario(user)).toBeTruthy();
    });
    test("Usuário com campo vazio no nome", () => {
        const user: Usuario = {
            nome: "",
            idade: 18
        }
        expect(validarUsuario(user)).toBeFalsy();
    });
    test("Usuário não tem idade mínima", () => {
        const user: Usuario = {
            nome: "Usuario",
            idade: 10
        }
        expect(validarUsuario(user)).toBeFalsy();
    });
});