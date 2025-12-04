

const main = document.querySelector("main")

async function buscar() {
    const users = await fetch("https://backend-lucas02ma-293x.vercel.app/frontend/Ranking/ranking.html").then(response => response.json())

    users.map(user => {
        main.innerHTML += `
            <section>
                <h2>Nome: ${user.nome}</h2>
                <p>Email: ${user.email}</p>
            </section>
        `
    })
}



buscar()