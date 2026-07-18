<div align="center">

# 🔐 Authentication System

### A Secure Full-Stack Authentication System built with Next.js 16

<p align="center">

A production-inspired authentication system implementing secure user registration, login, email verification, password recovery, JWT authentication and protected routes using modern web technologies.

</p>

---

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge)

</div>

---

# 📖 Overview

Authentication is the backbone of almost every modern web application.

This project demonstrates how a complete authentication workflow can be implemented using the latest **Next.js App Router**, **MongoDB**, and **TypeScript** while following secure authentication practices.

Instead of stopping at basic login/signup, this application implements the entire authentication lifecycle including email verification, password recovery, protected routes and secure JWT cookie-based sessions.

---

# ✨ Features

## 🔑 Authentication

- User Registration
- Secure Login
- Secure Logout
- JWT Authentication
- HTTP-only Authentication Cookies
- Protected Routes
- User Session Handling

---

## 📧 Email Features

- Email Verification
- Verification Token Generation
- Forgot Password Workflow
- Password Reset via Email
- Secure Reset Tokens
- Token Expiration Support

---

## 🔒 Security

- Password Hashing using bcrypt
- JWT Token Authentication
- HTTP-only Cookies
- Protected API Routes
- Authentication Middleware
- Environment Variable Configuration
- Secure Password Storage

---

## 💻 Backend

- Next.js 16 App Router
- API Route Handlers
- MongoDB Database
- Mongoose ODM
- Nodemailer Integration
- TypeScript
- Modular Project Structure

---

## 🎨 Frontend

- Responsive UI
- Modern Forms
- Toast Notifications
- Client-side Validation
- Clean Authentication Pages

---

# ⚙️ Tech Stack

| Technology | Usage |
|------------|------|
| Next.js 16 | Full Stack Framework |
| React 19 | UI |
| TypeScript | Type Safety |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| Nodemailer | Email Service |
| Axios | HTTP Requests |
| Tailwind CSS | Styling |

---

# 📂 Project Structure

```text
src
│
├── app
│   ├── api
│   │   └── users
│   │       ├── signup
│   │       ├── login
│   │       ├── logout
│   │       ├── me
│   │       ├── verifyemail
│   │       ├── forgotpassword
│   │       └── resetpassword
│   │
│   ├── login
│   ├── signup
│   ├── profile
│   ├── forgotpassword
│   ├── resetpassword
│   └── verifyemail
│
├── dbConfig
├── helpers
├── models
└── proxy.ts
```

---

# 🚀 Authentication Flow

```text
User Signup
      │
      ▼
Password Hashing (bcrypt)
      │
      ▼
Store User in MongoDB
      │
      ▼
Send Verification Email
      │
      ▼
Verify Account
      │
      ▼
Login
      │
      ▼
Generate JWT
      │
      ▼
Store JWT in HTTP-only Cookie
      │
      ▼
Access Protected Routes
```

---

# 🔄 Password Recovery Flow

```text
Forgot Password
      │
      ▼
Generate Reset Token
      │
      ▼
Send Reset Email
      │
      ▼
User Opens Link
      │
      ▼
Enter New Password
      │
      ▼
Password Re-hashed
      │
      ▼
Database Updated
```

---

# 🛠 Installation

Clone the repository

```bash
git clone https://github.com/othzer/Authentication-system-fullstack-nextjs.git
```

Install dependencies

```bash
npm install
```

Create an environment file

```env
MONGO_URI=

TOKEN_SECRET=

DOMAIN=

MAIL_HOST=

MAIL_PORT=

MAIL_USER=

MAIL_PASS=
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/users/signup` | Register User |
| POST | `/api/users/login` | Login User |
| GET | `/api/users/logout` | Logout User |
| GET | `/api/users/me` | Get Logged-in User |
| POST | `/api/users/verifyemail` | Verify Email |
| POST | `/api/users/forgotpassword` | Send Password Reset Email |
| POST | `/api/users/resetpassword` | Reset Password |

---

# 🧠 What I Learned

This project helped strengthen my understanding of:

- Authentication Architecture
- JWT Authentication
- HTTP-only Cookies
- Password Hashing
- Secure API Development
- MongoDB with Mongoose
- Next.js App Router
- Email Verification Workflows
- Password Recovery Systems
- TypeScript Backend Development

---

# 🚀 Future Improvements

- Google OAuth
- GitHub OAuth
- Refresh Tokens
- Role-Based Access Control (RBAC)
- Two-Factor Authentication (2FA)
- Rate Limiting
- Docker Support
- Unit & Integration Tests
- Account Management Dashboard
- User Activity Logs

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📄 License

Proprietary — © OtzrLabs. All rights reserved.

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a Star!

It helps support future open-source projects and encourages continued development.

Made with ❤️ by **OtzrLabs**

</div>
