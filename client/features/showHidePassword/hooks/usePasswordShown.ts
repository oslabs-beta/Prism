import { useState } from "react";
export const usePasswordShown = (initialValue = false) => {
  const [isPasswordShown, setPasswordShown] = useState(initialValue);
  const flipPasswordShown = () => {
    setPasswordShown(!isPasswordShown);
  };
  return [isPasswordShown, flipPasswordShown];
};
