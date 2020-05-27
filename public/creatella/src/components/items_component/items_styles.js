import styled from "styled-components";
import CustomButton from "../custom_button/custom_button_component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    height: 200px;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  display: none;
  @media screen and (max-width: 800px) {
    top: 50px;
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;

    /* padding: top right buttom left  */
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 75%;
  padding: 1px;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  text-align: left;
`;
