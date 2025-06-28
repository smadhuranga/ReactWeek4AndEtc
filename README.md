
# React Learning Journey: Beyond 🚀

![React Banner](https://user-images.githubusercontent.com/26399680/127779530-6a7c3288-5e3b-4b5b-8a2f-76a4e0c5d1b1.png)

Welcome to my React learning repository! This collection contains my progress through React concepts from Week 4 onward, featuring modern React patterns, hooks, state management, and practical component implementations. Perfect for fellow learners and developers looking for real-world examples.

```jsx
// Sample component from this repository
const InteractiveCard = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div 
      className={`card ${isActive ? 'active' : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <h3>{title}</h3>
      {isActive && <div className="content">{children}</div>}
    </div>
  );
};
```

## ✨ Featured Projects

### 1. **Dynamic Form Builder**
![Form Builder Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2s2d3c0eTRzYXZzcWp4cGt1cWZ4Y3NpM2xrZ2QxN3RlM2U2c2R2cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qE1gZJgF3X7XQZq/giphy.gif)

**Key Features:**
- Dynamic field generation with validation
- State management using custom hooks
- Form data persistence with localStorage

### 2. **Theme Switcher with Context API**
![Theme Switcher](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Q5dXl6bTQ1aG9tY3p3bGJ6c2Y5dW1rZ2ZqZzZ0bGZ4bmN6dGZ5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qE1gZJgF3X7XQZq/giphy.gif)

**Key Concepts:**
- Global state management with Context
- Custom `useTheme` hook
- CSS variables for theme switching

### 3. **API Data Fetcher**
```jsx
// Custom hook implementation
const useApiData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
```

## 🧠 Key Concepts Covered

| Concept | Implementation Example | Path |
|---------|------------------------|------|
| **Advanced Hooks** | useReducer, useMemo, useCallback | `/hooks-demo` |
| **Context API** | Global state management | `/theme-context` |
| **Component Patterns** | Compound components, Render props | `/component-patterns` |
| **Performance** | Memoization, Code splitting | `/performance` |
| **Forms** | Formik integration, Validation | `/forms` |

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/smadhuranga/ReactWeek4AndEtc.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run any demo project:**
   ```bash
   cd path/to/project
   npm start
   ```

## 🧩 Project Structure

```
ReactWeek4AndEtc/
├── week4/
│   ├── advanced-hooks/
│   ├── context-api-demo/
│   └── form-validation/
├── week5/
│   ├── api-integration/
│   ├── performance-optimization/
│   └── routing-demo/
├── utilities/
│   ├── custom-hooks/
│   └── helper-functions/
└── README.md
```

## 💡 Learning Resources

- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [React Patterns](https://reactpatterns.com/)
- [useHooks](https://usehooks.com/) - Collection of modern hooks
- [Epic React](https://epicreact.dev/) - Advanced React patterns

## 🤝 Contribution

Found an interesting way to improve these examples? Contributions are welcome!
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy Coding!** 🎉  
Let's connect on [GitHub](https://github.com/smadhuranga) and build amazing things together!