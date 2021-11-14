import styled from 'styled-components';
export const Wrapper = styled.div`
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
border: 1.5px solid #cccccc;

height:100%;
margin: 2%;
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
.trimpara{
    background:#dddddd!important;
    overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
img{
    width: 100%;
    height: auto;
    max-height: 250px;
    background: -webkit-linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #FFFFFF 10%, #6DD5FA 50%, #2980B9 100%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    

}
.cards{
    margin-bottom: 15px;
    border-bottom:1.5px dashed  #dddddd ;
    border 
}
div{
    font-family: Roboto;
    padding: 20px 20px 0 20px;
    height:100%;
}
`;
