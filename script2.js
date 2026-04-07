function compararNumeros() {

      // Pegando valores
      const valor1 = document.getElementById("numero1").value;
      const valor2 = document.getElementById("numero2").value;
      const resultado = document.getElementById("resultado");

      // Validação
      if (valor1 === "" || valor2 === "") {
        resultado.innerHTML = "Preencha todos os campos!";
        return;
      }

      // Convertendo para número
      const numero1 = Number(valor1);
      const numero2 = Number(valor2);

      // Verificando se é número válido
      if (isNaN(numero1) || isNaN(numero2)) {
        resultado.innerHTML = "Digite apenas números válidos!";
        return;
      }

      // Lógica principal
      if (numero1 === numero2) {
        resultado.innerHTML = `Resultado: ${numero1 + numero2}`;
      } 
      else if (numero1 > 10 || numero2 > 10) {
        resultado.innerHTML = "Digite valores menores ou iguais a 10";
      } 
      else {
        resultado.innerHTML = `Maior número: ${numero1 > numero2 ? numero1 : numero2}`;
      }
    }