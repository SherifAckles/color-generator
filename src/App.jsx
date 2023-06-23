import { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [err, setErr] = useState(false);
  const [list, setList] = useState(new Values(`#2596be`).all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setErr(true);
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
            placeholder="#2596be"
            className={`${err ? "error" : null}`}
          />

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, i) => {
          return <SingleColor key={i} {...color} i={i} hex={color.hex} />;
        })}
        {err && (
          <p className="error-message">
            Invalid color format. Please provide a valid color.
          </p>
        )}
      </section>
    </>
  );
}

export default App;
