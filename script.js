let questions = [
    {
      question: "What is 5 multiplied by 6?",
      answer: 30
    },
    {
      question: "What is the square root of 64?",
      answer: 8
    },
    {
      question: "How many sides does a hexagon have?",
      answer: 6
    },
    {
      question: "How many seconds are there in a minute?",
      answer: 60
    },
    {
      question: "What is the value of π (pi) rounded to two decimal places?",
      answer: 3.14
    },
    {
      question: "How many days are there in a leap year?",
      answer: 366
    },
    {
      question: "What is the result of 10 minus 3?",
      answer: 7
    },
    {
      question: "How many liters are there in a gallon?",
      answer: 3.78541
    },
    {
      question: "What is the sum of the angles in a triangle?",
      answer: 180
    },
    {
      question: "How many centimeters are there in a meter?",
      answer: 100
    },
    {
      question: "How many bytes are there in a kilobyte (KB)?",
      answer: 1024
    },
    {
      question: "What is the boiling point of water in Celsius?",
      answer: 100
    },
    {
      question: "How many planets are there in our solar system?",
      answer: 8
    },
    {
      question: "How many sides does a square have?",
      answer: 4
    },
    {
      question: "What is the value of e (Euler's number) rounded to two decimal places?",
      answer: 2.71
    },
    {
      question: "What is the result of 25 divided by 5?",
      answer: 5
    },
    {
      question: "How many colors are there in a rainbow?",
      answer: 7
    },
    {
      question: "What is the value of the gravitational constant (G) rounded to two decimal places?",
      answer: 9.81
    },
    {
      question: "How many millimeters are there in a centimeter?",
      answer: 10
    },
    {
      question: "How many players are there on a soccer team?",
      answer: 11
    },
    {
      question: "What is the result of 7 plus 8?",
      answer: 15
    },
    {
      question: "How many continents are there in the world?",
      answer: 7
    },
    {
      question: "What is the value of the Avogadro constant rounded to two decimal places?",
      answer: 6.02
    },
    {
      question: "How many ounces are there in a pound?",
      answer: 16
    },
    {
      question: "How many legs does a spider have?",
      answer: 8
    },
    {
      question: "What is the result of 10 times 10?",
      answer: 100
    },
    {
      question: "How many minutes are there in an hour?",
      answer: 60
    },
    {
      question: "What is the result of 100 divided by 10?",
      answer: 10
    },
    {
      question: "How many sides does a triangle have?",
      answer: 3
    },
    {
      question: "What is the value of the speed of light in a vacuum (c) in meters per second?",
      answer: 299792458
    }
  ];
  
  
  
  
  let currentQuestionIndex;
  let score = 0;
  
  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }
  
  function displayQuestion() {
    let questionElement = document.getElementById("question");
    let resultElement = document.getElementById("result");
    let answerElement = document.getElementById("answer");
    let nextButton = document.getElementById("next");
  
    questionElement.textContent = questions[currentQuestionIndex].question;
    resultElement.textContent = "";
    answerElement.value = "";
    answerElement.style.backgroundColor = "white"; // Reset background color
  }

  function updateScore() {
    let scoreElement = document.getElementById("score");
    scoreElement.textContent = "Score: " + score;
  }
  
  function onSubmit() {
    let answer = parseFloat(document.getElementById("answer").value.trim()); // Parse input to float
    let resultElement = document.getElementById("result");
    let answerElement = document.getElementById("answer");
  
    if (answer === questions[currentQuestionIndex].answer) { // Compare without converting to lowercase
      resultElement.textContent = "Correct";
      resultElement.style.color = "green";
      score++; // Increment score
    } else {
      resultElement.textContent = "Wrong";
      resultElement.style.color = "red";
      answerElement.style.backgroundColor = "red";
    }
    updateScore();
  }
  
  function onNext() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      let questionElement = document.getElementById("question");
      questionElement.textContent = "Quiz completed! Your score is " + score + " out of " + questions.length;
      
      let inputElement = document.getElementById("answer");
      inputElement.style.display = "none";
      
      let resultElement = document.getElementById("result");
      resultElement.textContent = "";
      
      let nextButton = document.getElementById("next");
      nextButton.textContent = "End";
      nextButton.onclick = () => {
        document.body.innerHTML = "This page is under construction!";
      };
    }
    updateScore();
  }
  
  // Initialize the quiz after shuffling questions
  function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions();
    displayQuestion();
  }
  
  // Initial setup
  initializeQuiz();