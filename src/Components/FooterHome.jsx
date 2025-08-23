import React from "react";
import Style from "../Components/Admin/CreateEvent.module.css";

const FooterHome = () => {
  return (
    <>
      <footer className={`min-vh-100 ${Style.era}`}>
        <footer className={`${Style.foot} p-4 text-center text-light bg-success`}>
          Designeed with the help of Class September
        </footer>
      </footer>
    </>
  );
};

export default FooterHome;
