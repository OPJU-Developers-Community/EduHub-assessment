import { useState } from "react";
import cn from "@/utils/cn";
import { BtnSpinner } from "./icons/BtnSpinner";

const Button = (props) => {
  const {
    children,
    className,
    onClick = () => {},
    isLoading = false,
    isDisable = false,
    startIcon,
  } = props;
  const [isBtnClick, setIsBtnClick] = useState(false);

  const handlButtonClick = () => {
    setIsBtnClick(true);

    setTimeout(() => {
      setIsBtnClick(false);
    }, 200);

    onClick();
  };

  return (
    <button
      type="button"
      className={cn(
        "bg-blue-700 text-white py-2 px-5 font-medium text-sm border border-transparent rounded-lg flex items-center",
        className,
        {
          "bg-blue-800 focus:outline-none focus:ring focus:ring-slate-200":
            isBtnClick,
        },
        {
          "bg-gray-400 text-gray-800": isLoading,
        },
        {
          "bg-gray-400 text-gray-800 cursor-not-allowed": isDisable,
        }
      )}
      onClick={handlButtonClick}
      disabled={isLoading}
    >
      {!isDisable ? isLoading && <BtnSpinner /> : null}
      {startIcon && startIcon}
      {children}
    </button>
  );
};

export default Button;
