import React from "react";
type InlineButtonType = {
  onClick: () => void;
};

export const InlineButton: React.FC<InlineButtonType> = (props) => {
  const { onClick } = props;

  return (
    <div className="border-2">
      <button className="border-0 bg-transparent" onClick={onClick}></button>
    </div>
  );
};
