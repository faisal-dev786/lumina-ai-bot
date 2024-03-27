import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
const SignupLayout = ({ children }) => {
  return (
    <div>
      <div className="page-width py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="primary-heading md:leading-[70.4px] leading-[2.25rem]">
              Create an Albot that serves your sales teams and your customer
              support{" "}
            </h1>
            <p className="secondary-para my-3 md:my-9">
              Support at every step of the way.
            </p>
            <div
              style={{ boxShadow: "2px 2px 27px 0px #A0A0A04D" }}
              className="bg-[#F9F9FF] border-[#000000] border rounded-2xl p-3 md:p-5"
            >
              <img
                className="max-w-44 md:max-w-72"
                src="sign-up-box-img.png"
                alt=""
              />
              <div className="flex items-center gap-3 pt-32 md:pt-64 ">
                <PrimaryBtn className="nona-para">What can you do?</PrimaryBtn>
                <PrimaryBtn className="nona-para">Lorem ipsum </PrimaryBtn>
                <PrimaryBtn
                  style={{ background: "#13BC69" }}
                  className="nona-para"
                >
                  See it in action!
                </PrimaryBtn>
              </div>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;
