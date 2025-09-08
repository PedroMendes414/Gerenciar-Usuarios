const usuarios = [
    'Matheus',
    'Lucas',
    'Marcos',
    'João'];

function listarUsuarios() {
    return usuarios
};

function adicionarNovoUsuario(nome) {
    usuarios.push(nome)
}

module.exports = {
    listarUsuarios,
    adicionarNovoUsuario
};
