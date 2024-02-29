import {Container} from 'react-bootstrap';
import NavBar from "../comps/NavBar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product() {
    const containStyle = {
        marginLeft: '8vw',
        marginRight: '8vw',
    };
    const h1 = {
        // font
        fontFamily: 'KR_6',
        fontSize: '3rem',
        color: 'black',
      
        // display
        textAlign:'center'
        // etc
    };
    const p = {
        // font
        fontFamily: 'KR_4',
        fontSize: '2rem',
        color: 'black',
      
        // display
        textAlign:'center'
        // etc
    };

    return (
        <>
            <Container style={containStyle}>
                <h1 style={h1}>상품</h1>
                <p style={p}>We sell apples</p>
            </Container>
        </>
    )
}