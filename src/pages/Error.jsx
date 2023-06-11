import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
        </div>
        <h3>Ooops!</h3>
        <p>We can't seem to find page you are looking for</p>
        <Link to="/">Back Home</Link>
      </Wrapper>
    );
  }
};

export default Error;
