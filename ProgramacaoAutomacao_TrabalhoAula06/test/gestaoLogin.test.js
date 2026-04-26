import {  usuarios, validarLogin} from '../src/gestaoLogin.js';
import assert from 'node:assert';

describe('Teste de Login', () => {
    it('Deve realizar login com sucesso', () => {
        const resultado = validarLogin('silva@gestaoteste.com', 'senha123');
        assert.equal(resultado, 'Login realizado com sucesso');
    }   
    );  
    it('Deve informar que as credenciais expiraram', () => {
        const resultado = validarLogin('souza@gestaoteste.com', 'senha456');    
        assert.equal(resultado, 'Renove suas credenciais');
    }
    );
    it('Deve informar que o usuário não foi encontrado', () => {
        const resultado = validarLogin('nao@existe.com', 'senha789');
        assert.equal(resultado, 'Usuario não encontrado');
    });
    it('Deve informar que a senha está incorreta', () => {
        const resultado = validarLogin('silva@gestaoteste.com', 'senha incorreta');
        assert.equal(resultado, 'Senha incorreta');
    });
});