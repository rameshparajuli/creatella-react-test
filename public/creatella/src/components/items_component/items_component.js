import React from "react";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
} from "./items_styles";
const CollectionItem = ({ items }) => {
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={items.imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>emoji: {items.name}</NameContainer>
        <NameContainer>price: ${items.price}</NameContainer>
        <NameContainer>size: ${items.size}</NameContainer>
      </CollectionFooterContainer>
      <AddButton>Add to cart</AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
