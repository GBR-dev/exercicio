document.getElementById("frmspl").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    // Pegando os valores dos campos A e B

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    // Referência às mensagens

    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    // Validação: campo B deve ser maior que campo A

    if (campoB > campoA) {
        // Se for válido, mostra a mensagem de sucesso
        successMessage.style.display = "block";
        errorMessage.style.display = "none";

        // Limpando os campos após validação
        document.getElementById("campoA").value = "";
        document.getElementById("campoB").value = "";

    } else {
        // Se não for válido, mostra a mensagem de erro
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
    }
});
