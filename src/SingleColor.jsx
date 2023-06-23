import { useState, useEffect } from "react";
import rgbToHex from "./utils";

// eslint-disable-next-line react/prop-types
const SingleColor = ({ rgb, weight, i,hex }) => {
  const [alert, setAlert] = useState(false);

  const hexValue= `#${hex}`

  // CONVERTING THE ARRAY RGB TO A STRING
  const bcg = rgb.join(",");
  console.log(bcg);
  return (
    <article
      className={`color ${i > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      single color
      <p className="percent-value"> {weight}% </p>
      <p className="percent-value"> {hexValue} </p>
    </article>
  );
};

export default SingleColor;
