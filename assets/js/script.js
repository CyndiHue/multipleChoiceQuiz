let timer = 101;  
let quizDiv = document.querySelector("#quiz");
let button1 = document.querySelector("#answer1");
let button2 = document.querySelector("#answer2");
let button3 = document.querySelector("#answer3");
let button4 = document.querySelector("#answer4");
let quizQuestion = document.querySelector("#question");
let timerEl = document.querySelector("#timeLeft")
let currentQuestion = 0;

let timerId = setInterval(function(){
  timer --;
  console.log(timer);
  timerEl.textContent = timer;
    if (timer === 0) {
      clearInterval(timerId)
    }
}, 1000)
  
  
let examQuestions = [{question:"question 1", answers: ["choice 1", "choice 2", "choice 3", "choice 4"], correctAnswer:"choice 4"},
  {question:"question 2", answers: ["choice 5", "choice 6", "choice 7", "choice 8"], correctAnswer:"choice 8"},
  {question:"question 3", answers: ["choice 9", "choice 10", "choice 11", "choice 12"], correctAnswer:"choice 12"},
  {question:"question 4", answers: ["choice 13", "choice 14", "choice 15", "choice 16"], correctAnswer:"choice 16"}];
  
let questionSelector = examQuestions[currentQuestion];
  
renderQuestion()
currentQuestion++;
  
function renderQuestion(){
  quizQuestion.textContent = (questionSelector.question);
  button1.textContent = (questionSelector.answers[0]);
  button2.textContent = (questionSelector.answers[1]);
  button3.textContent = (questionSelector.answers[2]); 
  button4.textContent = (questionSelector.answers[3]);
  console.log(questionSelector.question);
  console.log(questionSelector.answers[0]);
  console.log(questionSelector.answers[1]);
  console.log(questionSelector.answers[2]); 
  console.log(questionSelector.answers[3]);
  
  }
  quizDiv.addEventListener("click", function(event){
    let element = event.target;
    let questionAnswer = examQuestions[currentQuestion-1].correctAnswer;
    
    if (element.matches("button")){
      let userChoice = element.textContent;
      
      console.log("your answer:" + userChoice);
      console.log("correct answer:" + questionAnswer);
    
    if (userChoice === questionAnswer){
      console.log("Correct!")
      alert("Correct!")
    }else {
      console.log("whoops")
      alert("whoops...")
      timer-=5;
    }
      
      renderQuestion();
      currentQuestion++;
}});
