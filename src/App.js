import React, { useState } from "react";
import axios from "axios";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import "./App.css";

const App = (props) => {
  //hook for handling the long url received from the user
  const [longUrl, setLongUrl] = useState("");

  // hook to set and get the api data
  const [data, setData] = useState("");

  // hook to identify if api is still loading
  const [loading, setLoading] = useState(true);

  // preventing default submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const url =
      "https://api.shrtco.de/v2/shorten?url=";
    axios
      .get(url + longUrl)
      .then((resp) => {
        setData(resp.data);
        setLoading(!loading);
      })
      .catch((error) => {
        console.log("Error occured : ", error);
      });
  };
  // console.log(data);

  return (
    <>
      <Nav />

      <Hero />
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={longUrl}
            onChange={(event) =>
              setLongUrl(event.target.value)
            }
            placeholder="Shorten a link here..."
            required
          />
          <button type="submit">
            Shorten it!
          </button>
          <div>
            {!loading &&
              `shorted link : ${data.result.short_link}`}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default App;
