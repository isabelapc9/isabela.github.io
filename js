document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o comportamento padrão do formulário (recarregar a página)

    // Pega o valor do raio informado
    const raio = parseFloat(document.getElementById('raio').value);

    // Verifica se o raio é um número válido e positivo
    if (isNaN(raio) || raio <= 0) {
        alert('Por favor, insira um valor válido para o raio.');
        return;
    }

    // Calcula a área do círculo: A = π * r²
    const area = Math.PI * Math.pow(raio, 2);

    // Exibe o resultado com duas casas decimais
    document.getElementById('resultado').textContent = area.toFixed(2);
});
