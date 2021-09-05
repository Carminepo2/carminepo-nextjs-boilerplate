import { FC } from "react";
import { ComponentProps } from "react";

const Pause: FC<ComponentProps<"svg">> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>Pause</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

export default Pause;
