const questions = [
    {
        question: " When the BTS has formed",
        answers:[
            { text: "2012", correct: false},
            { text: "2013", correct: true},
            { text: "2014", correct: false},
            { text: "2015", correct: false}
        ]
    },
    {
        question: " Who is the leader of BTS",
        answers:[
            { text: "Kim Namjoon", correct: true},
            { text: "Kim SeokJin", correct: false},
            { text: "Min Yoongi", correct: false},
            { text: "Jung Hoseok", correct: false}
        ]
    },
    {
        question: "What was the debut song of BTS ",
        answers:[
            { text: "Run BTS", correct: false},
            { text: "Dinosyus", correct: false},
            { text: "No More Dream", correct: true},
            { text: "DNA", correct: false}
        ]
    },
    {
        question: " What is the recent album released by BTS",
        answers:[
            { text: "Love Yourself", correct: false},
            { text: "BE", correct: false},
            { text: "Map of the Soul", correct: false},
            { text: "Proof", correct: true}
        ]
    },
    {
        question: "  What K-Pop entertainment is BTS signed under?",
        answers:[
            { text: "Hybe Entertainment", correct: true},
            { text: "YG Entertainment", correct: false},
            { text: "SM Entertainment", correct: false},
            { text: "JYP Entertainment", correct: false}
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    showQuestion();
}

function showQuestion(){
    resetstate();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}

function resetstate(){
    nextButton.style.display="none";
    nextButton.innerHTML = "Next";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    
    });
    nextButton.style.display="block";
}
function showscore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showscore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
