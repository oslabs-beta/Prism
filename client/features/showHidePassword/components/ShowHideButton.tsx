import React, { FC } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
interface signProps {
  showPass: Boolean;
  showHandler: () => void;
}
export const ShowHideButton: FC<signProps> = ({ showPass, showHandler }) => {
  return (
    <button onClick={() => showHandler()}>
      {showPass ? <FaEyeSlash /> : <FaEye />}{" "}
    </button>
  );
};
