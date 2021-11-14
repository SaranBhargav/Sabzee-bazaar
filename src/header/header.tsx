/** below component is header */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wrapper, StyledButton } from './header.style';
import logo from '../logo.png';
//material UI
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import CancelIcon from '@mui/icons-material/Cancel';
import Container from '@mui/material/Container';
//components and types
import Cart from '../cart/cart';
import { CartItemType } from '../App';

type Props = {
  cartItems: CartItemType[];
  cartCount: number;
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (name: string) => void;
}

const Header: React.FC<Props> = ({ cartItems, cartCount, handleAddToCart, handleRemoveFromCart }) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-md bg-light navbar-light">
        <NavLink to='/'> <img src={logo} className="d-inline-block align-top" alt="SABZI BAZAAR"/></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/products'>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/signup'>Signup</NavLink>
            </li>
            <li className="nav-item float-right"> </li>
          </ul>
        </div>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <Container maxWidth="sm">
            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
              <div ><h1 style={{ background: '#323232', padding: '20px', color: '#ffffff' }}> My cart({cartCount} item)  <span className='float-right' onClick={() => setCartOpen(false)}><CancelIcon /></span></h1>
                <Cart cartItems={cartItems}
                  addToCart={handleAddToCart}
                  removeFromCart={handleRemoveFromCart} />
              </div>
            </Drawer>
          </Container>
          <div>
            <StyledButton onClick={() => setCartOpen(true)}>
              <div className="icon svgred"></div> <span>{cartCount} items</span>
            </StyledButton>
          </div>
        </Grid>
      </nav>
    </Wrapper>
  );

};

export default Header;
