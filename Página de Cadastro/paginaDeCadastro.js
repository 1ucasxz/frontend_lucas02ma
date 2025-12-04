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
      <a class="button" href="/frontend/Página de Login/paginaDeLogin.html"> <img src="/frontend/assets/User Branco.png" alt="">Login</a>
    `
}

init()

const button = document.querySelector("#button")

button.onclick = (event) => {
    event.preventDefault()
    signUp()
}

async function signUp() {
    
    const nome = document.querySelector("#nome").value
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value

    if(nome === "" || email === "" || senha === ""){
        alert("Preencha todos os campos!")
        return
    }
    
    const user = {
        nome,
        email,
        senha
    }
    
    const response = await fetch("https://backend-lucas02ma-293x.vercel.app/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    const {message} = response

    alert(message)

    window.location.href = "../index.html"

}
