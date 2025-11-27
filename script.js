document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let pontos = {
        ds: 0,
        adm: 0,
        ac: 0
    };

    // Contar respostas
    for (let i = 1; i <= 10; i++) {
        let resposta = document.querySelector(`input[name="q${i}"]:checked`).value;
        pontos[resposta]++;
    }

    // Identificar maior pontuação
    let maiorPontuacao = Math.max(pontos.ds, pontos.adm, pontos.ac);
    let resultadoFinal = "";
    let resumoProfissao = "";

    if (pontos.ds === maiorPontuacao) {
        resultadoFinal = "<h2>Você combina com Desenvolvimento de Sistemas!</h2>";
        resumoProfissao = `
            <p><strong>Resumo da profissão:</strong><br>
            O técnico em Desenvolvimento de Sistemas atua na criação de sites, aplicativos, softwares e bancos de dados.
            Trabalha com lógica de programação, tecnologia e solução de problemas. É uma área em expansão e com alta demanda.</p>
        `;
    } else if (pontos.adm === maiorPontuacao) {
        resultadoFinal = "<h2>Você combina com Administração!</h2>";
        resumoProfissao = `
            <p><strong>Resumo da profissão:</strong><br>
            O técnico em Administração atua em empresas de todos os setores, lidando com organização, gestão, liderança,
            atendimento, controle financeiro e processos internos. É uma profissão versátil e muito procurada pelo mercado.</p>
        `;
    } else {
        resultadoFinal = "<h2>Você combina com Análises Clínicas!</h2>";
        resumoProfissao = `
            <p><strong>Resumo da profissão:</strong><br>
            O técnico em Análises Clínicas trabalha em laboratórios realizando exames, análises, coletas e seguindo regras de biossegurança.
            É uma profissão essencial na área da saúde, ideal para quem é detalhista e gosta de biologia e química.</p>
        `;
    }

    // Mostrar resultado
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = resultadoFinal;
    divResultado.classList.remove("hidden");

    // Mostrar resumo da profissão
    let divResumo = document.getElementById("resumo");
    divResumo.innerHTML = resumoProfissao;
    divResumo.classList.remove("hidden");

    // Rolar até o final
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});
