import styled from 'styled-components';
import IconButton from'@mui/material/IconButton';
export const Wrapper = styled.div`
display:flex;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
svg
 {
    fill: red;
  }
  svg {
    position: fixed;
    z-index :1200;
    right: 10%;
    top: 0%;
    margin: 8px;
    width: 10px;
    height: 10px;
  }
div.content{
    flex: 1;
    width: 80%;
    margin: auto;
    padding:1 rem;
    justify-content: center;

}

.content:nth-child(even){flex-direction: row-reverse;}
`;
export const StyledButton = styled(IconButton)`
position: fixed;
z-index :1200;
right: 10%;
top: 0%;
margin: 8px;
img
{position: fixed;
    z-index :1200;
    right: 10%;
    top: 0%;
    margin: 8px;
    width: 10px;
    height: 10px;  
}
`;
