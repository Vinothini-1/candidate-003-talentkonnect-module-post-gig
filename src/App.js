import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fake API simulation
    console.log("POST /api/gigs", { ...form, bounty: 1 });
    console.log("POST /api/credits", { reason: "gig-post" });

    setMessage("Gig posted! +1 Credit ");
    setForm({ title: "", description: "", category: "" });
  };

  return (
    <div className="container">
      <h1>Post a Gig</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title (max 60):
          <input
            name="title"
            maxLength="60"
            value={form.title}
            onChange={handleChange}
            required
          />
          <small>{form.title.length}/60</small>
        </label>

        <label>
          Description (max 200):
          <textarea
            name="description"
            maxLength="200"
            value={form.description}
            onChange={handleChange}
            required
          />
          <small>{form.description.length}/200</small>
        </label>

        <label>
          Category Tag:
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Bounty:
          <input value="$1" readOnly />
        </label>

        <button type="submit">Post Gig</button>
      </form>

      {message && <div className="success">{message}</div>}
    </div>
  );
}

export default App;
