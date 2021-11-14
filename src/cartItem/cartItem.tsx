/** below component is for individual cart item in cart */
import Button from '@mui/material/Button';
import{ CartItemType } from '../App';
import {Wrapper} from './cartItem.styles';
type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (name: string) => void;
}
var originalStockcount = 50;
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
        <img src={item.imageURL} alt={item.name} />
        <div>
            <h3>{item.name}</h3>
            <div className="buttons">
                <Button size="small"
                 style={{ background: '#B91646', color: '#ffffff'}}
                    variant="contained"
                    onClick={() => removeFromCart(item.name)}>
                    -
                </Button>
                <p>{item.available}</p>
                <Button
                    size= 'small'
                   style={{ background: '#B91646', color: '#ffffff'}}
                    onClick={() => addToCart(item)}
                    disabled={item.stock > 0 ? false : true}>
                    +
                </Button>
                </div>
            <div className="informations">
                <p>stock: {item.stock}</p>
                <p>Rs {item.price} </p>
                <p>Rs {( (originalStockcount -item.stock) * item.price).toFixed(2)}</p>
            </div>
        </div>
    </Wrapper>
);

export default CartItem;
