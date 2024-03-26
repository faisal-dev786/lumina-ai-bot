import React from "react";

const App = () => {
  return (
    <div className="bg-[white] pb-12">
      {" "}
      <h1 className="text-3xl text-center font-bold underline">Hello world!</h1>
      <div className="relative">
        <p
          style={{
            top: "-53px",
            left: "25px",
            background: "white",
          }}
          className="primary-para pt-10 pb-2 absolute px-1"
        >
          Town
        </p>
        <input
          className="p-[15px] w-full border rounded-xl outline-none"
          placeholder="Town name"
          type="text"
          maxLength={25}
        />
      </div>
    </div>
  );
};

export default App;
