const usuarios = [
    {
        id: 1,
        nome: 'João Silva',
        email: 'silva@gestaoteste.com',
        senha: 'senha123',
        expirado: false            
    },
    {
        id: 2,
        nome: 'Maria Souza',
        email: 'souza@gestaoteste.com',
        senha: 'senha456',
        expirado: true
    },
    {
        id: 3,
        nome: 'Carlos Oliveira',
        email: 'oliveira@gestaoteste.com',
        senha: 'senha789',
        expirado: false            
    },
    {
        id: 4,
        nome: 'Evandro Moreira',
        email: 'moreira@gestaoteste.com',
        senha: 'senha111',
        expirado: false            
    }
]

function fazerLogin(email, senha) {

    for (let i = 0; i < usuarios.length; i++) {
        
        if (usuarios[i].email === email) {
            
            if (usuarios[i].senha !== senha) {
                return 'Senha incorreta';
            } else if (usuarios[i].expirado) {
                return 'Renove suas credenciais';
            } else {
                return 'Login realizado com sucesso';
            }
        }
    }

    return 'Usuario não encontrado';
}

export { usuarios, fazerLogin as validarLogin };