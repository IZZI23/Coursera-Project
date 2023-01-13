import React, { useState } from "react";

function GrayButton(props) {
  const [activeTab, setActiveTab] = useState(false);
  const handleClick = () => {
    setActiveTab(!activeTab);
  };

  return (
    <button
      onClick={handleClick}
      className={`${activeTab ? "button active" : "button"}`}
    >
      {props.children}
    </button>
  );
}

export default GrayButton;
