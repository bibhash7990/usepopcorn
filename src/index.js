import React from "react";
import ReactDOM from "react-dom/client";
// import { useState } from "react";
import "./index.css";
import App from "./App";
import App2 from "./challenge-geolocation";
// import StarRating from "./StarRating";
// import CodingChallenge from "./codingChallenge";
// import "./style.css";
// import CurrencyConverter from "./Currency-converter.js";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movies was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okey", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} />
    <Test /> */}
    {/* <CodingChallenge /> */}
    {/* <CurrencyConverter /> */}
    <App2 />
  </React.StrictMode>
);
