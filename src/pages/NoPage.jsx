import React from "react";
import err404 from "./../img/page-not-found.jpg";

const NoPage = () => {
  return (
    <div className="noPage">
      <div>
        <img src={err404} width="100%" alt="404 Page Not Found Error" />
      </div>
    </div>
  );
};

export default NoPage;
