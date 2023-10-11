import React, { FC } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
interface signProps {
  showPass: boolean;
  clickHandler: () => void;
}
export const ShowHideButton: FC<signProps> = ({ showPass, clickHandler }) => {
  return (
    <button
      className="rounded bg-transparent"
      onClick={clickHandler}
      type="button"
    >
      {showPass ? (
        <FaEyeSlash title="hide password" />
      ) : (
        <FaEye title="show password" />
      )}{" "}
    </button>
  );
};
