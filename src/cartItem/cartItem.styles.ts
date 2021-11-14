import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
font-family: Roboto;
border-bottom: 1px solid lightblue;
padding-bottom: 20px;
div{
    flex: 1;
}
.informations, .buttons{
    display: flex;
    justify-content: space-between;
}
img{
    max-width: 80px;
    object-fit: cover;
    margin-right: 10px;
}

.MuiButton-root {
    width: '10px';
    height: '10px'; 
  } 
`;