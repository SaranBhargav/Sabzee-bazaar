/** below component is for cart items in cart */
import{CartItemType } from '../App';
import {Wrapper} from './cart.style';
import CartItem from '../cartItem/cartItem';
type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (name: string) => void;
}
var originalStockcount = 50;
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    //function to caliculate total price
    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack +( originalStockcount-item.stock) * item.price, 0);
        console.log(cartItems);
    return (
        <Wrapper>
          <div className="wi">
            {cartItems.length === 0 ? <p> No items in cart.</p> : null}
            {cartItems.map((item: any) => (
                <CartItem key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <button className='checkout'> Proceed to Checkout <span className='float-right'>Rs{calculateTotal(cartItems).toFixed(2)}</span></button>
            </div>
        </Wrapper>
    );

};

export default Cart;
