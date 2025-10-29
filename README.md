# TicTacToe-game
A simple and interactive Tic-Tac-Toe web game built using HTML, CSS, and JavaScript.
Play as “O” or “X”, enjoy the smooth interface, and get instant win/draw detection!

🚀 Features:
🎮 Two-player gameplay (O vs X)
🧠 Automatic win detection
🤝 Detects draw when all boxes are filled
🔄 Reset & New Game options
💬 Winner/Draw message display
⚡ Fast, responsive, and easy to use

🛠️ Tech Stack:
HTML5 – for structure
CSS3 – for styling and layout
JavaScript (ES6) – for game logic and interactivity

📂 Project Structure:
📦 Tic-Tac-Toe
 ┣ 📜 index.html
 ┣ 🎨 style.css
 ┣ ⚙️ script.js
 ┗ 📘 README.md

🧠 Game Logic Overview:
   1.The game board is made up of 9 buttons.
   2.Player O starts the game.
   3.After each turn, the script checks all possible winning patterns:
          [0,1,2], [3,4,5], [6,7,8],
          [0,3,6], [1,4,7], [2,5,8],
          [0,4,8], [2,4,6]
   4.If all 9 boxes are filled and there’s no winner → game is declared a draw.
   5.Players can reset or start a new game anytime.

🖥️ How to Run Locally
1.Clone this repository
git clone https://github.com/amanpirated/tic-tac-toe.git

2.Navigate to the project folder
cd tic-tac-toe

3.Open index.html in your browser
start index.html   # Windows
open index.html    # macOS

🧑‍💻 Author
Suminder Singh
📧 sumindersingh195@gmail.com
🌐 github.com/amanpirated
