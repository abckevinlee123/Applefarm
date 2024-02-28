import {Container, Nav, Navbar} from 'react-bootstrap';
import NavBarButton from './NavBarButton'
import logo from '../other/Temp.png';
import '../fonts/Fonts.css';

export default function NavBar(props) {
    //STYLE
    const navbarStyle = {
        // layout
        paddingTop: '1.5vh',
        paddingBottom: '1.5vh',
        background: 'white',
        // display
        display: 'flex',
        alignItems: 'center',
    }
    const logoSepStyle = {
        // layout
        width: '90vw',
        marginLeft: '5vw',
        marginRight: '5vw',
        // font
        // display
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
        // etc
    };
    const itemSepStyle = {
        // layout
        // font
        // display
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
        // etc
    };
    const linkStyle = {
        // font
        fontFamily: 'KR_6',
        fontSize: '1.25rem',
        textDecoration: 'none', // Remove underline
        color: '#313131',
        // display
        display: 'flex',
        justifyContent: 'flex-left',
        alignItems: 'center',
        // etc
        width: '500px',
        height: '50px'
        // filter: 'brightness(0) invert(1)', // Apply filter to invert colors
    };
    const linkImageStyle = {
        marginRight: '20px' 
    };
    const bottomStyle = {
        borderBottom: '1px solid black', /* Adjust the thickness of the bar */
        margin: '0', /* Remove default margin */
    };

    // RETURN
    return (
        <>
        <div style={bottomStyle}>
            <Navbar style={navbarStyle}>
                <Container style={logoSepStyle}>
                    <Nav.Link style={linkStyle} href="home"><img
                            alt="Home"
                            src={logo}
                            width="50"
                            height="50"
                            style={linkImageStyle}/>사과자리</Nav.Link>
                    <Container style={itemSepStyle}>
                        <NavBarButton to='/contact' title={'Contact'}/>
                        <NavBarButton to='/about' title={'About'}/>
                        <NavBarButton to='/family' title={'Family'}/>
                        <NavBarButton to='/product' title={'Product'}/>
                        <NavBarButton external={true} to='https://smartstore.naver.com/saguazari/' title={'Store'}/>
                    </Container>
                </Container>
            </Navbar>
        </div>
        </>
    )
};

  