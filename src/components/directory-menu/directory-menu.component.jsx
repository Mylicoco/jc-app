import MenuItem from "../menu-item/menu-item.component";
import React from "react";
import "./directory-menu.style.scss";
class DirectoryMenu extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          name: "Hats",
          imageUrl: `https://picsum.photos/seed/clothing-store-${1}/400/300`,
        },
        {
          id: 2,
          name: "Jackets",
          imageUrl: `https://picsum.photos/seed/clothing-store-${6}/400/300`,
        },
        {
          id: 3,
          name: "Sneackers",
          imageUrl: `https://picsum.photos/seed/clothing-store-${3}/400/300`,
        },
        {
          id: 4,
          name: "Womens",
          imageUrl: `https://picsum.photos/seed/clothing-store-${4}/400/300`,
          size:`large`,
        },
        {
          id: 5,
          name: "Mens",
          imageUrl: `https://picsum.photos/seed/clothing-store-${5}/400/300`,
          size:`large`,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, name, imageUrl, size }) => (
          <MenuItem key={id} title={name} imageurl={imageUrl} size={ size} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
