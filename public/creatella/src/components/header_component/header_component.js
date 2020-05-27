import React from "react";

import logo from "../../assets/creatella-logo.png";
import {
  HeaderContainer,
  LogoContainer,
  OptioinsContainer,
  OptionLink,
} from "./header_styles";

export const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <img width="100%" height="100%" className="logo" src={logo} alt="Logo" />
    </LogoContainer>
  </HeaderContainer>
);
