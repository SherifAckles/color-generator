import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const SingleColor = ({ rgb, weight, i, hex }) => {
  const [alert, setAlert] = useState(false);

  const hexValue = `#${hex}`;

  // CLEANING THE COPIED TO Clipboard TEXT AFTER 3 SEC
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return ()=> clearTimeout(timeOut)
  },[alert])

  // CONVERTING THE ARRAY RGB TO A STRING
  // eslint-disable-next-line react/prop-types
  const bcg = rgb.join(",");
  console.log(bcg);
  return (
    <article
      className={`color ${i > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        // COPY TO THE Clipboard
        navigator.clipboard.writeText(hexValue);
      }}
    >
      single color
      <p className="percent-value"> {weight}% </p>
      <p className="percent-value"> {hexValue} </p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
