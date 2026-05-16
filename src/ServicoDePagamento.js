export class ServicoDePagamento {
    constructor() {
        this.pagamentos = []
    }

    pagar(codigoBarras, empresa, valor) {
        let categoria = valor > 100.00 ? 'cara' : 'padrao';

        const novoPagamento = {
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        };

        this.pagamentos.push(novoPagamento);
    }

    consultarUltimoPagamento() {
        return this.pagamentos.at(-1);
    }
}