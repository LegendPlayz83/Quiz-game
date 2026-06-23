const questions = {
  "Taylor Swift": [
    { question: "Which album has the song 'Anti-Hero'?",
        options: ["Reputation", "Midnights", "Lover", "Folklore"],
        answer: "Midnights"},
    { question: "What was Taylor Swift's debut single?",
        options: ["Love Story", "Teardrops on My Guitar", "Tim McGraw", "Our Song"],
        answer: "Tim McGraw" },
    { question: "Which album is 'All Too Well' originally from?",
        options: ["Speak Now", "Red", "1989", "Evermore"],
        answer: "Red" },
    { question: "What city is Taylor Swift from?",
        options: ["Nashville", "New York", "Los Angeles", "West Reading"],
        answer: "West Reading" },
    { question: "Which era uses a butterfly as its symbol?",
        options: ["Lover", "Folklore", "1989", "Fearless"],
        answer: "Lover" }
  ],
  "Bollywood": [
    { question: "Which film has the song 'Chaleya'?",
        options: ["Pathaan", "Jawan", "War", "Tiger 3"],
        answer: "Jawan" },
    { question: "Who directed Zindagi Na Milegi Dobara?",
        options: ["Karan Johar", "Zoya Akhtar", "Imtiaz Ali", "Farhan Akhtar"],
        answer: "Zoya Akhtar" },
    { question: "Which film features the dialogue 'Senorita'?",
        options: ["DDLJ", "Kuch Kuch Hota Hai", "Dil Chahta Hai", "Jab We Met"],
        answer: "DDLJ" },
    { question: "Yeh Jawaani Hai Deewani was released in which year?",
        options: ["2011", "2012", "2013", "2014"],
        answer: "2013" },
    { question: "Who plays Kabir in YJHD?",
        options: ["Ranveer Singh", "Ranbir Kapoor", "Arjun Kapoor", "Varun Dhawan"],
        answer: "Ranbir Kapoor" }
  ],
  "Science": [
    { question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: "Au" },
    { question: "How many bones are in the adult human body?",
        options: ["196", "206", "216", "226"],
        answer: "206" },
    { question: "What planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mars", "Mercury"],
        answer: "Mercury" },
    { question: "What gas do plants absorb from the air?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide" },
    { question: "Which of these is a form of energy which is due to an object or a particle's motion?",
        options: ["Kinetic Energy", "Potential Energy", "Thermal Energy", "Chemical Energy"],
        answer: "Kinetic Energy" }
  ],
  "Geography": [
    { question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra" },
    { question: "Which is the longest river in the world?",
        options: ["Amazon", "Yangtze", "Mississippi", "Nile"],
        answer: "Nile" },
    { question: "Which country has the most natural lakes?",
        options: ["Russia", "USA", "Canada", "Brazil"],
        answer: "Canada" },
    { question: "What is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
        answer: "Vatican City" },
    { question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific" }
  ]
}
let currentGenre = ""
let currentIndex = 0
let score = 0
function startQuiz(genre) {
    currentGenre = genre
    currentIndex = 0
    score = 0
    showScreen("quiz-screen")
    loadQuestion()
}
function loadQuestion() {
    const q = questions[currentGenre][currentIndex]
    document.getElementById("progress").textContent = `Question ${currentIndex + 1} of 5`
    document.getElementById("question-text").textContent = q.question

    const optionsDiv = document.getElementById("options")
    optionsDiv.innerHTML = ""

    q.options.forEach(option => {
        const btn = document.createElement("button")
        btn.textContent = option
        btn.onclick = () => checkAnswer(option)
        optionsDiv.appendChild(btn)
    })
}
function checkAnswer(selected) {
    const correct = questions[currentGenre][currentIndex].answer
    if (selected === correct) score++
    currentIndex++

    if (currentIndex < 5) {
        loadQuestion()
    } else {
        showResult()
    }
}
function showResult() {
    showScreen("result-screen")
    document.getElementById("score-display").textContent = `You scored ${score} out of 5!`
}
function resetQuiz() {
    showScreen("genre-screen")
}
function showScreen(id) {
    ["genre-screen", "quiz-screen", "result-screen"].forEach(screenId => {
        const el = document.getElementById(screenId)
        if (el) el.classList.add("hidden")
    })
    const target = document.getElementById(id)
    if (target) target.classList.remove("hidden")
}