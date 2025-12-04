document.addEventListener('DOMContentLoaded', () => {
    const imagens = document.querySelectorAll('body > img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
  
    imagens.forEach(img => {
      img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.classList.add('show');
      });
    });
  
    
    modal.addEventListener('click', (e) => {
      if(e.target !== modalImg) {
        modal.classList.remove('show');
      }
    });
  });

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
  