import React, { useState } from "react";
import RexSideBar from "../Components/RexSideBar";
const RexPage = () => {
  const [activeTab, setActiveTab] = useState("home");
  return <RexSideBar active={activeTab}>


    <div className="alert alert">We are the world champions</div>
  </RexSideBar>;
};

export default RexPage;
