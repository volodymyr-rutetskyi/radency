import React from "react";

const ActionButton = ({ content, action }) => {
  return <div className="action-btn">
      <button onClick={action}>
        {content}
      </button>
  </div>;
};

export default ActionButton;
