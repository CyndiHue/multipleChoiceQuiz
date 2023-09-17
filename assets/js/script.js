let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let quizQuestion = document.querySelector("#question");
let timerEl = document.querySelector("#timeLeft");
let scoreEl = document.querySelector("#score");
let endDiv = document.querySelector("#end")

// let quizDiv = $("#quiz");
// let questionButton1 = $("#answer1");
// let questionButton2 = $("#answer2");
// let questionButton3 = $("#answer3");
// let questionButton4 = $("#answer4");
// let quizQuestion = $("#question");
// let timerEl = $("#timeLeft");
// let scoreEl = $("#score");
// let endDiv = $("#end");

// below El currently not being used
let textEl = document.querySelector("#text")
let submitEl = document.querySelector("#submit-button")

let startQuizButton = document.querySelector("#startQuiz");
startQuizButton.addEventListener("click", startQuiz);

// let textEl = $("#text");
// let submitEl = $("#submit-button");
// let startQuizButton = $("#startQuiz");

// startQuizButton.on("click", startQuiz);

let timer = 61;  
let currentQuestion = 0;
let userScore = 0;

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
quizDiv.style.display = "none";
endDiv.style.display = "none"

function startTimer(){
  timer --;
  console.log(timer);
  timerEl.textContent = timer + " seconds left";
  if (timer <=0) {
    clearInterval(timerId);
    endGame();
  }
}

function startQuiz(){
  startQuizButton.style.display = "none";
  quizDiv.style.display = "block";
  endDiv.style.display = "none"
  
  setInterval(startTimer, 1000)
  startTimer();

 examQuestions


  renderQuestion()

  function renderQuestion(){
    let questionIndex = examQuestions[currentQuestion];
    
    quizQuestion.textContent = questionIndex.question;
    questionButton1.textContent = questionIndex.answers[0];
    questionButton2.textContent = questionIndex.answers[1];
    questionButton3.textContent = questionIndex.answers[2]; 
    questionButton4.textContent = questionIndex.answers[3];
    // console.log(questionIndex.question);
    // console.log(questionIndex.answers[0]);
    // console.log(questionIndex.answers[1]);
    // console.log(questionIndex.answers[2]); 
    // console.log(questionIndex.answers[3]);
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
              
      if (userChoice === questionAnswer && timer >= 0){
        console.log("Correct!")
        userScore++;
        scoreEl.textContent = userScore + ("/10")
        console.log(userScore + "/10")

        localStorage.setItem("userScore", JSON.stringify(userScore));
      }else {
        console.log("whoops")
        timer -=5
      }

      if(currentQuestion >= examQuestions.length){
        endGame()

    
      }else{
        renderQuestion();
        currentQuestion++;
      }

  }});
  currentQuestion++;
}

function endGame (){
  let timerId = setInterval(startTimer, 1000)
  clearInterval(timerId);
  quizDiv.style.display = "none";
  endDiv.style.display = "block"
  scoreEl.textContent = "Your Score:" + userScore + "/10";

    quizDiv.addEventListener("click", function(event){
      let element = event.target;
      if (element.matches("button")){

        localStorage.getItem("userScore", JSON.stringify(userScore));
      }
    })
  }