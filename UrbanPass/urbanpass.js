let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let cidade = prompt("Digite sua cidade:");
let email = prompt("Digite seu e-mail:");
let senha = prompt("Digite sua senha:");
let idadeValida = false;
if (idade >= 18)
{
    console.log("Cadastro permitido");
    idadeValida = true;
} else
{
    console.log("Cadastro não permitido");
}
let senhaValida = false;
if (senha.length >= 6) 
{
    senhaValida = true;
}
else
{
    console.log("Erro: A senha deve possuir no mínimo 6 caracteres.");
}
let cidadeValida = false;
let cidadeLimpa = cidade.trim().toLowerCase();
if (cidadeLimpa === "recife" || cidadeLimpa === "olinda" || cidadeLimpa === "jaboatão" || cidadeLimpa === "jaboatao")
{
    cidadeValida = true;
} 
else
{
    console.log("Serviço indisponível para sua região");
}
let planoOpcao = prompt("Escolha seu plano:\n1 - Básico\n2 - Profissional\n3 - Premium");
let nomePlano = "";
let valorMensal = "";
if (planoOpcao === "1") 
{
    nomePlano = "Básico";
    valorMensal = "R$ 29,90";
} else if (planoOpcao === "2") 
{
    nomePlano = "Profissional";
    valorMensal = "R$ 59,90";
} else if (planoOpcao === "3") 
{
    nomePlano = "Premium";
    valorMensal = "R$ 99,90";
} else 
{
    nomePlano = "Não selecionado";
    valorMensal = "N/A";
}
console.log("Plano escolhido: " + nomePlano);
console.log("Valor mensal: " + valorMensal);
function mostrarResumo() {
    console.log("----------------------------");
    console.log("RESUMO DO CADASTRO");
    console.log("Nome: " + nome);
    console.log("Cidade: " + cidade);
    console.log("Plano Escolhido: " + nomePlano);
    console.log("----------------------------");
}
let especialidades = [
    "Transporte de Passageiros",
    "Entrega de Encomendas",
    "Mobilidade Compartilhada",
    "Serviço Executivo",
    "Seguro de Viagem"
];
console.log("ESPECIALIDADES DISPONÍVEIS:");
for (let p = 0; p < especialidades.length; i++) 
{
    console.log((i + 1) + ". " + especialidades[p]);
}
if (idadeValida && cidadeValida && senhaValida) 
{
    console.log("Cadastro realizado com sucesso");
    mostrarResumo(); 
} 
else
{
    console.log("Cadastro inválido");
}
