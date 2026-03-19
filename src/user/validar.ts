import { Usuario } from './usuario';

export function validarUsuario(usuario: Usuario): boolean {
    if (usuario.nome === "" || usuario.idade < 18) {
        return false;
    } else {
        return true;
    }
}