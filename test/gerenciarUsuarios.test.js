const {listarUsuarios, adicionarNovoUsuario} = require('../src/gerenciarUsuarios');
const {expect} = require ('chai');


describe('Deve realizar testes relacionados ao gerenciamento de usuarios', function(){
    it('Adicionar usuario com sucesso', function(){
        // 1. Adicionar um novo nome da lista de usuários
        adicionarNovoUsuario('Pedro');
        // 2. Retornar a lista de usuarios na caixa da lista de usuários
        const listaDeUsarios = listarUsuarios();
        // 3. Comparar se o novo nome está no fim da lista de usuários
        expect(listaDeUsarios.at(-1)).to.equal('Pedro');
    });
    it('Adicionar múltiplos usuários com sucesso', function() {
        // Adiciona vários usuários
        adicionarNovoUsuario('Ana');
        adicionarNovoUsuario('Bruno');
        adicionarNovoUsuario('Carla');
        // Obtém a lista atualizada
        const listaDeUsuarios = listarUsuarios();
        // Verifica se os usuários adicionados estão no final da lista, na ordem correta
        expect(listaDeUsuarios.at(-3)).to.equal('Ana');
        expect(listaDeUsuarios.at(-2)).to.equal('Bruno');
        expect(listaDeUsuarios.at(-1)).to.equal('Carla');
    });
    
});