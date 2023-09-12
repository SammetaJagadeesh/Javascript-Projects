// let para = document.getElementById("time");
// let para1 = document.getElementById("arr");
// let optionsDiv = document.getElementById("options");
// let resultPara = document.getElementById("result");

// let arr = [
//     // Question 1
//     {
//         question: "What is the chemical symbol for water?",
//         options: ["H2O", "CO2", "O2", "NaCl"],
//         correctAnswer: "H2O";
//     },
//     // Question 2
//     {
//         question: "Which planet is known as the 'Red Planet'?",
//         options: ["Venus", "Mars", "Jupiter", "Saturn"],
//         correctAnswer: "Mars";
//     },
//     // Question 3
//     {
//         question: "Who wrote the play 'Romeo and Juliet'?",
//         options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
//         correctAnswer: "William Shakespeare";
//     },
//     // Question 4
//     {
//         question: "What is the largest organ in the human body?",
//         options: ["Brain", "Liver", "Heart", "Skin"],
//         correctAnswer: "Skin"
//     },
//     // Question 5
//     {
//         question: "In which country would you find the Eiffel Tower?",
//         options: ["Italy", "France", "Spain", "Germany"],
//         correctAnswer: "France"
//     },
//     // Question 6
//     {
//         question: "Which scientist is best known for his theory of relativity?",
//         options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
//         correctAnswer: "Albert Einstein"
//     },
//     // Question 7
//     {
//         question: "What is the symbol for the chemical element gold?",
//         options: ["Au", "Go", "Ag", "Gd"],
//         correctAnswer: "Au"
//     },
//     // Question 8
//     {
//         question: "Who is the author of 'The Great Gatsby'?",
//         options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "George Orwell"],
//         correctAnswer: "F. Scott Fitzgerald"
//     },
//     // Question 9
//     {
//         question: "What is the largest ocean on Earth?",
//         options: ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"],
//         correctAnswer: "Pacific Ocean"
//     },
//     // Question 10
//     {
//         question: "What is the chemical symbol for oxygen?",
//         options: ["O2", "H2O", "CO2", "O"],
//         correctAnswer: "O"
//     },
//     // Add more questions here...
// ];

// let start = 14;
// let answered = false;
// const timeInterval = setInterval(function () {
//     para.innerText = start;
//     start--;
//     if (start < 0) {
//         clearInterval(timeInterval);
//         if (answered == false) {
//             resultPara.innerText = "Time up"
//         }
//     }
// }, 1000)
// para1.innerText = arr[0].question;
// for (let i = 0; i < arr[0].options.length; i++) {
//     let button = document.createElement("button");
//     button.innerText = arr[0].options[i];
//     optionsDiv.appendChild(button);
//     button.addEventListener("click", function () {
//         answered = true;
//         clearInterval(timeInterval);

//         if (button.innerText == arr[0].correctAnswer) {
//             resultPara.innerText = "correct Answer"
//         }
//         else {
//             resultPara.innerText = "Wrong Answer";
//         }
//     })
// }
// // const optionbuttons = optionsDiv.getElementsByTagName("button");
// // console.log(optionbuttons);

// let i = 1;
// resultPara.innerText = "";
// const arrInterval = setInterval(function () {
//     answered = false;
//     let start = 14;
//     const timeInterval = setInterval(function () {
//         para.innerText = start;
//         start--;
//         if (start < 0) {
//             clearInterval(timeInterval);
//         }
//     }, 1000)
//     para1.innerText = arr[i].question;
//     resultPara.innerText = "";
//     const optionbuttons = optionsDiv.getElementsByTagName("button");
//     let j = 0;
//     while (j < arr[i].options.length) {

//         for (let k = 0; k < optionbuttons.length; k++) {
//             let btn = optionbuttons[k]
//             btn.innerText = arr[i].options[j];
//             j++;

//             btn.addEventListener("click", function () {
//                 answered = true;
//                 if (btn.innerText === arr[i].correctAnswer) {
//                     resultPara.innerText = "correct Answer";
//                 }
//                 else {
//                     resultPara.innerText = "Wrong Answer";
//                 }
//             })
//         }
//     }
//     i++;
//     if (i > arr.length - 1) {
//         clearInterval(arrInterval);
//     }
// }, 15000);  

let para = document.getElementById("time");
let para1 = document.getElementById("arr");
let optionsDiv = document.getElementById("options");
let resultPara = document.getElementById("result");
let scoreresult = document.getElementById("Score");
let questions = document.getElementById("questionNumber")
let score = 0;

let arr = [
    // Question 1
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        correctAnswer: "H2O"
    },
    // Question 2
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    // Question 3
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    // Question 4
    {
        question: "What is the largest organ in the human body?",
        options: ["Brain", "Liver", "Heart", "Skin"],
        correctAnswer: "Skin"
    },
    // Question 5
    {
        question: "In which country would you find the Eiffel Tower?",
        options: ["Italy", "France", "Spain", "Germany"],
        correctAnswer: "France"
    },
    // Question 6
    {
        question: "Which scientist is best known for his theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: "Albert Einstein"
    },
    // Question 7
    {
        question: "What is the symbol for the chemical element gold?",
        options: ["Au", "Go", "Ag", "Gd"],
        correctAnswer: "Au"
    },
    // Question 8
    {
        question: "Who is the author of 'The Great Gatsby'?",
        options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "George Orwell"],
        correctAnswer: "F. Scott Fitzgerald"
    },
    // Question 9
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    // Question 10
    {
        question: "What is the chemical symbol for oxygen?",
        options: ["O2", "H2O", "CO2", "O"],
        correctAnswer: "O"
    },
    // Add more questions here...

];

let questionnumber = 0;
let answered = false;
let countdownInterval;
let number = 1;

function startCountDown() {
    let start = 15;
    countdownInterval = setInterval(function () {
        start--;
        para.innerText = start;
        if (start <= 0) {
            clearInterval(countdownInterval);
            if (answered == false) {
                para.innerHTML = "Time up";
                questionnumber++;
                setTimeout(showNextQuestion, 1000)

            }

        }


    }, 1000)
}

function showNextQuestion() {
    clearInterval(countdownInterval);
    resultPara.innerText = "";
    answered = false;
   
    questions.innerHTML = number + " of " + (arr.length);
    number++;
    if(number>arr.length+1 )
    {
        questions.innerHTML="Completed";
    }

    if (questionnumber < arr.length) {
        para1.innerText = arr[questionnumber].question;
        optionsDiv.innerHTML = "";
        for (let i = 0; i < arr[questionnumber].options.length; i++) {
            let button = document.createElement("button");
            button.innerHTML = arr[questionnumber].options[i];
            optionsDiv.appendChild(button);
            button.addEventListener("click", function () {
                answered = true;
                if (button.innerText === arr[questionnumber].correctAnswer) {
                    resultPara.innerHTML = "Correct Answer"
                    score = score + 1;
                }
                else {
                    resultPara.innerHTML = "Wrong Answer";
                }

                questionnumber++;
                setTimeout(showNextQuestion, 500);
            })
        }
        startCountDown();

    }
    else {
        para.innerHTML = "";
        optionsDiv.innerHTML = "";
        para1.innerText = "Quiz completed";
        scoreresult.innerText = "Your Result " + score;
    }


}
showNextQuestion();
