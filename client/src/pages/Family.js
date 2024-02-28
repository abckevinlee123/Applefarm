import {Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import NavBar from "../comps/NavBar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Family() {
    const carousel = {
        background: 'grey',
        height: '50vh'
    };
    const h1 = {
        // font
        fontFamily: 'KR_6',
        fontSize: '4rem',
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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Carousel style={carousel}>

            </Carousel>
        </>
    )
}