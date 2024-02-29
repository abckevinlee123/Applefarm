import {Container} from 'react-bootstrap';
import Showcase from '../comps/Showcase'
import one from '../other/1.jpg'
import two from '../other/2.jpg'
import three from '../other/3.jpg'
import four from '../other/4.jpg'
import five from '../other/5.jpg'
import six from '../other/6.jpg'

export default function Family() {
    const containStyle = {
        marginLeft: '8vw',
        marginRight: '8vw',
    };
    const h1 = {
        // font
        paddingBottom: '3vh',
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
                <h1 style={h1}>우리 가족</h1>
                <Showcase width='84vw' image={one} person='사과자리'/>
                <Showcase width='84vw' flip='true' image={two} person='사과자리' />
                <Showcase width='84vw' image={three}  person='사과자리' />
                <Showcase width='84vw' flip='true' image={four} person='사과자리' />
                <Showcase width='84vw' image={five} person='사과자리' />
                <Showcase width='84vw' flip='true' image={six} person='사과자리' />
            </Container>
        </>
    )
}