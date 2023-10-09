import React, { FC } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
interface signProps {
  showPass: Boolean;
  clickHandler: () => void;
}
export const ShowHideButton: FC<signProps> = ({ showPass, clickHandler }) => {
  return (
    <button onClick={() => clickHandler()}>
      {showPass ? (
        <FaEyeSlash title="hide password" />
      ) : (
        <FaEye title="show password" />
      )}{" "}
    </button>
  );
};
