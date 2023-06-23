import { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [err, setErr] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (error) {
      setErr("Invalid color format. Please provide a valid color.");
      console.error(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${err ? "error" : null}`}
          />

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="color">
        {err && <p className="error-message">{err}</p>}
        <h4>list goes here</h4>
      </section>
    </>
  );
}

export default App;
