let botao = document.querySelector(".botao-gerar")
let textarea = document.querySelector(".caixa-texto")
let resultadoBox = document.querySelector(".resultado")
let blocoCodigo = document.querySelector(".bloco-codigo")
let resultadoCodigo = document.querySelector(".resultado-codigo")

let chave = "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"
let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function gerarCodigo() {

    let textousuario = textarea.value.trim()

    if (textousuario === "") return

    resultadoBox.classList.remove("hidden")

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + chave
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: "Você é um gerador de código HTML e CSS. Responda SOMENTE com código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate."
                },
                {
                    role: "user",
                    content: textousuario
                }
            ]
        })
    })

    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    blocoCodigo.textContent = resultado
    resultadoCodigo.srcdoc = resultado
}

botao.addEventListener("click", gerarCodigo)

textarea.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault()
        gerarCodigo()
    }
})