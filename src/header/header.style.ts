import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
export const Wrapper = styled.div`
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
margin-bottom: 10px;
Navbar{
   
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}

img{
    width: 100%;
    height: auto;
    max-height: 250px;
    margin: 0px;
    padding: 0px ; 
}
div{
    font-family: Roboto;
   
    height:100%;
}
div.adjustPos{
    position: absolute;
    z-index :1200;
    right: 0%;
    bottom: 0%;
    background: lightgray;
}
p{
    display:inline-block;
}
.navbar-nav > li{
    margin-left:30px;
    margin-right:30px;
  }
  a {
    color: #bbbbbb;
    text-decoration: none;
    background-color: transparent;
}
.icon {
    width: 30px;
    height: 30px;
  }
  
.svgred {
    background-color: #B91646; /* defines the background color of the image */
    mask: url('/static/images/cart.svg') no-repeat center / contain;
    -webkit-mask: url('/static/images/cart.svg') no-repeat center / contain;
  }
  h1.cartTitle{
      padding: 20px;
      background: #323232;
      color: #ffffff;
  }

  .navbar-nav > li{
    margin-left:30px;
    margin-right:30px;
  }
 
  @media screen and (max-width: 480px) {
    .navbar-nav > li{
        margin-left:5px;
        margin-right:5px;
      }
  }
`;
export const StyledButton = styled(IconButton)`
display: inline-block;
`;
