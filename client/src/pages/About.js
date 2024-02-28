import {Container} from 'react-bootstrap';

export default function About() {
    const h1 = {
        // font
        fontFamily: 'KR_6',
        fontSize: '4rem',
        color: 'black',
      
        // display
        textAlign:'center'
        // etc
    };
    const containStyle = {
        marginLeft: '8vw',
        marginRight: '8vw',
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
                <h1 style={h1}>About</h1>
                <p style={p}>We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) We are saguazari :) </p>
            </Container>
        </>
    )
}