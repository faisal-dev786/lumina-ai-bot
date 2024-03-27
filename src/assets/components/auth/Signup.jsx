import React from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import SecondaryBtn from "../buttons/SecondaryBtn";
import SignupLayout from "../layouts/SignupLayout";
const Signup = () => {
  return (
    <div>
      <SignupLayout>
        <form action="">
          <div className="bg-[#F9F9FF] p-8 rounded-2xl">
            <h2 className="secondary-heading mb-8">Acc ount creation</h2>
            <div className="relative mb-8">
              <p
                style={{
                  top: "-51px",
                  left: "25px",
                }}
                className="tertiary-para pt-10 pb-2 absolute px-1"
              >
                E-mail
              </p>
              <input
                className="p-5 w-full border border-[#D9D9E8] rounded-xl outline-none"
                placeholder="info@gmail.com"
                type="email"
                maxLength={25}
              />
            </div>
            <div className="relative mb-8">
              <p
                style={{
                  top: "-51px",
                  left: "25px",
                }}
                className="tertiary-para pt-10 pb-2 absolute px-1"
              >
                Phone
              </p>
              <input
                className="p-5 w-full border border-[#D9D9E8] rounded-xl outline-none"
                placeholder="+7 995 123 50 40"
                type="text"
                maxLength={25}
              />
            </div>
            <div className="relative mb-8">
              <p
                style={{
                  top: "-51px",
                  left: "25px",
                }}
                className="tertiary-para pt-10 pb-2 absolute px-1"
              >
                Confirmation code
              </p>
              <p
                style={{
                  top: "19px",
                  right: "25px",
                }}
                className="absolute penta-para"
              >
                <span style={{ color: "#13BC69" }}>Send code:</span>{" "}
                <span style={{ color: "#9A9A9A" }}>00:58</span>
              </p>
              <input
                className="p-5 w-full border border-[#D9D9E8] rounded-xl outline-none"
                placeholder="08-08"
                type="text"
                maxLength={25}
              />
            </div>
            <div className="relative mb-8">
              <p
                style={{
                  top: "-51px",
                  left: "25px",
                }}
                className="tertiary-para pt-10 pb-2 absolute px-1"
              >
                Create a password
              </p>
              <p
                style={{
                  top: "25px",
                  right: "25px",
                }}
                className="absolute penta-para"
              >
                <span>
                  <RiEyeCloseLine />
                </span>
              </p>
              <input
                className="p-5 w-full border border-[#D9D9E8] rounded-xl outline-none"
                placeholder="****************"
                type="password"
                maxLength={25}
              />
            </div>
            <div className="relative mb-8">
              <p
                style={{
                  top: "-51px",
                  left: "25px",
                }}
                className="tertiary-para pt-10 pb-2 absolute px-1"
              >
                Сompany name
              </p>
              <input
                className="p-5 w-full border border-[#D9D9E8] rounded-xl outline-none"
                placeholder="Dfs@dsfe2"
                type="text"
                maxLength={25}
              />
            </div>
            <div className="relative mb-8">
              <p
                style={{
                  top: "-51px",
                  left: "25px",
                }}
                className="tertiary-para pt-10 pb-2 absolute px-1"
              >
                Link for website
              </p>
              <input
                className="p-5 w-full border border-[#D9D9E8] rounded-xl outline-none"
                placeholder="Dfs@dsfe2.com"
                type="text"
                maxLength={25}
              />
            </div>
            <div className="flex md:tems-center gap-5 pl-1">
              <span
                style={{ color: "#13BC69" }}
                className="hexa-para mt-2 md:mt-0"
              >
                <FaRegCircleCheck />
              </span>
              <p className="hexa-para">
                Lorem Ipsum is simply dummy text of the printing and{" "}
              </p>
            </div>

            <SecondaryBtn className="nona-para my-5">
              Create an account
            </SecondaryBtn>
            <div className="md:flex items-center justify-between">
              <div className="">
                <p style={{ color: "#747689" }} className="hepta-para">
                  Already have an account?
                </p>
                <p
                  style={{ color: "#303EF7" }}
                  className="hepta-para cursor-pointer"
                >
                  Sign in
                </p>
              </div>
              <div>
                <p
                  stylestyle={{ color: "#F66C6A" }}
                  className="hepta-para cursor-pointer"
                >
                  Forgot your password?
                </p>
              </div>
            </div>
          </div>
        </form>
      </SignupLayout>
    </div>
  );
};

export default Signup;
