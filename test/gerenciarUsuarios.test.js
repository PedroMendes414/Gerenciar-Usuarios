const {listarUsuarios, adicionarNovoUsuario} = require('../src/gerenciarUsuarios');
const {expect} = require ('chai');


describe('Deve realizar testes relacionados ao gerenciamento de usuarios', function(){
    it('Adicionar usuario com sucesso', function(){
        // 1. Adicionar um novo nome da lista de usuários
        adicionarNovoUsuario({
            nome:'Roberto', 
            email:'Roberto@email.com.br'
        });
        // 2. Retornar a lista de usuarios na caixa da lista de usuários
        const listaDeUsarios = listarUsuarios();
        // 3. Comparar se o novo nome está no fim da lista de usuários
       // expect(listaDeUsarios.at(-1).nome).to.equal('Eduardo');
        //expect(listaDeUsarios.at(-1).email).to.equal('Eduardo@email.com.br')
        expect(listaDeUsarios.at(-1)).to.eql({
            nome:'Roberto', 
            email:'Roberto@email.com.br'
        });
    });
});