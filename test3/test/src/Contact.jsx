import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useQuery } from "react-query";
const Contact = () => {
  const ref = useRef(null);
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingBarProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 0;
        } else {
          const diff = Math.random() * 10;
          return prevProgress + diff;
        }
      });
    }, 500);

    return () => clearInterval(timer);
  }, [location]);
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
      res.json()
    )
  );
  if (isLoading)
    return (
      <img
        alt="preload"
        style={{ width: "100px", height: "100px" }}
        src="https://media1.giphy.com/media/2uJ0EhZnMAMDe/giphy.gif?cid=6c09b95272cde861a27010ddb89c09c287180da08220d3f4&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=g"
      />
    );
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      {/* <LoadingBar progress={loadingBarProgress} /> */}
      <h1>CONTACT</h1>
      <Link to="/">Home</Link>
      {data &&
        data.map((element, index) => (
          <div key={index}>
            <h1>{element.id}</h1>
            <Link to={`/contact/${element.id}`}>{element.name}</Link>
          </div>
        ))}
    </div>
  );
};

export default Contact;
