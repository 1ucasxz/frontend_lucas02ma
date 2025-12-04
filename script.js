function init(){
    const login = document.querySelector("#header")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user) {
        login.innerHTML += `
           <h3>Bem-Vindo(a), ${user.nome.split(" ")[0]}</h3>
        `
        return
    }

    login.innerHTML += `
        <a id= "login" href="./Página de Login/paginaDeLogin.html" class="btn-cadastro">👤 Login</a>
    `
}

init()