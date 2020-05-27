import React, { Component } from "react";
import CollectionItem from "../../components/items_component/items_component";
import data from "../../api/data.json";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./HomePage_styles";
export class HomePage extends Component {
  render() {
    return (
      <CollectionPageContainer>
        <CollectionTitle>Buy EMOZI</CollectionTitle>
        <CollectionItemsContainer>
          {data.map((item) => (
            <CollectionItem key={item.id} items={item} />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
  }
}

export default HomePage;
