import { FC } from "react";
import cn from "classnames";
import s from "./Footer.module.css";
import { Container } from "@components/ui";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  const rootClassName = cn(s.root, className);

  return (
    <footer className={rootClassName}>
      <Container></Container>
    </footer>
  );
};

export default Footer;
