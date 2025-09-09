document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  if (usuario === 'admim' && senha === 'Mm102030') {
    // Login correto → redireciona
    window.location.href = 'painel.html';
  } else {
    // Erro
    alert('Usuário ou senha inválidos!');
  }
});
