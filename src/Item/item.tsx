/** below program is items in the grid */
// type
import { CartItemType } from '../App';
// styles
import { Wrapper } from './Item.style';

type Props = {
    item: CartItemType;
    handleAddtoCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddtoCart }) => (
    <Wrapper>
        <div className='Cards'>
            <h4>{item.name}</h4>
            <img src={item.imageURL} alt={item.name} />
            <p className='trimpara'>{item.description}</p>
            <h5>MRP Rs.{item.price} <span className='float-right'><button onClick={() => handleAddtoCart(item)} disabled={item.stock > 0 ? false : true}> Buy Now</button></span></h5>
            {item.stock > 0 ? <p> Stock: {item.stock} </p> : <><h3>Sold Out</h3><p style={{ color: '#dddddd', }}>This item is currently out of stock</p></>}
        </div>
    </Wrapper>
);
export default Item;