let timer = 61;  
let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let quizQuestion = document.querySelector("#question");
let correctMessage = document.querySelector("displayMessage");
let currentQuestion = 0;
let timerReset = 0;
let userScore = 0;
let timerEl = document.querySelector("#timeLeft");
let scoreEl = document.querySelector("#score");

let startQuizButton = document.querySelector("#startQuiz");
startQuizButton.addEventListener("click", startQuiz);


function startQuiz(){
  startQuizButton.style.display = "none";
  
  let timerId = setInterval(function(){
    timer --;
    console.log(timer);
    timerEl.textContent = timer;
    if (timer === 0 || timer <0) {
      clearInterval(timerId)
    timerReset
    }
  
  }, 1000)

let examQuestions = [{question:"What animal is Blue's Clues", answers: ["cat", "dog", "rat", "lizard"], correctAnswer:"dog"},
{question:"Peppa the Pig hung up on the sheep because they could...", answers: ["smile", "dance", "whistle", "run"], correctAnswer:"whistle"},
{question:"What is Ratatouille's skill?", answers: ["chef", "body builder", "poet", "teacher"], correctAnswer:"chef"},
{question:"In Finding Nemo, Nemo lives in the...", answers: ["forest", "jungle", "city", "ocean"], correctAnswer:"ocean"},
{question:"The 'cow' in Mulan was really a...", answers: ["hippo", "horse", "dragon", "bee"], correctAnswer:"horse"},
{question:"Snow White was friends with how many dwarves?", answers: ["seven", "four", "nine", "ten"], correctAnswer:"seven"},
{question:"What broke the curse of sleeping beauty?", answers: ["sleep", "exercise", "makeup", "a kiss"], correctAnswer:"a kiss"},
  {question:"Land before time was about?", answers: ["lions", "dinosaurs", "lobsters", "humans"], correctAnswer:"dinosaurs"},
  {question:"Simba fell in love with...", answers: ["Amy", "Clara", "Nala", "Bella"], correctAnswer:"Nala"},
  {question:"Finish the title: Beauty and the...", answers: ["Rabbit", "Ogre", "Prince", "Beast"], correctAnswer:"Beast"}];


  renderQuestion()

  function renderQuestion(){
    let prefix = examQuestions[currentQuestion];
    
    quizQuestion.textContent = prefix.question;
    questionButton1.textContent = prefix.answers[0];
    questionButton2.textContent = prefix.answers[1];
    questionButton3.textContent = prefix.answers[2]; 
    questionButton4.textContent = prefix.answers[3];
    // console.log(prefix.question);
    // console.log(prefix.answers[0]);
    // console.log(prefix.answers[1]);
    // console.log(prefix.answers[2]); 
    // console.log(prefix.answers[3]);
    // for building/editing purposes. comment out once deployed 
  }

  quizDiv.addEventListener("click", function(event){
  let element = event.target;
    let questionAnswer = examQuestions[currentQuestion-1].correctAnswer;
    
    if (element.matches("button")){
      let userChoice = element.textContent;
      // textContent turns button id to answer selected
      
      // console.log("your answer:" + userChoice);
      // console.log("correct answer:" + questionAnswer);
              
        renderQuestion();
        currentQuestion++;
        
      if (userChoice === questionAnswer && timer >= 0){
        console.log("Correct!")
        userScore++;
        scoreEl.textContent = userScore + ("/10")
        console.log(userScore + "/10")
      }else {
        console.log("whoops")
        timer -=5
      }

    // error line 49 when trying to loop and run out od questions wont do 10/10 only 9/10
  }});
  currentQuestion++;
}
