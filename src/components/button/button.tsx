import React from "react";
type ButtonType = {
  onClick: () => void;
  children: any;
};

export const Button: React.FC<ButtonType> = (props) => {
  const { onClick, children } = props;

  return (
    <button className="bg-blue-700 btn" onClick={onClick}>
      {children}
    </button>
  );
};
