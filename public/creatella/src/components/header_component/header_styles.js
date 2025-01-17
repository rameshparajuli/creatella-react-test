// import styled, { css } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 150px;
  padding: 5px;
  /* border: 1px solid black; */
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptioinsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;

// we can do by calling <OptionLink as='div'> so it reduce code
// That's why we are programmer ,we reduce everything

// Remove all comment after knowing this, Ramesh !
