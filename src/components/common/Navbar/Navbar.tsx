import { FC } from "react";
import Link from "next/link";
import s from "./Navbar.module.css";
import NavbarRoot from "./NavbarRoot";
import { Container } from "@components/ui";

interface Link {
  href: string;
  label: string;
}
interface NavbarProps {
  links?: Link[];
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container>
      <div className={s.nav}></div>
    </Container>
  </NavbarRoot>
);

export default Navbar;
