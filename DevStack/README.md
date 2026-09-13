# 🚀 DevStack

## 📖 Description

**DevStack** is a modern, responsive web application designed for developers to manage, explore, and showcase tech stacks. It is built using React and TypeScript, leveraging local JSON data to manage technology stacks with full compile-time safety. Styled with Tailwind CSS and daisyUI, the application focuses on clean component architecture, interactive notifications via `react-toastify`, and fast user performance.

DevStack uses local JSON data to manage technology stacks with full compile-time safety. It focuses on clean component architecture, interactive notifications via `react-toastify`, and fast user performance.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js (Vite + TSX)
- **Styling:** Tailwind CSS & daisyUI
- **Data Management:** Local JSON Data & React State
- **Deployment:** Netlify
- **Notifications:** react-toastify# 🚀 DevStack

A modern, responsive web application that lets developers **manage, explore, and showcase their tech stacks**. Built with React + TypeScript and styled with Tailwind CSS & daisyUI — fast, type-safe, and interactive.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React.js** (Vite + TSX) | Frontend framework |
| **Tailwind CSS & daisyUI** | Styling |
| **Local JSON Data & React State** | Data management |
| **Netlify** | Deployment |
| **react-toastify** | Notifications |

---

## ✨ Key Features

1. **⚡ Type-Safe TSX** — Built completely in TypeScript XML for robust component props and compile-time safety.
2. **📊 Interactive Notifications** — Visual feedback using `react-toastify` when adding or removing items from the stack.
3. **📂 Dynamic Stack Management** — Real-time state updates and conditional rendering for empty and populating stack states.

---

## ❓ React Q&A

### **i. What is JSX, and why is it used in React?**

> **Answer:** JSX (JavaScript XML) is a syntax extension that lets us write HTML-like code inside JavaScript. It makes UI code easier to read and write, while still allowing us to use full JavaScript logic.

---

### **ii. What is the difference between props and state?**

> **Answer:**
> - **Props:** Read-only data passed from a parent component to a child.
> - **State:** Data managed inside a component that changes over time and triggers a re-render when updated.

---

### **iii. What does the `useState` hook do, and where did you use it in this project?**

> **Answer:** `useState` stores local data inside a functional component. In this project, I used it inside `src/components/technologies/Technologies.tsx` to keep track of the array of selected stack items.

---

### **iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

> **Answer:** `useEffect` handles side effects like data fetching. I used it with an empty dependency array `[]` so the JSON data is fetched only once, when the component first mounts.

---

### **v. Why does every item in a `.map()` list need a unique `key` prop?**

> **Answer:** React uses the `key` to identify each item between renders. A unique key lets React update only the items that actually changed instead of re-rendering the whole list.

---

### **vi. What is conditional rendering? Show one place you used it.**

> **Answer:** Conditional rendering means showing different UI depending on a condition (like a piece of state).
>
> **Example:** Showing an empty message when no items exist, otherwise mapping through the stack items:

```tsx
{!hasItems ? (
  <div className="border border-dashed border-gray-200 rounded-2xl p-8 text-center my-4">
    <p className="text-sm text-gray-400 font-medium">
      Your stack is empty.
    </p>
  </div>
) : (
  <div className="space-y-3 mb-6">
    {selectedStack.map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between p-3 border border-gray-100 rounded-2xl bg-white shadow-2xs"
      >
        <div className="flex items-center gap-3">
          <img
            src={item.icon}
            alt={item.name}
            className="w-8 h-8 object-contain"
          />
          <div>
            <h4 className="text-sm font-bold text-gray-900 leading-tight">
              {item.name}
            </h4>
            <span className="text-[11px] text-gray-400 font-medium">
              {item.category}
            </span>
          </div>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          className="text-gray-300 hover:text-gray-500 p-1 rounded-full transition-colors"
          aria-label={`Remove ${item.name}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    ))}
  </div>
)}
```

---

### **vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

> **Answer:**
> - **Parent → Child:** Pass data down using props (e.g. `<Child data={value} />`).
>
> **Example:** Passing item data and state to `TechnologyCard`:

```tsx
<TechnologyCard
  key={tech.id}
  tech={tech}
  onAdd={handleAddToStack}
  isAdded={selectedStack.some((item) => item.id === tech.id)}
/>
```

> - **Child → Parent:** The parent passes a function as a prop, and the child calls that function with data to send it back up.
>
> **Example:** Triggering the parent handler `onRemove` from inside a button click:

```tsx
<button onClick={() => onRemove(item.id)}>
  Remove
</button>
```


---