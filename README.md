🧠 Quiz Chamber Pro

A full-stack quiz web application built using Django, Bootstrap, HTML, CSS, and JavaScript, featuring quiz attempts tracking and performance history.

🚀 Overview

Quiz Chamber Pro is a simple yet powerful quiz platform where users can:

Attempt quizzes instantly
View results immediately
Track their past quiz attempts
Improve learning through performance history

The project focuses on simplicity, usability, and learning analytics.

💡 Features
📝 Take quizzes with multiple-choice questions
⚡ Instant score calculation
📊 Quiz attempt history tracking
👤 User-based attempt storage
📱 Responsive UI (Mobile + Desktop)
🎨 Clean Bootstrap-based interface
🏗️ Tech Stack

Frontend:

HTML5
CSS3
Bootstrap 5
JavaScript

Backend:

Django (Python)

Database:

SQLite (default) / PostgreSQL (optional)

📁 Project Structure
quiz_chamber/
│
├── quiz_chamber/        # Project settings
├── quiz/                # Main app
│   ├── models.py       # Database models
│   ├── views.py        # Business logic
│   ├── urls.py         # Routing
│
├── templates/          # HTML templates
│   ├── home.html
│   ├── quiz.html
│   ├── result.html
│   ├── history.html
│
├── static/             # CSS / JS files
│
├── db.sqlite3
└── manage.py

🧠 Database Models
Question Model

Stores quiz questions and options.

QuizAttempt Model ⭐

Stores user quiz history:

Username
Score
Total questions
Date of attempt

👉 This enables performance tracking over time

⚙️ How It Works
User opens the app
Selects Start Quiz
Answers MCQ questions
Submits quiz
System calculates score
Result is displayed
Attempt is stored in database
User can view history anytime

📊 Key Feature — Quiz History

The system stores all quiz attempts:
Score achieved
Total questions
Date & time
User name

This allows users to:
Track improvement
Analyze performance
Compare past attempts

🎯 Core Pages
Home Page → Start quiz / navigate
Quiz Page → Answer questions
Result Page → View score
History Page → View past attempts

📱 UI Design Principles
Mobile-first design
Bootstrap responsive layout
Large clickable buttons
Simple navigation flow
Minimal typing (tap-based interaction)

🧪 Example Flow
Home → Quiz → Result → History

🛠️ Installation & Setup
1. Clone Repository
git clone https://github.com/aryanpawar_4912/Quiz.git
cd quiz-chamber-pro
2. Create Virtual Environment
python -m venv env
env\Scripts\activate   # Windows
3. Install Dependencies
pip install django
4. Run Server
python manage.py runserver
5. Open in Browser
http://127.0.0.1:8000/

🌟 Future Improvements
🔐 User authentication system
🏆 Leaderboard system
⏱️ Timer-based quizzes
📊 Graph-based analytics (Chart.js)
☁️ Deployment on Render / Vercel
📱 PWA support
🧑‍💻 Author

Aryan Pawar
B.Tech / Diploma (Computer Engineering)
Passionate about Full Stack Development & AI/ML

📌 Note

This project was built as part of a web development learning + assessment task, focusing on:

Full-stack integration
Database handling
UI/UX simplicity
Real-world usability

🏆 Why this project stands out
Real backend + database usage
Practical quiz system
History tracking feature
Clean and scalable architecture
Mobile-first design approach
