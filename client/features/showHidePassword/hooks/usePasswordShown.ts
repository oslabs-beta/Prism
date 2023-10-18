import { useState } from "react";
export const usePasswordShown = (
  initialValue = false
): [boolean, () => void] => {
  const [isPasswordShown, setPasswordShown] = useState<boolean>(initialValue);
  const flipPasswordShown = () => {
    setPasswordShown(!isPasswordShown);
  };
  return [isPasswordShown, flipPasswordShown];
};
