# 🚀 DevStack

## 📖 Project Overview

**DevStack** is a modern, responsive web application designed for developers to manage, explore, and showcase tech stacks. The DevStack is a simple api based project that collect json data from api. But Here I use LLM model to create some array of object as json to use in this project. It is a react application where I use TypeScript. For styling I use tailwind css with daisyUI plugin. I use react-toastify for notifications. it built with a focus on seamless user experience, clean component architecture, and fast performance.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js (Vite)
- **Styling:** Tailwind CSS & daisyUI
- **Data Management:** JSON-based local state
- **Deployment:** Netlify
- **Notification:** react-toastify

---

## ✨ Key Features

1. **⚡ Using TSX (TypeScript XML):** Built with a focus on compile-time safety.
2. **📊 Interactive Notification:** Real-time visual updates with interactive notification from `react-toastify`.
3. **📂 Instant JSON Data Loading:** Asynchronous fetching of developer stack from local JSON array of object with responsive loading states.

---

## ❓ Question and Answer

### **i. What is JSX, and why is it used in React?**

> **Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like structure directly inside JavaScript code. It is used in React because it makes UI code readable, intuitive, and declarative while leveraging the full power of JavaScript.

---

### **ii. What is the difference between props and state?**

> **Answer:**
>
> - **Props (Properties):** Immutable data passed down from a parent component to a child component (read-only).
> - **State:** Mutable data managed internally within a component that can change over time and trigger re-renders when updated.

---

### **iii. What does the `useState` hook do, and where did you use it in this project?**

> **Answer:** The `useState` hook allows functional components to track and manage local state. In this project, it is use `src\components\technologies\Technologies.tsx` -in this component. It is use to select and manage the selected technologies.

---

### **iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

> **Answer:** `useEffect` performs side effects (like data fetching, event listeners, or manual DOM updates) after rendering. It was used with an empty dependency array `[]` to fetch the JSON data once when the component initially mounts.

---

### **v. Why does every item in a `.map()` list need a unique `key` prop?**

> **Answer:** React uses the `key` prop to identify which items have changed, been added, or removed. It optimizes performance by updating only the changed elements in the Virtual DOM instead of re-rendering the entire list.

---

### **vi. What is conditional rendering? Show one place you used it.**

> **Answer:** Conditional rendering means displaying different UI components or elements based on whether a condition is `true` or `false`.
>
> **Example:** Displaying an empty stack message when no items are selected, or rendering the stack list when items exist:
>
> ```tsx
> {
>   !hasItems ? (
>     <div className="border border-dashed border-gray-200 rounded-2xl p-8 text-center my-4">
>       <p className="text-sm text-gray-400 font-medium">
>         Your stack is empty.
>       </p>
>     </div>
>   ) : (
>     <div className="space-y-3 mb-6">
>       {selectedStack.map((item) => (
>         <div
>           key={item.id}
>           className="flex items-center justify-between p-3 border border-gray-100 rounded-2xl bg-white shadow-2xs"
>         >
>           <div className="flex items-center gap-3">
>             <img
>               src={item.icon}
>               alt={item.name}
>               className="w-8 h-8 object-contain"
>             />
>             <div>
>               <h4 className="text-sm font-bold text-gray-900 leading-tight">
>                 {item.name}
>               </h4>
>               <span className="text-[11px] text-gray-400 font-medium">
>                 {item.category}
>               </span>
>             </div>
>           </div>
>
>           <button
>             onClick={() => onRemove(item.id)}
>             className="text-gray-300 hover:text-gray-500 p-1 rounded-full transition-colors"
>             aria-label={`Remove ${item.name}`}
>           >
>             <svg
>               xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
>               className="h-5 w-5"
>               fill="none"
>               viewBox="0 0 24 24"
>               stroke="currentColor"
>               strokeWidth={1.5}
>             >
>               <path
>                 strokeLinecap="round"
>                 strokeLinejoin="round"
>                 d="M6 18L18 6M6 6l12 12"
>               />
>             </svg>
>           </button>
>         </div>
>       ))}
>     </div>
>   );
> }
> ```

---

### **vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

> **Answer:**
>
> - **Parent to Child:** Data is passed down as **props** (e.g., `<Child title={data} />`).
>
> **Example:** Passing technology data and selection state to the `TechnologyCard` component:
>
> ```tsx
> <TechnologyCard>   key={tech.id}
>   tech={tech}
>   onAdd={handleAddToStack}
>   isAdded={selectedStack.some((item) => item.id === tech.id)}
> />
> ```
>
> - **Child to Parent:** The parent passes a **callback function** as a prop to the child, and the child calls that function with data as an argument (e.g., `onSelectItem(id)`).
>
> **Example:** Triggering the parent's `onRemove` callback with the item's ID when a button is clicked:
>
> ```tsx
> <button
>   onClick={() => onRemove(item.id)}
>   className="text-gray-300 hover:text-gray-500 p-1 rounded-full transition-colors"
>   aria-label={`Remove ${item.name}`}
> >
> ```
