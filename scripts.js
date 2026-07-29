const botao = document.querySelector('.botao-gerar');
const textarea = document.querySelector('.caixa-texto');
const resultadoBox = document.querySelector('.resultado');
const blocoCodigo = document.querySelector('.bloco-codigo');
const resultadoCodigo = document.querySelector('.resultado-codigo');

async function gerarCodigo() {
  const textousuario = textarea.value.trim();

  if (!textousuario) return;

  botao.disabled = true;
  botao.textContent = 'Gerando... ⚡';
  resultadoBox.classList.remove('hidden');
  blocoCodigo.textContent = 'Gerando código...';
  resultadoCodigo.srcdoc = '<p style="font-family: Inter, sans-serif; padding: 20px;">Gerando preview...</p>';

  try {
    const resposta = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: textousuario })
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(dados.error || 'Não foi possível gerar o código.');
    }

    const resultado = dados.result;
    blocoCodigo.textContent = resultado;
    resultadoCodigo.srcdoc = resultado;
  } catch (error) {
    blocoCodigo.textContent = `Erro: ${error.message}`;
    resultadoCodigo.srcdoc = '<p style="font-family: Inter, sans-serif; padding: 20px; color: #dc2626;">Não foi possível gerar o preview.</p>';
  } finally {
    botao.disabled = false;
    botao.textContent = 'Gerar Código ⚡';
  }
}

botao.addEventListener('click', gerarCodigo);

textarea.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    gerarCodigo();
  }
});
