const questions = [
  {
    question: "1. ONDE E QUANDO TEVE INÍCIO A REVOLUÇÃO INDUSTRIAL?",
    answers: ["França, no século XVII", "Estados Unidos, no século XIX", "Inglaterra, no século XVIII", "Alemanha, no século XX"],
    correct: 2
  },
  {
    question: "2. QUAL FOI UMA DAS PRINCIPAIS CAUSAS DA REVOLUÇÃO INDUSTRIAL?",
    answers: ["A criação da internet", "O desenvolvimento da agricultura mecanizada", "O fim da escravidão na Europa", "O fim na Europa"],
    correct: 1
  },
  {
    question: "3. QUAL DAS INVENÇÕES A SEGUIR ESTÁ LISTADA NO SITE COMO UM MARCO DA REVOLUÇÃO INDUSTRIAL?",
    answers: ["Rádio", "Avião", "Máquina a vapor", "Satélite"],
    correct: 2
  },
  {
    question: "4. SEGUNDO O SITE, QUAL FOI UMA DAS CONSEQUÊNCIAS NEGATIVAS DA REVOLUÇÃO INDUSTRIAL?",
    answers: ["Crescimento sustentável das cidades", "Melhoria nas condições de trabalho", "Aumento da poluição e exploração da mão de obra", "Expansão da democracia"],
    correct: 2
  },
  {
    question: "5. QUAIS SETORES SOFRERAM GRANDES MUDANÇAS DURANTE A REVOLUÇÃO INDUSTRIAL, DE ACORDO COM O SITE?",
    answers: ["Moda e turismo", "Têxtil, transporte e comunicação", "Saúde e esportes", "Música e cinema"],
    correct: 1
  }
];


function acessoQuiz() {
  const user = JSON.parse(sessionStorage.getItem("user"))

  if (user) {
        return
    }

    alert("Primeiro faça o login!")
    window.location.href = "/frontend/Página de Login/paginaDeLogin.html"

}

acessoQuiz()

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

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.querySelector(".container").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const answersContainer = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");

  questionElement.textContent = questions[currentQuestion].question;
  answersContainer.innerHTML = "";
  nextBtn.classList.add("hidden");

  questions[currentQuestion].answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer");
    btn.onclick = () => checkAnswer(index, btn);
    answersContainer.appendChild(btn);
  });
}

function checkAnswer(selected, btn) {
  const buttons = document.querySelectorAll(".answer");
  buttons.forEach(b => b.disabled = true);

  if (selected === questions[currentQuestion].correct) {
    btn.classList.add("correct");
    score++;
    document.getElementById("next-btn").classList.remove("hidden");
  } else {
    btn.classList.add("wrong");
    setTimeout(() => {
      document.getElementById("quiz-container").classList.add("hidden");
      document.getElementById("error-container").classList.remove("hidden");
    }, 800);
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");
  document.getElementById("result-message").textContent =
    `Você acertou ${score} de ${questions.length} perguntas!`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-container").classList.add("hidden");
  document.getElementById("error-container").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  showQuestion();
}

