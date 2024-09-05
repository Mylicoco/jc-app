import "./menu-item.styles.scss";
import { Link } from "react-router-dom";
import { matchPath } from "react-router-dom";
const MenuItem = ({ name, imageurl, size,  linkUrl }) => {
  return (
    <div
      className={`${size} menu-item`}
      // onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <Link to={`${linkUrl}`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageurl})` }}
        />

        <div className="content">
          <h1 className="title">{name.toUpperCase()}</h1>
          <span className="subtitle">shop now</span>
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
