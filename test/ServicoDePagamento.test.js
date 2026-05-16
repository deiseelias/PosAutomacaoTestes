import { ServicoDePagamento } from '../src/ServicoDePagamento.js';
import assert from 'node:assert/strict';

describe('Testes do Serviço de Pagamento', function () {
    it('Registrar pagamento maior que 100.00 como categoria "cara"', function() {
        const servico = new ServicoDePagamento();
        const valorTeste = 150.00
        
        servico.pagar('123-456', 'Empresa Um', valorTeste);
        const resultado = servico.consultarUltimoPagamento();

        assert.equal(resultado.categoria, 'cara');
        assert.equal(resultado.valor, valorTeste)
    })
    it('Registrar um pagamento menor ou igual a 100 como categoria "padrão"', function () {
        const servico = new ServicoDePagamento();
        const valorTeste = 99.00

        servico.pagar('789-012', 'Empresa Dois', valorTeste)
        const resultado = servico.consultarUltimoPagamento();

        assert.equal(resultado.categoria, 'padrao')
        assert.equal(resultado.valor, valorTeste)
    })
     it('Retornar o último pagamento realizado', function () {
        const servico = new ServicoDePagamento();
        servico.pagar('001', 'Empresa Um', 10.00);
        servico.pagar('002', 'Empresa Dois', 20.00); 

        const resultado = servico.consultarUltimoPagamento();
        assert.equal(resultado.empresa, 'Empresa Dois');
    });
})