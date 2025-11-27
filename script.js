// --- COFRE DIGITAL (CRIPTO SIMULADA BASE64) ---
function criptografarMensagem() {
    let msg = document.getElementById("mensagem").value;

    if (!msg.trim()) {
        alert("Digite alguma mensagem!");
        return;
    }

    let criptografado = btoa(msg); // Converte para Base64 (simulação)

    document.getElementById("resultadoCripto").value = criptografado;
}



// --- VERIFICADOR DE SENHA FORTE ---
function avaliarSenha() {
    let senha = document.getElementById("senhaInput").value;
    let nivel = document.getElementById("nivel");
    let msg = document.getElementById("mensagemForca");

    let forca = 0;

    if (senha.length > 6) forca++;
    if (senha.length > 10) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[^A-Za-z0-9]/.test(senha)) forca++;

    let cores = ["red", "orange", "yellow", "lightgreen", "green"];
    let textos = [
        "Muito Fraca 😬",
        "Fraca 😕",
        "Razoável 🙂",
        "Forte 💪",
        "Muito Forte 🔥"
    ];

    nivel.style.width = (forca * 20) + "%";
    nivel.style.background = cores[forca - 1] || "transparent";
    msg.textContent = textos[forca - 1] || "";
}



// --- GERADOR DE SENHA FORTE ---
function gerarSenha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
    let senha = "";

    for (let i = 0; i < 14; i++) {
        senha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("senhaGerada").value = senha;
}
