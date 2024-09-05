
import './collection-item.styles.scss'
const CollectionItem = ({id, name, imageUrl,price}) => {
    return (
        <div key={ id} className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
                <span>{ name}</span>
                <span>{ price}</span>
        </div>
      </div>
    );
}
 
export default CollectionItem;