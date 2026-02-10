# 🚀 Stack Overflow Clone

> A full-stack Q&A platform built with Next.js 14 and Appwrite, inspired by Stack Overflow. Created as part of learning from Udemy course by **Hitesh Chaudhary Sir**.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Appwrite](https://img.shields.io/badge/Appwrite-15.0-f02e65?style=flat&logo=appwrite)](https://appwrite.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Key Features Implemented](#-key-features-implemented)
- [Screenshots](#-screenshots)
- [Learning Journey](#-learning-journey)
- [Acknowledgments](#-acknowledgments)

## ✨ Features

### 🔐 Authentication & Authorization
- **Email & Password Authentication** - Secure user registration and login
- **OAuth Integration** - Login with Google and GitHub
- **Protected Routes** - Middleware-based route protection
- **Session Management** - Persistent user sessions with Zustand

### 💬 Core Q&A Functionality
- **Ask Questions** - Rich markdown editor for composing questions
- **Answer Questions** - Provide detailed answers with markdown support
- **Accept Answers** - Question authors can mark the best answer
- **Comments** - Add comments to both questions and answers
- **Edit & Delete** - Full CRUD operations for your content

### 👍 Engagement System
- **Upvote/Downvote** - Vote on questions and answers
- **Vote Tracking** - Visual feedback and vote counts
- **User Reputation** - Track contributions and engagement

### 🔍 Discovery & Navigation
- **Search Functionality** - Find questions quickly
- **Filter & Sort** - Organize questions by various criteria
- **User Profiles** - View user questions, answers, and votes
- **Responsive Design** - Seamless experience across all devices

### 🎨 UI/UX
- **Modern Interface** - Clean, intuitive design with Tailwind CSS
- **Dark Mode Support** - Theme customization
- **Animations** - Smooth transitions with Framer Motion
- **Toast Notifications** - Real-time feedback for user actions
- **Confetti Effects** - Celebrate achievements

## 🛠 Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Zustand](https://zustand-demo.pmnd.rs/)** - State management

### Backend & Database
- **[Appwrite](https://appwrite.io/)** - Backend-as-a-Service (BaaS)
  - Database for storing questions, answers, comments, and votes
  - Authentication with OAuth providers
  - Storage for user avatars and attachments
  - Real-time subscriptions

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[Immer](https://immerjs.github.io/immer/)** - Immutable state updates

### UI Components & Libraries
- **[@uiw/react-md-editor](https://uiwjs.github.io/react-md-editor/)** - Markdown editor
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Tabler Icons](https://tabler.io/icons)** - Additional icons
- **[Canvas Confetti](https://www.kirilv.com/canvas-confetti/)** - Celebration effects

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.14.0 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Appwrite Account** - [Sign up for free](https://cloud.appwrite.io/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stackoverflow-clone.git
   cd stackoverflow-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Appwrite Backend**

   - Create a new project in [Appwrite Console](https://cloud.appwrite.io/)
   - Create the following databases and collections:

   **Database: `main`**
   - **questions** collection
     - title (string, required)
     - content (string, required)
     - authorId (string, required)
     - tags (string array)
     - votes (integer, default: 0)
     - createdAt (datetime)
     - updatedAt (datetime)
   
   - **answers** collection
     - questionId (string, required)
     - content (string, required)
     - authorId (string, required)
     - isAccepted (boolean, default: false)
     - votes (integer, default: 0)
     - createdAt (datetime)
     - updatedAt (datetime)
   
   - **comments** collection
     - parentId (string, required) - question or answer ID
     - parentType (string, required) - "question" or "answer"
     - content (string, required)
     - authorId (string, required)
     - createdAt (datetime)
   
   - **votes** collection
     - parentId (string, required)
     - parentType (string, required) - "question" or "answer"
     - userId (string, required)
     - voteType (string, required) - "upvote" or "downvote"
     - createdAt (datetime)

   - Configure **OAuth Providers** (Google, GitHub) in Appwrite Authentication settings
   - Set up appropriate **indexes** for better query performance
   - Configure **permissions** for each collection

4. **Configure environment variables**

   Copy `.env.sample` to `.env` and fill in your Appwrite credentials:
   ```bash
   cp .env.sample .env
   ```

   See [Environment Variables](#-environment-variables) section for details.

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_HOST_URL=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id_here
APPWRITE_API_KEY=your_api_key_here
```

### Getting Appwrite Credentials:

1. **Project ID**: 
   - Go to [Appwrite Console](https://cloud.appwrite.io/)
   - Select your project
   - Copy the Project ID from Settings

2. **API Key**:
   - Navigate to your project settings
   - Go to "API Keys" section
   - Create a new API key with appropriate scopes
   - Copy the generated key


## 📁 Project Structure

```
stackoverflow-clone/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── (auth)/              # Authentication routes
│   │   │   ├── login/           # Login page
│   │   │   └── register/        # Registration page
│   │   ├── api/                 # API routes
│   │   ├── questions/           # Question pages
│   │   │   ├── [id]/           # Question detail page
│   │   │   └── ask/            # Ask question page
│   │   ├── users/              # User profile pages
│   │   │   └── [id]/           # User detail page
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── components/             # React components
│   │   ├── AuthProvider.tsx   # Authentication context
│   │   ├── Header.tsx          # Navigation header
│   │   ├── QuestionCard.tsx   # Question display card
│   │   ├── AnswerCard.tsx     # Answer display card
│   │   └── ...                # Other reusable components
│   ├── models/                 # Appwrite database models
│   │   ├── client/            # Client-side SDK
│   │   └── server/            # Server-side SDK
│   ├── store/                  # Zustand state management
│   │   └── Auth.ts            # Authentication state
│   ├── utils/                  # Utility functions
│   └── middleware.ts          # Next.js middleware for auth
├── public/                     # Static assets
├── .env                       # Environment variables (create from .env.sample)
├── .env.sample               # Environment variables template
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎯 Key Features Implemented

### Authentication Flow
- Registration with email verification
- Secure password handling
- OAuth integration with Google and GitHub
- Session persistence across page reloads
- Protected routes using Next.js middleware

### Question Management
- Create questions with rich markdown formatting
- Edit and delete your own questions
- Tag-based categorization
- Search and filter functionality
- View question statistics (views, votes, answers)

### Answer System
- Submit detailed answers with markdown support
- Accept answer functionality for question authors
- Edit and delete your own answers
- Sort answers by votes or date

### Voting Mechanism
- Upvote/downvote questions and answers
- Visual feedback for vote actions
- Vote count tracking
- One vote per user per item
- Ability to change vote

### User Profiles
- View user information and statistics
- Track user questions, answers, and votes
- User reputation system
- Activity timeline

## 📸 Screenshots

> Add screenshots of your application here to showcase the UI

## 📚 Learning Journey

This project was built as part of my learning journey following the excellent Udemy course by **Hitesh Chaudhary Sir**. Through this project, I learned:

- 🎓 **Modern Full-Stack Development** - Building production-ready applications with Next.js 14
- 🔧 **Backend as a Service** - Leveraging Appwrite for rapid development
- 🎨 **UI/UX Design** - Creating responsive, accessible interfaces with Tailwind CSS
- 🔐 **Authentication & Security** - Implementing secure auth flows and OAuth
- 📊 **State Management** - Managing complex application state with Zustand
- 🚀 **Deployment** - Deploying and maintaining a production application
- 🧪 **Best Practices** - Writing clean, maintainable, and scalable code

## 🤝 Acknowledgments

- **[Hitesh Chaudhary](https://www.youtube.com/@HiteshCodeLab)** - For the amazing Udemy course and tutorial
- **[Appwrite](https://appwrite.io/)** - For providing an excellent Backend-as-a-Service platform
- **Stack Overflow** - For the inspiration and feature ideas
- The open-source community for all the amazing libraries and tools

## 📝 License

This project is created for educational purposes as part of a Udemy course.

## 🔗 Links

- **Course Instructor**: [Hitesh Chaudhary YouTube]((https://www.youtube.com/@HiteshCodeLab))
- **Appwrite Documentation**: [https://appwrite.io/docs](https://appwrite.io/docs)
- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)

---
