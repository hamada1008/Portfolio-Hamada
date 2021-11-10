import React from "react";
import errorGif from "../../Assets/error.gif";
import "../../Style/errorScreen.scss";

const RedirectComponent = () => {
  return (
    <div className="error-screen">
      <div>
        <h1>Oops</h1>
        <h4>We can't seem to find the page you were looking for</h4>
        <h5>error code: 404</h5>
        <p>
          Click<a href="/">&nbsp;here&nbsp;</a>to go back home
        </p>
      </div>
      <div>
        <img src={errorGif} alt="error" />
      </div>
    </div>
  );
};

export default RedirectComponent;
