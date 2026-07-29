require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.3-70b-versatile';

if (!GROQ_API_KEY) {
  console.warn('⚠️ GROQ_API_KEY não configurada. Crie um arquivo .env antes de gerar código.');
}

app.use(express.json({ limit: '10kb' }));
app.use(express.static(__dirname));

app.post('/api/generate', async (req, res) => {
  try {
    if (!GROQ_API_KEY) {
      return res.status(500).json({
        error: 'A chave da API não foi configurada no servidor.'
      });
    }

    const prompt = typeof req.body?.prompt === 'string' ? req.body.prompt.trim() : '';

    if (!prompt) {
      return res.status(400).json({ error: 'Descreva o código que deseja gerar.' });
    }

    if (prompt.length > 4000) {
      return res.status(400).json({ error: 'O prompt deve ter no máximo 4000 caracteres.' });
    }

    const response = await fetch(GROQ_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.2,
        messages: [
          {
            role: 'system',
            content:
              'Você é um gerador de código HTML e CSS. Responda SOMENTE com código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate.'
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Erro retornado pela Groq:', data);
      return res.status(response.status).json({
        error: data?.error?.message || 'A API de IA retornou um erro.'
      });
    }

    const result = data?.choices?.[0]?.message?.content;

    if (!result) {
      return res.status(502).json({ error: 'A IA não retornou código válido.' });
    }

    return res.json({ result });
  } catch (error) {
    console.error('Erro no servidor:', error);
    return res.status(500).json({ error: 'Não foi possível gerar o código agora.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 CSS IA rodando em http://localhost:${PORT}`);
});
