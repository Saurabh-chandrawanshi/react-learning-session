# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# React Components 📦

This folder contains all the basic concepts and examples related to React Components.

Components are the building blocks of React applications.  
They help create reusable, clean, and maintainable UI.

---

# 📚 Topics Covered

## 1. Functional Components

Learn how to create modern React components using functions.

### Example

```jsx
function App() {
  return <h1>Hello React</h1>
}

export default App
```

---

## 2. JSX

Understand how HTML-like syntax works inside JavaScript.

### Features

- HTML inside JavaScript
- Dynamic Content
- Expressions in JSX
- JSX Rules

---

## 3. Component Reusability

Create reusable UI elements.

### Example

```jsx
function Button() {
  return <button>Click Me</button>
}
```

Use multiple times:

```jsx
<Button />
<Button />
<Button />
```

---

## 4. Import & Export

Learn how components are connected together.

### Export

```jsx
export default Navbar
```

### Import

```jsx
import Navbar from "./Navbar"
```

---

## 5. Nested Components

Use components inside other components.

### Example

```jsx
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}
```

---

# 🛠️ Technologies Used

- React JS
- JavaScript
- JSX
- CSS

---

# 📂 Folder Structure

```bash
02-components/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

# ⚙️ Installation

```bash
git clone https://github.com/your-username/react-learning.git

cd 02-components

npm install

npm run dev
```

---

# 🎯 Learning Goals

By completing this section, you will learn:

- What are Components
- How React UI works
- How to create reusable UI
- How to structure React applications
- How to split UI into small parts

---

# 🚀 Output

You will be able to:

✅ Create Components  
✅ Reuse Components  
✅ Import & Export Components  
✅ Build Structured UI  

---

# 👨‍💻 Author

Sachin Chandrawanshi
