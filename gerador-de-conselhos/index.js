// 1. Pegar o botão
const botao = document.getElementById('btn');
// 2. Pegar onde vai mostrar o ID do conselho
const idConselho = document.querySelector('.advice-id');
// 3. Pegar onde vai mostrar a descrição do conselho
const descricao = document.querySelector('.advice-description');

// 4. Quando clicar no botão...
botao.addEventListener('click', async () => {
    const dados = await buscarConselho(); // 5. Buscar os dados da API

    if (dados) { // 6. Se conseguiu dados...
        mostrarDados(dados); // 7. Mostrar na tela
    }
});

// 8. Função para buscar conselho da API
async function buscarConselho() {
    const url = "https://api.adviceslip.com/advice";

    try {
        const resposta = await fetch(url); // Tenta buscar

        if (!resposta.ok) throw new Error("Erro na API"); // Se não der certo, lança erro

        return await resposta.json(); // Se der certo, transforma em objeto JavaScript
    } catch (error) {
        console.error("Erro ao buscar conselho", error); // Se der erro, mostra no console
    }
}

// 9. Função para mostrar os dados na tela
function mostrarDados(dados) {
    const { id, advice } = dados.slip; // Pega o id e o texto

    idConselho.innerText = `Advice #${id}`; // Atualiza o título
    descricao.innerText = `"${advice}"`; // Atualiza o parágrafo
}