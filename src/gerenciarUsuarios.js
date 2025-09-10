const usuarios = [
    {
        nome: 'Matheus',
        email: 'matheus@gmail.com.br'
    },
    {
        nome: 'Marcos',
        email: 'marcos@email.com.br'
    },
    {
        nome: 'Lucas',
        email: 'lucas@gmail.com.br'
    },
    {
        nome: 'João',
        email: 'joao@yahoo.com.br'
    }
];

function listarUsuarios() {
    return usuarios
};

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario)
};

module.exports = {
    listarUsuarios,
    adicionarNovoUsuario
};
