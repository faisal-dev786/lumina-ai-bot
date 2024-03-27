import React from "react";

const SecondaryBtn = ({
  children,
  style,
  onClick,
  className: customClassName,
}) => {
  const defaultClassName = "rounded-full px-8 py-3";
  const finalClassName = customClassName
    ? `${customClassName} ${defaultClassName}`
    : defaultClassName;

  return (
    <button
      onClick={onClick}
      className={finalClassName}
      style={style ? style : { background: "#7B66FF" }}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
