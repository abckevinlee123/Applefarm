import {Container} from 'react-bootstrap';

export default function Contact() {
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
                <h1 style={h1}>Contact</h1>
                <p style={p}>Call us here! 937 751 8523</p>
            </Container>
        </>
    )
}