const questions=[
    {
        question :"which is the lagest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question :"which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"australia",correct:true},
            {text:"arctic",correct:false},
            {text:"africa",correct:false},
        ]
    },
    {
        question :"which is the smallest country in the world?",
        answers:[
            {text:"Vatical city",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Shri lanka",correct:false},
        ]
    },
    {
        question :"which is the lagest desert in the world?",
        answers:[
            {text:"kalhari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:true},
            {text:"Antarctica",correct:false},
        ]
    },
];
const questonElement=document.getElementById("que");
const answerButton=document.getElementById("answers");
const nextButton=document.getElementById("Next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
 function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questonElement.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
 }

 function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block"

 }

 function showScore(){
    resetState();
    questonElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play again";
    nextButton.style.display="block";
 }

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }

 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 });
 startQuiz();


