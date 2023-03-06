const usuarios = [
    {
        nomeUsuario: "batata",
    email: "jose.almir@email.com",
    senha: "12345",
    },
    {
        nomeUsuario: "gabriel-braga",
        email: "gabriel.braga@email.com",
        senha: "12345"
    }
]
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const btnEntrar  =  document.getElementById("btn-entrar");

btnEntrar.addEventListener('click',()=>{
    const email = campoEmail.value;
    const senha = campoSenha.value;
    const btnIn = btnEntrar.value;

    let usuarioValido = usuarios.find((usuario) => usuario.email === email);
    
    if(usuarioValido !== undefined){
        if(usuarioValido.senha === senha){
            console.log("Pode entrar");
            window.location.href = 'app.html';
        }else{
            alert.log("Senha incorreta");
        }
    }else{
        alert.log("Usuario não existe!");
    }
})