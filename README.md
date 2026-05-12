# 🚀 Full Stack Development with Rails 8 and React JS

A full stack web application built with **Ruby on Rails 8** as the backend API and **React JS** as the frontend. This project demonstrates modern full stack development practices including RESTful APIs, React components, Bootstrap UI, and background job processing.

> 📺 Inspired by [Full Stack Development with Rails 7 and React Tutorial](https://www.youtube.com/playlist?list=PL6SEI86zExmvbxK9wlG3lfm98PFLxtxvP) — upgraded and implemented with Rails 8.

---

## 📸 Features

- ✅ RESTful API with Rails 8
- ✅ React JS frontend with functional components and hooks
- ✅ Bootstrap 5 UI components
- ✅ Question and Answer management system
- ✅ Like / Dislike functionality with real-time API updates
- ✅ Filter questions by tags (React, Ruby, Rails, Vue, jQuery)
- ✅ Create new questions via Bootstrap modal form
- ✅ Rails validation error messages displayed in UI
- ✅ Loading state management
- ✅ Docker support with auto-generated Dockerfile
- ✅ RuboCop for code quality

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Ruby on Rails 8 |
| Frontend | React JS |
| Styling | Bootstrap 5 |
| Database | SQLite (development) |
| API | RESTful JSON API |
| Code Quality | RuboCop |

---

## ⚙️ Requirements

- Ruby `3.3.0`
- Rails `8.x`
- Node.js `20.x`
- Yarn
- SQLite3

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jigarbhatt2711/rails8-react-fullstack.git
cd rails8-react-fullstack
```

### 2. Install Ruby dependencies

```bash
bundle install
```

### 3. Install JavaScript dependencies

```bash
yarn install
```

### 4. Setup database

```bash
rails db:create
rails db:migrate
rails db:seed
```

### 5. Start the development server

```bash
bin/dev
```

This starts both Rails server and React frontend using `Procfile.dev`.

### 6. Open in browser

```
http://127.0.0.1:3000
```

---

## 📁 Project Structure

```
rails8-react-fullstack/
├── app/
│   ├── controllers/
│   │   └── api/
│   │       └── v1/
│   │           └── questions_controller.rb   # RESTful API
│   ├── models/
│   │   └── question.rb                       # Question model
│   └── javascript/
│       └── components/
│           ├── App.jsx                        # Root component
│           ├── QuestionList.jsx               # Questions listing
│           ├── QuestionDetail.jsx             # Single question card
│           ├── NewQuestion.jsx                # Create question modal
│           ├── NoSearchFoundMessage.jsx       # Empty state component
│           └── Loader.jsx                     # Loading component
├── config/
│   └── routes.rb                             # API routes
├── db/
│   └── migrate/                              # Database migrations
├── Dockerfile                                # Docker configuration
├── Procfile.dev                              # Development process
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/questions` | Fetch all questions |
| GET | `/api/v1/questions?tag=React` | Filter questions by tag |
| POST | `/api/v1/questions` | Create a new question |
| PUT | `/api/v1/questions/:id` | Update question (like/dislike) |
| DELETE | `/api/v1/questions/:id` | Delete a question |

---

## 🐳 Docker Setup

```bash
# Build Docker image
docker build -t rails8-react-fullstack .

# Run container
docker run -p 3000:3000 rails8-react-fullstack
```

---

## 🧪 Running Tests

```bash
# Run all tests
rails test

# Run with RuboCop
rubocop
```

---

## 📦 Key Gems

```ruby
gem "rails", "~> 8.0"        # Rails 8
gem "solid_queue"             # Background jobs
gem "solid_cache"             # Database backed cache
gem "bootsnap"                # Boot performance
gem "rubocop-rails-omakase"   # Code quality
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch — `git checkout -b feature/amazing-feature`
3. Commit your changes — `git commit -m 'Add amazing feature'`
4. Push to the branch — `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Jigar Bhatt**
- GitHub: [@jigarbhatt2711](https://github.com/jigarbhatt2711)
- LinkedIn: [Jigar Bhatt](https://www.linkedin.com/in/jigarbhatt2711)
- Experience: 12+ years in Ruby on Rails and Full Stack Development

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Full Stack Development with Rails 7 and React — YouTube Tutorial](https://www.youtube.com/playlist?list=PL6SEI86zExmvbxK9wlG3lfm98PFLxtxvP)
- [Ruby on Rails Documentation](https://guides.rubyonrails.org)
- [React Documentation](https://react.dev)
- [Bootstrap 5 Documentation](https://getbootstrap.com)