import {Container, Nav, Navbar} from 'react-bootstrap';

import '../fonts/Fonts.css';

export default function Footer(props) {
    // RETURN
    return (
        <>
        <Nav/>
        <Navbar style={navbarStyle}>
            <Container style={containerStyle}>
                <Navbar.Brand style={navBrandStyle}>
                    사과자리
                </Navbar.Brand>
                <Nav href="" style={navStyle}>
                    Company ADER<br/>
                    Business Name FIVE SPACE CO.,<br/>
                    LTD Business License 760-87-01757<br/>
                    MAIL-ORDER LICENSE NO. 2021-서울성동-01588 <br/>
                    CEO HANN <br/>
                    Office 14, Yeonmujang 9-gil, Seongdong-gu, Seoul, South Korea<br/>
                    .<br/>
                    ADER ERROR C/S CENTER<br/>
                    TEL. 02-792-2232 | Office hour Mon - Fri AM 9:30 - PM 5:00<br/>
                    .<br/>
                    COPYRIGHT(C) 2017 APPLEKIND.<br/>
                    ALL RIGHT RESERVED. <br/>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
};

const navbarStyle = {
    // layout
    background: '#502611',
    margin: '0',
    paddingTop: '6vh',
    paddingBottom: '6vh',
}

const containerStyle = {
    // layout 

    // font
    textAlign:'center'

    // display

    // etc
};
const navBrandStyle = {
    // font
    fontFamily: 'KR_6',
    fontSize: '.85rem',
    color: 'white',
    // display
    // etc
};

const navStyle = 
{
    paddingTop: '4vh',

    // font
    fontFamily: 'KR_4',
    fontSize: '.75rem',
    color: 'white',
  
    // display
    // etc
};

  