import React, { useState } from "react";
import "../App.css";

const Tabs = ({ tabsConfig, defaultIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="tab-header">
        {tabsConfig.map((tab, index) => (
          <button
            key={`tab-${index}`}
            onClick={() => handleClick(index)}
            className={selectedIndex === index ? "active" : ""}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabpanel-wrapper">
        {tabsConfig.map((tab, index) => (
          <section
            key={`tabpanel-${index}`}
            hidden={selectedIndex !== index}
          >
            {tab.content}
          </section>
        ))}
      </div>
    </>
  );
};

export default Tabs;
