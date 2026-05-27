# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# React Props 📦

Props in React are used to pass data from one component to another component.

Props ka full form hota hai:

> **Properties**

React me Props parent component se child component ko data bhejne ke liye use hote hai.

---

# 🤔 Props Ki Need Kyu Hoti Hai?

Socho agar hume same component ko different data ke sath baar-baar use karna ho.

Example:

- Different Users
- Different Cards
- Different Products

Agar Props nahi hote to har baar alag component banana padta.

Props reusable UI banane me help karte hai.

---

# 🧠 Real Life Example

Socho ek school me ID Card ka design same hai.

Bas har student ka:

- Name
- Roll Number
- Class

different hota hai.

Yaha:

- ID Card = Component
- Student Information = Props

---

# 📌 Basic Syntax

## Parent Component

```jsx
<User name="Sachin" age="20" />
```

Yaha:

- `name`
- `age`

props hai.

---

## Child Component

```jsx
function User(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </>
  )
}
```

---

# 🔥 Complete Example

## App.jsx

```jsx
import User from "./User"

function App() {
  return (
    <>
      <User name="Sachin" age="20" city="Mumbai" />
      <User name="Rahul" age="22" city="Delhi" />
      <User name="Aman" age="19" city="Indore" />
    </>
  )
}

export default App
```

---

## User.jsx

```jsx
function User(props) {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h2>Age : {props.age}</h2>
      <h3>City : {props.city}</h3>
    </div>
  )
}

export default User
```

---

# 🖥️ Output

```bash
Name : Sachin
Age : 20
City : Mumbai

Name : Rahul
Age : 22
City : Delhi

Name : Aman
Age : 19
City : Indore
```

---

# 🔍 Step By Step Understanding

## Step 1

```jsx
<User name="Sachin" />
```

Yaha `name="Sachin"` prop hai.

---

## Step 2

React automatically ek object banata hai:

```js
props = {
  name: "Sachin"
}
```

---

## Step 3

Child component me access:

```jsx
props.name
```

Output:

```bash
Sachin
```

---

# 📦 Props Always Object Hote Hai

```jsx
function User(props) {
  console.log(props)
}
```

Console Output:

```js
{
  name: "Sachin",
  age: "20"
}
```

---

# 🎯 Destructuring Props

Professional way.

## Without Destructuring

```jsx
function User(props) {
  return <h1>{props.name}</h1>
}
```

---

## With Destructuring

```jsx
function User({ name, age }) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </>
  )
}
```

---

# 📌 Different Types of Props

---

# 1. String Props

```jsx
<User name="Sachin" />
```

---

# 2. Number Props

```jsx
<User age={20} />
```

---

# 3. Boolean Props

```jsx
<User isStudent={true} />
```

---

# 4. Array Props

```jsx
<User skills={["React", "JS", "CSS"]} />
```

Access:

```jsx
props.skills[0]
```

---

# 5. Object Props

```jsx
<User data={{ city: "Mumbai", age: 20 }} />
```

Access:

```jsx
props.data.city
```

---

# 6. Function Props

Parent se function bhejna.

## Parent

```jsx
function App() {

  function greet() {
    alert("Hello")
  }

  return <User fun={greet} />
}
```

---

## Child

```jsx
function User(props) {
  return (
    <button onClick={props.fun}>
      Click
    </button>
  )
}
```

---

# 🔥 Most Important Concept

## Props are Read Only

Props ko child component me change nahi kar sakte.

❌ Wrong:

```jsx
props.name = "Rahul"
```

Props immutable hote hai.

---

# 📌 children Prop

React automatically `children` prop provide karta hai.

## Parent

```jsx
<Card>
  <h1>Hello</h1>
</Card>
```

---

## Child

```jsx
function Card(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
```

---

# 🧠 Flow of Props

```bash
Parent Component
        ↓
      Props
        ↓
Child Component
```

Data always:

> Parent → Child

---

# ⚠️ Common Mistakes

---

## 1. Curly Braces Bhul Jana

❌ Wrong

```jsx
<h1>props.name</h1>
```

✅ Correct

```jsx
<h1>{props.name}</h1>
```

---

## 2. Same Prop Name Confusion

```jsx
<User username="Sachin" />
```

Access:

```jsx
props.username
```

NOT:

```jsx
props.name
```

---

# 🎯 Real Project Uses

Props mostly use hote hai:

- Product Cards
- User Cards
- Buttons
- Navbar
- Blog Cards
- Notes App
- API Data Rendering

---

# 🚀 Mini Card Project Example

## App.jsx

```jsx
import Card from "./Card"

function App() {
  return (
    <>
      <Card
        name="iPhone 15"
        price="$999"
        image="image-url"
      />

      <Card
        name="Samsung S24"
        price="$899"
        image="image-url"
      />
    </>
  )
}

export default App
```

---

## Card.jsx

```jsx
function Card({ name, price, image }) {
  return (
    <div>
      <img src={image} width="200" />

      <h1>{name}</h1>

      <h2>{price}</h2>
    </div>
  )
}

export default Card
```

---

# 🛠️ Technologies Used

- React JS
- JavaScript
- JSX

---

# 📚 What You Learned

✅ What are Props  
✅ Why Props are used  
✅ Parent to Child Data Flow  
✅ Different Types of Props  
✅ Destructuring  
✅ Function Props  
✅ children Props  
✅ Real Project Usage  

---

# 👨‍💻 Author

Sachin Chandrawanshi

projects
