# BrainQuest
# 🧠 QuizMaster Pro

An interactive, responsive web-based quiz application built with vanilla JavaScript, HTML5, and CSS3. Test your knowledge with engaging multiple-choice questions, real-time feedback, and comprehensive scoring.

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/quizmaster-pro) _(Replace with your GitHub Pages URL)_

## 📸 Screenshots

<div align="center">
  <img src="screenshots/desktop-view.png" alt="Desktop View" width="45%">
  <img src="screenshots/mobile-view.png" alt="Mobile View" width="45%">
</div>

## ✨ Features

### Core Functionality
- **📝 Dynamic Question Bank** - 10 carefully curated questions across various topics
- **⏱️ Smart Timer System** - 30-second countdown per question with visual warnings
- **📊 Real-time Scoring** - Instant feedback and comprehensive score calculation
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices

### Enhanced User Experience
- **✅ Instant Feedback** - Color-coded correct/incorrect answer highlighting
- **🏆 High Score Tracking** - Persistent leaderboard with top 5 scores
- **🔀 Question Randomization** - Different question order each playthrough
- **📈 Progress Tracking** - Visual progress bar and question counter
- **⏭️ Skip Functionality** - Option to skip difficult questions
- **🎨 Modern UI/UX** - Glassmorphism design with smooth animations

## 🛠️ Technologies Used

- **HTML5** - Semantic structure and accessibility
- **CSS3** - Modern styling with Flexbox, Grid, and animations
- **Vanilla JavaScript** - DOM manipulation, event handling, and game logic
- **LocalStorage API** - Client-side data persistence
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox

## 🏗️ Technical Highlights

```javascript
// Key Features Implementation
- Timer Management System
- Dynamic DOM Manipulation
- Local Storage Integration
- Responsive Event Handling
- CSS Animation Control
- Progress State Management
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/quizmaster-pro.git
   ```

2. **Navigate to project directory**
   ```bash
   cd quizmaster-pro
   ```

3. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Local server (recommended)
   python -m http.server 8000
   # or
   npx serve .
   ```

4. **Visit** `http://localhost:8000` in your browser

## 📱 Usage

1. **Start Quiz** - Click "Start Quiz" on the welcome screen
2. **Answer Questions** - Select your answer from multiple choices
3. **Track Progress** - Monitor your progress with the visual progress bar
4. **View Results** - Get detailed feedback and see your final score
5. **Check Leaderboard** - Compare your performance with previous attempts
6. **Play Again** - Restart for a new randomized quiz experience

## 🎯 Code Structure

```
quizmaster-pro/
├── index.html          # Main application file
├── README.md           # Project documentation
├── screenshots/        # Application screenshots
│   ├── desktop-view.png
│   ├── mobile-view.png
│   └── results-screen.png
└── LICENSE            # MIT License
```

## 🎨 Design Features

- **Modern Glassmorphism** - Translucent cards with backdrop blur
- **Gradient Backgrounds** - Dynamic color schemes
- **Smooth Animations** - CSS transitions and keyframe animations
- **Interactive Elements** - Hover effects and click feedback
- **Typography Hierarchy** - Clear visual hierarchy with custom fonts
- **Color Psychology** - Strategic use of colors for better UX

## 📊 Performance Optimizations

- **Vanilla JavaScript** - No framework overhead
- **Efficient DOM Updates** - Minimal reflows and repaints
- **CSS Animations** - Hardware-accelerated transitions
- **Responsive Images** - Optimized for different screen sizes
- **Local Storage** - Client-side data persistence

## 🔧 Customization

### Adding New Questions
```javascript
const questions = [
    {
        question: "Your question here?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: 0 // Index of correct answer (0-3)
    }
    // Add more questions...
];
```

### Modifying Timer Duration
```javascript
// Change timer duration in seconds
let timer = 30; // Modify this value
```

### Styling Customization
- Colors: Modify CSS custom properties in `:root`
- Fonts: Update `font-family` declarations
- Animations: Adjust transition durations and effects

## 🌟 Future Enhancements

- [ ] **Category-based Questions** - Multiple quiz categories
- [ ] **Difficulty Levels** - Easy, Medium, Hard questions
- [ ] **Multiplayer Mode** - Real-time multiplayer functionality
- [ ] **Question Editor** - Admin panel for question management
- [ ] **Analytics Dashboard** - Detailed performance analytics
- [ ] **Social Sharing** - Share results on social media
- [ ] **Audio Support** - Sound effects and background music
- [ ] **Dark/Light Theme** - Theme switching functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Portfolio: [your-portfolio.com](https://your-portfolio.com)

## 🙏 Acknowledgments

- Design inspiration from modern quiz applications
- Icons and fonts from Google Fonts and Unicode
- Color palette inspired by modern web design trends

## 📈 Project Stats

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ for learning and sharing knowledge*
