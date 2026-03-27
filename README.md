# 🚀 Zenvyra – Full Stack Rental Listing Platform









\

---

# 🌐 Live Website

🔗 https://zenvyra-app.onrender.com

---

# 📦 GitHub Repository

🔗 https://github.com/JEETJM/zenvyra

---

# 🌟 Overview

**Zenvyra** is a modern full-stack Airbnb-style rental listing platform where users can explore, create, review, and manage property listings with a premium UI and smooth animations.

🔥 Designed with **performance, scalability, and clean architecture** in mind.

⚠️ This project is created for **learning purposes only** and is not affiliated with Airbnb.

---

# ✨ Core Features

## 🏠 Listing System

* View all listings (Homepage auto-load)
* View detailed listing page
* Create new listing with image upload
* Edit & update listing
* Delete listing

---

## ⭐ Review System

* Add reviews to listings
* Delete reviews
* User-based review ownership
* Dynamic rating UI

---

## 👤 Authentication & Security

* Login / Signup system
* Passport.js authentication
* Session-based login
* Protected routes (authorization)
* Password hashing (passport-local-mongoose)

---

## 🖼️ Image Upload

* Cloudinary integration
* Multer middleware
* Optimized image storage

---

## 🗺️ Maps & Location

* Mapbox integration
* Marker popup with listing details
* Location-based visualization

---

## 🔍 Search & Filtering

* Search by title, location, country
* Category-based filtering (future-ready)
* Dynamic UI filtering

---

## 🎨 UI / UX

* Fully responsive design 📱
* Dark / Light mode 🌙
* Smooth animations & hover effects
* Premium Airbnb-style cards
* Clean navbar + footer

---

## ⚡ Backend Features

* RESTful routing
* MVC architecture
* Async error handling (WrapAsync)
* Custom error middleware
* Joi validation schemas
* Modular controllers & routes

---

# 🛠 Tech Stack

## 💻 Frontend

* HTML5
* CSS3 (Advanced Animations)
* JavaScript
* Bootstrap
* EJS Template Engine

## ⚙️ Backend

* Node.js
* Express.js

## 🗄️ Database

* MongoDB
* Mongoose

## 🔐 Authentication

* Passport.js
* express-session

## ☁️ Cloud Services

* Cloudinary (Images)
* Mapbox (Maps)
* Render (Deployment)

---

# 📂 Project Structure

```bash
zenvyra/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── Routes/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── views/
│   ├── listings/
│   ├── reviews/
│   ├── users/
│   ├── includes/
│   └── layouts/
│
├── public/
│   ├── css/
│   └── js/
│
├── uploads/
├── utils/
├── init/
│
├── app.js
├── middleware.js
├── cloudConfig.js
├── Schema.js
├── .env
├── package.json
└── README.md
```

---

# ⚙️ Installation Guide

## 🔹 1. Clone Repository

```bash
git clone https://github.com/JEETJM/zenvyra.git
cd zenvyra
```

## 🔹 2. Install Dependencies

```bash
npm install
```

## 🔹 3. Setup Environment Variables

Create `.env` file:

```env
MONGO_URL=your_mongodb_url
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_key
CLOUD_API_SECRET=your_secret
MAP_TOKEN=your_mapbox_token
SESSION_SECRET=your_secret
```

---

## 🔹 4. Run Project

```bash
npm run dev
```

or

```bash
node app.js
```

---

# 🔐 Security Features

* Password hashing & salting
* Session protection
* Input validation (Joi)
* Secure cookies
* Protected routes

---

# 🚀 Future Improvements

* ❤️ Wishlist system
* 🏨 Booking system
* 💳 Payment integration
* 🧑‍💻 Admin dashboard
* 💬 Real-time chat

---

# 📸 Screenshots (Add Later)

* Homepage UI
* Listing cards
* Show page
* Review system
* Dark mode

---

# 🤝 Contributing

Contributions are welcome!

```bash
1. Fork the repo
2. Create a new branch
3. Commit changes
4. Push & create PR
```

---

# 👨‍💻 Author

**JEET MONDAL**

---

# 💙 Support

If you like this project:

⭐ Star the repo
🍴 Fork it
📢 Share it

---
