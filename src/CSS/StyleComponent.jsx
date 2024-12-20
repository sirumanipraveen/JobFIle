
import styled from 'styled-components';
const num = 10

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
  font-weight:bold;
  background-color:black;

@media screen and (max-width:470px){
background-color:red;
}
`;

const Paragraph = styled.p`
font-size:30px;
color:yellow;
font-weight:bold;
background-color: ${(props)=> props.num >8 ? "blue": "black"};
`
function StyleComponent(){
    return(
        <>
        <Title>hi praveen</Title>
        <Paragraph num ={num}>hiii welcome</Paragraph>
        </>
)

}


export default StyleComponent