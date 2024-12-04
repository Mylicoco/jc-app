import React from "react";
import SHOP_DATA from "../../../shop.data.js";
import CollectionPreview from "../../previewcollections/collectionpreview.component.jsx";
class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map((collection) => (
          <CollectionPreview title={collection.title} items={collection.items} key={collection.id} />
        ))}
      </div>
    );
  }
}

export default Shop;
