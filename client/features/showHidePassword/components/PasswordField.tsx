import React, { FC, MutableRefObject, useEffect, useState } from "react";
import { ShowHideButton } from "./ShowHideButton";
import { usePasswordShown } from "../hooks/usePasswordShown";
interface PasswordProps {
  passwordRef: MutableRefObject<HTMLInputElement>;
  id: string;
  description?: string;
}
export const PasswordField: FC<PasswordProps> = ({
  passwordRef,
  id,
  description,
}: PasswordProps) => {
  const [inputType, setInputType] = useState<string>("password");
  const [isShown, flipPassword] = usePasswordShown();
  useEffect(() => {
    setInputType(isShown ? "text" : "password");
  }, [isShown]);
  return (
    <div className="flex flex-row">
      <input
        ref={passwordRef}
        id={id}
        onChange={(e) => (passwordRef.current = e.target)}
        name="password"
        type={inputType}
        placeholder={description}
      />
      <ShowHideButton showPass={isShown} clickHandler={flipPassword} />
    </div>
  );
};
