function media() {
    const valor1 = document.getElementById("numero1").value;
    const valor2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");

    if (valor1 === "" || valor2 === "") {
        resultado.innerHTML = "Preencha todos os campos!";
        return;
    }

    const n1 = Number(valor1);
    const n2 = Number(valor2);

    const media = (n1 + n2) / 2;
    resultado.innerHTML = `Resultado: ${media}`
    
    
    
    
    
    
    
    
    
    
    

}