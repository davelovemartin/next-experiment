import React from "react";
import { footer } from "./styles.css.ts";

const Footer: React.FC<{ title: string }> = ({ title }) => (
  <footer className={footer}>{title}</footer>
);

export default Footer;
