import { FC } from "react";
import { ComponentProps } from "react";

const Play: FC<ComponentProps<"svg">> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>Play</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default Play;
