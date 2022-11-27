import React, { useState } from "react";
import urlInputImage from "../images/bg-shorten-desktop.svg";
import urlInputImageMobile from "../images/bg-shorten-mobile.svg";
import GetShortUrl from "./GetShortUrl";
import axios from "axios";
import { v4 as uuidV4 } from "uuid";
import Loader from "./Loader";

const UrlInput = () => {
  // const initialState = [];
  const [input, setInput] = useState("");
  const [url, setUrl] = useState(null);
  const [urlArray, setUrlArray] = useState([]);
  let [loading, setLoading] = useState(false);
  const baseURL = `https://api.shrtco.de/v2/shorten?url=${input}`;

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onButtonEnter = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.get(baseURL).then((response) => {
        setUrl(response.data);
        setUrlArray([...urlArray, response.data]);
        // console.log(urlArray);
      });
    } catch (error) {
      console.log(error.response.data.error);
      alert(error.response.data.error);
    }
    setLoading(false);
  };

  return (
    <div className="urlInput">
      <img src={urlInputImageMobile} alt="" className="imgmobile" />
      <img src={urlInputImage} alt="" className="img" />
      <form className="content" onSubmit={onButtonEnter}>
        <input
          type="text"
          name=""
          id=""
          value={input}
          placeholder="Shorten a link here..."
          required
          onChange={onInputChange}
        />
        {/* <button onClick={onButtonEnter}>Shorten It!</button> */}
        <button>Shorten It!</button>
      </form>
      <Loader loading={loading} />
      {/* {url && <GetShortUrl input={input} url={url} />} */}
      <div className="getshorturlcontainer">
        {url &&
          urlArray.map((urlA) => (
            <GetShortUrl input={input} url={urlA} key={uuidV4()} />
          ))}{" "}
      </div>
    </div>
  );
};

export default UrlInput;
