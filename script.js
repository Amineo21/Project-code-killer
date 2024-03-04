const questions=[

    {
        question: "Quelle balise utilise-t-on pour créer un lien hypertexte (HTML) ?",
        answers:[
            {text: "link", correct: false},
            {text: "a", correct: true},
            {text: "href", correct: false},
            {text: "p", correct: false},
        ]
    },
    {
        question: "Quelle propriété CSS est utilisée pour donner au texte une couleur ?",
        answers:[
            {text: "font-color", correct: false},
            {text: "text-color", correct: false},
            {text: "foreground-color", correct: false},
            {text: "color", correct: true},
        ]
    },
    {
        question: "Quelle balise HTML est utilisée pour créer une liste ?",
        answers:[
            {text: "ul", correct: false},
            {text: "li", correct: false},
            {text: "ol", correct: true},
            {text: "dl", correct: false},
        ]
    },
    {
        question: "Quel sélecteur (CSS) est utilisé pour prendre tous les éléments d'une classe en particulière ?",
        answers:[
            {text:"#classname", correct: false},
            {text:".classname", correct: true},
            {text: "class:classname", correct: false},
            {text: "classname:", correct: false},
        ]
    },
    {
        question: " comment déclare-t-on une variable en JS ?",
        answers:[
            {text: "v (NomDeLaVariable)", correct: false},
            {text: "variable (NomDeLaVariable;)", correct: false},
            {text: "var (NomDeLaVariable)", correct: true},
            {text: "let (NomDeLaVariable);", correct: false},
        ]
    },
    {
        question: "Quelle balise HTML est utilisée pour créer des titres ?",
        answers:[
            {text: "heading", correct: false},
            {text: "header", correct: false},
            {text: "h", correct: true},
            {text: "head", correct: false},
        ]
    },
    {
        question: "Quelle balise (HTML) est utilisée pour inclure du code JavaScript dans l'HTML ?",
        answers:[
            {text: "script", correct: true},
            {text: "code", correct: false},
            {text: "javascript", correct: false},
            {text: "js", correct: false},
        ]
    },
    {
        question: "Quelle propriété CSS est utilisée pour définir la largeur d'un élément?",
        answers:[
            {text:"dimension", correct: false},
            {text:"size", correct: false},
            {text: "spacing", correct: false},
            {text:"width", correct: true},
        ]
    },
    {
        question: "Quelle balise HTML est utilisée pour créer un lien vers le CSS ?",
        answers:[
            {text:"stylesheet", correct: false},
            {text:"link", correct: true},
            {text:"style", correct: false},
            {text: "css", correct: false},
            
        ]
    },
    {
        question: "Quelle balise HTML est utilisée pour créer un formulaire dans une page web?",
        answers:[
            {text:"submit", correct: false},
            {text:"input", correct: false},
            {text:"form", correct: true},
            {text: "field", correct: false},
            
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState()
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!!!`;
    nextButton.innerHTML ="Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

function tricheur(){
    document.addEventListener("visibilitychange", event => {
        if (document.visibilityState === "visible") {
          console.log("En ligne")
    
        } else {
          console.log("Hors ligne");
         
    
        }
      })
}
tricheur();
  
