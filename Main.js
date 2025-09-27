<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Quiz App</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .quiz-container {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            padding: 40px;
            width: 100%;
            max-width: 600px;
            min-height: 500px;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }

        .quiz-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
        }

        .quiz-header {
            text-align: center;
            margin-bottom: 30px;
        }

        .quiz-title {
            color: #333;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .quiz-subtitle {
            color: #666;
            font-size: 1.1rem;
            margin-bottom: 20px;
        }

        .progress-bar {
            background: #e0e0e0;
            height: 8px;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 20px;
        }

        .progress-fill {
            background: linear-gradient(90deg, #667eea, #764ba2);
            height: 100%;
            border-radius: 10px;
            transition: width 0.3s ease;
            width: 0%;
        }

        .question-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 15px;
        }

        .question-counter {
            background: #667eea;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.9rem;
        }

        .timer {
            background: #ff6b6b;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.9rem;
            min-width: 80px;
            text-align: center;
        }

        .timer.warning {
            animation: pulse 1s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        .question-text {
            font-size: 1.3rem;
            color: #333;
            margin-bottom: 25px;
            line-height: 1.6;
            font-weight: 500;
        }

        .options-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 30px;
        }

        .option {
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            padding: 18px 20px;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        .option:hover {
            background: #667eea;
            color: white;
            border-color: #667eea;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        .option.selected {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }

        .option.correct {
            background: #4caf50;
            color: white;
            border-color: #4caf50;
        }

        .option.incorrect {
            background: #f44336;
            color: white;
            border-color: #f44336;
        }

        .option.disabled {
            pointer-events: none;
        }

        .option-label {
            background: rgba(255, 255, 255, 0.2);
            color: inherit;
            padding: 4px 8px;
            border-radius: 50%;
            margin-right: 15px;
            font-weight: bold;
            min-width: 24px;
            text-align: center;
            font-size: 0.9rem;
        }

        .option:hover .option-label,
        .option.selected .option-label {
            background: rgba(255, 255, 255, 0.3);
        }

        .quiz-controls {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: auto;
        }

        .btn {
            padding: 12px 30px;
            border: none;
            border-radius: 25px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .btn-primary {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: #6c757d;
            color: white;
        }

        .btn-secondary:hover {
            background: #5a6268;
            transform: translateY(-2px);
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        .results-screen {
            text-align: center;
            display: none;
        }

        .results-screen.active {
            display: block;
        }

        .score-circle {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: linear-gradient(45deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 30px auto;
            color: white;
            font-size: 2rem;
            font-weight: bold;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .results-text {
            font-size: 1.5rem;
            color: #333;
            margin-bottom: 20px;
        }

        .high-scores {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
        }

        .high-scores h3 {
            color: #333;
            margin-bottom: 15px;
            font-size: 1.2rem;
        }

        .score-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #e9ecef;
        }

        .score-item:last-child {
            border-bottom: none;
        }

        .start-screen {
            text-align: center;
        }

        .start-screen.hidden {
            display: none;
        }

        .quiz-screen {
            display: none;
        }

        .quiz-screen.active {
            display: block;
        }

        .feature-list {
            text-align: left;
            margin: 20px 0;
            background: #f8f9fa;
            padding: 20px;
            border-radius: 12px;
        }

        .feature-list li {
            margin: 8px 0;
            color: #555;
        }

        @media (max-width: 768px) {
            .quiz-container {
                padding: 20px;
                margin: 10px;
            }

            .quiz-title {
                font-size: 2rem;
            }

            .question-text {
                font-size: 1.1rem;
            }

            .option {
                padding: 15px;
                font-size: 1rem;
            }

            .question-info {
                justify-content: center;
                text-align: center;
            }

            .quiz-controls {
                flex-direction: column;
                align-items: center;
            }

            .btn {
                width: 100%;
                max-width: 200px;
            }
        }

        @media (max-width: 480px) {
            .quiz-container {
                padding: 15px;
            }

            .quiz-title {
                font-size: 1.8rem;
            }

            .score-circle {
                width: 120px;
                height: 120px;
                font-size: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="quiz-container">
        <div class="start-screen" id="startScreen">
            <div class="quiz-header">
                <h1 class="quiz-title">🧠 Interactive Quiz</h1>
                <p class="quiz-subtitle">Test your knowledge with our engaging quiz!</p>
            </div>
            
            <div class="feature-list">
                <h3>Features:</h3>
                <ul>
                    <li>✨ 10 carefully crafted questions</li>
                    <li>⏱️ 30-second timer per question</li>
                    <li>📊 Instant feedback and scoring</li>
                    <li>🏆 High score tracking</li>
                    <li>📱 Mobile-friendly design</li>
                </ul>
            </div>

            <div class="quiz-controls">
                <button class="btn btn-primary" onclick="startQuiz()">Start Quiz</button>
            </div>
        </div>

        <div class="quiz-screen" id="quizScreen">
            <div class="progress-bar">
                <div class="progress-fill" id="progressBar"></div>
            </div>

            <div class="question-info">
                <div class="question-counter" id="questionCounter">Question 1 of 10</div>
                <div class="timer" id="timer">30s</div>
            </div>

            <div class="question-text" id="questionText">Loading question...</div>

            <div class="options-container" id="optionsContainer">
            </div>

            <div class="quiz-controls">
                <button class="btn btn-secondary" onclick="skipQuestion()" id="skipBtn">Skip</button>
                <button class="btn btn-primary" onclick="nextQuestion()" id="nextBtn" disabled>Next</button>
            </div>
        </div>

        <div class="results-screen" id="resultsScreen">
            <div class="quiz-header">
                <h1 class="quiz-title">🎉 Quiz Complete!</h1>
            </div>

            <div class="score-circle" id="scoreCircle">0/10</div>

            <div class="results-text" id="resultsText">Great job!</div>

            <div class="high-scores" id="highScores">
                <h3>🏆 Your High Scores</h3>
                <div id="scoresList">No scores yet!</div>
            </div>

            <div class="quiz-controls">
                <button class="btn btn-primary" onclick="restartQuiz()">Play Again</button>
                <button class="btn btn-secondary" onclick="goHome()">Home</button>
            </div>
        </div>
    </div>

    <script>
        const questions = [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                correct: 1
            },
            {
                question: "In what year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            },
            {
                question: "Which programming language is known for web development?",
                options: ["Python", "JavaScript", "C++", "Java"],
                correct: 1
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                correct: 2
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                correct: 2
            },
            {
                question: "What is the fastest land animal?",
                options: ["Lion", "Cheetah", "Leopard", "Tiger"],
                correct: 1
            },
            {
                question: "Which ocean is the largest?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;
        let selectedOption = null;
        let timer = 30;
        let timerInterval = null;
        let gameQuestions = [];
        let userAnswers = [];

        const startScreen = document.getElementById('startScreen');
        const quizScreen = document.getElementById('quizScreen');
        const resultsScreen = document.getElementById('resultsScreen');
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');
        const questionCounter = document.getElementById('questionCounter');
        const timerElement = document.getElementById('timer');
        const progressBar = document.getElementById('progressBar');
        const nextBtn = document.getElementById('nextBtn');
        const skipBtn = document.getElementById('skipBtn');
        const scoreCircle = document.getElementById('scoreCircle');
        const resultsText = document.getElementById('resultsText');
        const highScores = document.getElementById('highScores');
        const scoresList = document.getElementById('scoresList');

        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        function saveScore(score) {
            const scores = getHighScores();
            const newScore = {
                score: score,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString()
            };
            scores.push(newScore);
            scores.sort((a, b) => b.score - a.score);
            scores.splice(5);
            
            window.savedScores = scores;
        }

        function getHighScores() {
            return window.savedScores || [];
        }

        function displayHighScores() {
            const scores = getHighScores();
            if (scores.length === 0) {
                scoresList.innerHTML = '<div class="score-item">No scores yet!</div>';
                return;
            }

            scoresList.innerHTML = scores.map((score, index) => 
                `<div class="score-item">
                    <span>#${index + 1} - ${score.score}/10</span>
                    <span>${score.date}</span>
                </div>`
            ).join('');
        }

        function startTimer() {
            timer = 30;
            updateTimerDisplay();
            
            timerInterval = setInterval(() => {
                timer--;
                updateTimerDisplay();
                
                if (timer <= 10) {
                    timerElement.classList.add('warning');
                }
                
                if (timer <= 0) {
                    clearInterval(timerInterval);
                    handleTimeUp();
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            timerElement.textContent = `${timer}s`;
        }

        function stopTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            timerElement.classList.remove('warning');
        }

        function handleTimeUp() {
            userAnswers[currentQuestionIndex] = null;
            showCorrectAnswer();
            setTimeout(nextQuestion, 2000);
        }

        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            selectedOption = null;
            userAnswers = [];
            gameQuestions = shuffleArray(questions);
            
            startScreen.classList.add('hidden');
            quizScreen.classList.add('active');
            
            loadQuestion();
        }

        function loadQuestion() {
            if (currentQuestionIndex >= gameQuestions.length) {
                endQuiz();
                return;
            }

            const question = gameQuestions[currentQuestionIndex];
            selectedOption = null;
            
            questionText.textContent = question.question;
            questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${gameQuestions.length}`;
            
            const progress = ((currentQuestionIndex) / gameQuestions.length) * 100;
            progressBar.style.width = `${progress}%`;
            
            optionsContainer.innerHTML = '';
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.innerHTML = `
                    <span class="option-label">${String.fromCharCode(65 + index)}</span>
                    ${option}
                `;
                optionElement.addEventListener('click', () => selectOption(index));
                optionsContainer.appendChild(optionElement);
            });
            
            nextBtn.disabled = true;
            skipBtn.disabled = false;
            
            startTimer();
        }

        function selectOption(index) {
            if (selectedOption !== null) return;
            
            selectedOption = index;
            userAnswers[currentQuestionIndex] = index;
            
            const options = optionsContainer.querySelectorAll('.option');
            options[index].classList.add('selected');
            
            nextBtn.disabled = false;
            stopTimer();
            
            setTimeout(showCorrectAnswer, 500);
        }

        function showCorrectAnswer() {
            const question = gameQuestions[currentQuestionIndex];
            const options = optionsContainer.querySelectorAll('.option');
            
            options.forEach((option, index) => {
                option.classList.add('disabled');
                if (index === question.correct) {
                    option.classList.add('correct');
                } else if (index === selectedOption && index !== question.correct) {
                    option.classList.add('incorrect');
                }
            });
            
            if (selectedOption === question.correct) {
                score++;
            }
        }

        function nextQuestion() {
            currentQuestionIndex++;
            loadQuestion();
        }

        function skipQuestion() {
            userAnswers[currentQuestionIndex] = null;
            stopTimer();
            showCorrectAnswer();
            setTimeout(nextQuestion, 2000);
        }

        function endQuiz() {
            stopTimer();
            
            progressBar.style.width = '100%';
            
            quizScreen.classList.remove('active');
            resultsScreen.classList.add('active');
            
            scoreCircle.textContent = `${score}/${gameQuestions.length}`;
            
            const percentage = Math.round((score / gameQuestions.length) * 100);
            let message = '';
            
            if (percentage >= 90) {
                message = '🌟 Outstanding! You\'re a quiz master!';
            } else if (percentage >= 70) {
                message = '🎉 Great job! Well done!';
            } else if (percentage >= 50) {
                message = '👍 Good effort! Keep learning!';
            } else {
                message = '📚 Keep studying and try again!';
            }
            
            resultsText.textContent = message;
            
            saveScore(score);
            displayHighScores();
        }

        function restartQuiz() {
            resultsScreen.classList.remove('active');
            startQuiz();
        }

        function goHome() {
            resultsScreen.classList.remove('active');
            startScreen.classList.remove('hidden');
            quizScreen.classList.remove('active');
        }

        window.savedScores = [];
    </script>
</body>
</html>
