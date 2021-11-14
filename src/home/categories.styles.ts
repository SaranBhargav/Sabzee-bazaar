import styled from 'styled-components';

export const Wrapper = styled.div`
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
font-family: Roboto;
border-bottom: 1px solid lightblue;
padding: 20px;

.arrange{
    flex-direction: column;
    justify-content: center;
}

img{
    max-width: 100%;
    
}

button{
    background : #B91646;
    color: #ffffff;
    border: 1px solid #B91646;
    
}
button: hover{
    border: 1.5px solid #B91646;
    background : #ffffff;
    color: #B91646;
    
}
p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 75ch;
}
`;


