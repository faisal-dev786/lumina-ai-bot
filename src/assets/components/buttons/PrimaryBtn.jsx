import React from "react";

const PrimaryBtn = ({
  children,
  style,
  onClick,
  className: customClassName,
}) => {
  const defaultClassName = "rounded-3xl px-3 md:px-5 py-5";
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

export default PrimaryBtn;
