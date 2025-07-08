# EM Node Framework

![npm](https://img.shields.io/npm/v/em-node-framework)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A lightweight, modular Node.js framework for building scalable server-side applications with Express and MongoDB.

---

## 🚀 Features

- Modular MVC architecture
- Easy routing setup
- Built-in `.env` and config files
- Middleware support (body-parser, dotenv)
- MongoDB connection helper
- Git & README auto-generated
- Ready-to-use scripts for dev, start

---

## 📦 Installation

```bash
npx em-node-framework your-project-name
cd your-project-name
npm install
npm run dev
```

Then open: http://localhost:3000

✅ Ensure MongoDB is running locally, or update .env with your remote MongoDB URL.

## ⚙️ Quick Setup

After scaffold, your .env file is created automatically:

```env
PORT=3000
DB_URL=mongodb://localhost:27017/your-project-name
DB_NAME=your-project-name
JWT_SECRET=your_jwt_secret_key
```

## 🧩 Project Structure

```
your-project-name/
├── controllers/
│   └── user.controller.js
├── db/
│   ├── config.js
│   └── connection-url.js
├── models/
│   └── user.model.js
├── routes/
│   └── index.js
├── services/
│   └── user.service.js
├── .env
├── .env.example
├── index.js
├── package.json
├── README.md
└── .git/
```

## 🔁 Routing Example

Define your routes inside routes/index.js

```js
module.exports = (app) => {
  app.use(`${baseRoute}/users`, require("./user.route"));
};
```

Create your routes inside routes/user.route.js and connect to controller functions:

```js
const userController = require("../controllers/user.controller");

routes.post("", userController.create);

routes.get("", userController.read);
```

### 🛠 Available Scripts

| Script        | Description               |
| ------------- | ------------------------- |
| `npm run dev` | Start server with nodemon |
| `npm start`   | Start server with Node    |

### 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

MIT © 2025 falgunshah7
