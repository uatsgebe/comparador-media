function entrar() {
    var a = document.getElementById("usuario").value
    var b = document.getElementById("senha").value
    var c = document.getElementById("msg_erro");

    if(a == "admin" && b == "123") {
        alert("Login feito com sucesso")
        window.location = "page.html"
    }
    else {
        c.innerHTML = "Erro ao entrar"
    }
}