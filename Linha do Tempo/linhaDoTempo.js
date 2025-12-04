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
        <a class="button" href="../Página de Login/paginaDeLogin.html"> <img src="/frontend/assets/User Branco.png" alt="">Login</a>
    `
}

init()

