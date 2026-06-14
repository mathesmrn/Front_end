function cadastrar() 
{
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let plano = document.getElementById("plano").value;
    let resultado = document.getElementById("resultado");
    if (nome == "" || email == "" || idade == "" || plano == "") 
    {
        resultado.innerHTML = "Preencha todos os campos.";
        resultado.className = "erro";
    } 
    else 
    {
        if (idade < 18) 
        {
            resultado.innerHTML = "Usuários menores de idade não podem criar conta.";
            resultado.className = "erro";
        } 
        else 
        {
            resultado.innerHTML = "===== RESUMO DO CADASTRO ===== <br><br>" +
                                "Nome: " + nome + "<br>" +
                                "Email: " + email + "<br>" +
                                "Idade: " + idade + " anos <br>" +
                                "Plano: " + plano + "<br><br>" +
                                "Cadastro realizado com sucesso.";
            resultado.className = "sucesso";
        }
    }
}
function limpar()
{
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("plano").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado").className = "";
}
