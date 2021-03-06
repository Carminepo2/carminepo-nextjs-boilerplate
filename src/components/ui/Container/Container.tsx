import cn from "classnames";
import React, { FC } from "react";

interface ContainerProps {
  className?: string;
  children?: any;
  el?: HTMLElement;
  clean?: boolean;
}

const Container: FC<ContainerProps> = ({ children, className, el = "div", clean }) => {
  const rootClassName = cn(className, {
    "max-w-6xl mx-auto px-8": !clean,
  });

  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
