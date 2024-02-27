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
    const linkImageStyle = {
        width: '50px',
        height: '50px'
        // filter: 'brightness(0) invert(1)', // Apply filter to invert colors
    };
    const bottomStyle = {
        borderBottom: '1px solid black', /* Adjust the thickness of the bar */
        margin: '0', /* Remove default margin */
    }

    // RETURN
    return (
        <>
        <div style={bottomStyle}>
            <Navbar style={navbarStyle}>
                <Container style={logoSepStyle}>
                    <Nav.Link style={linkImageStyle} href="home"><img
                            alt="Home"
                            src={logo}
                            width="50"
                            height="50"/></Nav.Link>
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

  