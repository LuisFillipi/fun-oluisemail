function validaFormulario() {
    const email = document.getElementById('email').value;
    const resultado = document.getElementById('resultado');

    if (nome === '' || email === '' || senha === '' || confirmSenha === '') {
        resultado.textContent = 'Por favor, preencha todos os campos.';
        resultado.className = 'erro';
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        resultado.textContent = 'Por favor, insira um e-mail válido.';
        resultado.className = 'erro';
        return;
    }
    
    if (senha.length < 8) {
        resultado.textContent = 'A senha deve ter no mínimo 8 caracteres.';
        resultado.className = 'erro';
        return;
    }
    
    if (confirmSenha !== senha) {
        resultado.textContent = 'As senhas não coincidem.';
        resultado.className = 'erro';
        return;
    }
}