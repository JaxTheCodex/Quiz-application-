window.onload = function () {
    show(0);
}
let questions = [
    {
        id: 1,
        question: "Q1.What is the full form of RAM?",
        answer: "Random Access Memory",
        options: [
            "Randomely access memory",
            "Run Accept Memory",
            "Random Access Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "Q2.What is the smallest unit of information?",
        answer: "A Bit",
        options: [
            "A Bit",
            "A Byte",
            "A Block",
            "A Nibble"
        ]
    },
    {
        id: 3,
        question: "Q3.What is the decimal equivalent of binary 10111?",
        answer: "23",
        options: [
            "21",
            "29",
            "23",
            "48"
        ]
    },
    {
        id: 4,
        question: "Q4.Which of the following is the smallest visual element on a video monitor?",
        answer: "Pixel",
        options: [
            "Pixel",
            "Character",
            "Byte",
            "Bit"
        ]
    },
    {
        id: 5,
        question: "Q5.Number of primitive data types in Java are?",
        answer: "8",
        options: [
            "5",
            "4",
            "8",
            "10"
        ]
    },
    {
        id: 6,
        question: "Q6.What is the size of float and double in java?",
        answer: "32 and 64",
        options: [
            "32 and 64",
            "64 and 32",
            "32 and 32",
            "64 and 64"
        ]
    },
    {
        id: 7,
        question: "Q7.Select the valid statement.",
        answer: "char[] ch=new char[5]",
        options: [
            "char[] ch=new char(5)",
            "char[] ch=new char[5]",
            "char[] ch=new char()",
            "char[] ch=new char[]"
        ]
    },
    {
        id: 8,
        question: "Q8.Arrays in java are-",
        answer: "Objects",
        options: [
            "Object references",
            "Objects",
            "data types",
            "none"
        ]
    },
    {
        id: 9,
        question: "Q9.When is the object created with new keyword?",
        answer: "at run time",
        options: [
            "at run time",
            "at compile time",
            "depends on code",
            "none"
        ]
    },
    {
        id: 10,
        question: "Q10.Identify the keyword among the following that makes a variable belong to?",
        answer: "static",
        options: [
            "final",
            "static",
            "abstract",
            "volatile"
        ]
    }
]

function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome-form"]["name"].value;

    //Set player name
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
}

let count = 0;
function next() {
    count++;
    show(count);
}

function show(count) {
    let question = document.getElementById("questions");

    question.innerHTML = `<h2>${questions[count].question}</h2>
    <ul class="option-group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
    </ul>`;

    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i <= option.length; i++) {
        option[i].onclick = function () {
            for (j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}
let answer_count = 0;
let points = 0;

function next() {
    let selectedanswer = document.querySelector("li.option.active").innerHTML;

    if (selectedanswer == questions[answer_count].answer) {
        points += 10;
        sessionStorage.setItem("Points", points);
    }


    if (answer_count == questions.length - 1) {
        sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        location.href = "result.html"
        return;
    }

    //check answer 

    answer_count++;
    show(answer_count);
}
