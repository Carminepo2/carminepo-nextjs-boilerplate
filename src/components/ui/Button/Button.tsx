import React, { forwardRef } from "react";
import s from "./Button.module.css";
import cn from "classnames";

import { ButtonProps } from "./Button.d";
import Spinner from "../Spinner";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonRef(props, buttonRef) {
  const { className, type, children, loading, actionType, ...rest } = props;

  const rootClassName = cn(
    s.root,
    {
      [s.primary]: !actionType || actionType === "primary",
      [s.secondary]: actionType === "secondary",
      [s.tertiary]: actionType === "tertiary",
      [s.disabled]: rest.disabled,
      [s.loading]: loading,
    },
    className
  );

  return (
    <button ref={buttonRef} type={type || "button"} className={`${rootClassName}`} {...rest}>
      {loading ? <Spinner /> : children}
    </button>
  );
});

export default Button;
