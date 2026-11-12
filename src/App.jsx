import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // handles both Enter key and Add button click

    const value = item.trim();
    if (value === "") return;

    setItems([...items, { id: Date.now() + Math.random(), text: value }]);
    setItem("");
  };

  const handleRemove = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div className="container">
      <h1>Add Items to List</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="item"
          placeholder="Type something and press Enter"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {items.length === 0 ? (
        <p className="empty">No items yet. Add your first one!</p>
      ) : (
        <ul>
          {items.map((i) => (
            <li key={i.id}>
              <span>{i.text}</span>
              <button
                type="button"
                className="remove"
                onClick={() => handleRemove(i.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;