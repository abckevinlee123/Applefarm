import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function NavBarButton(props) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    // layout
    marginLeft: '.5vw',
    marginRight: '.5vw',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    height: '5vh',
    // font
    fontFamily: 'KR_6',
    fontSize: '1rem',
    color: isHovered ? 'white' : '#313131',
    // display
    display: 'flex',
    alignItems: 'center',
    // etc
    border: '1px solid black',
    borderRadius: '15px',
    textDecoration: 'none', // Remove underline
    background: isHovered ? '#313131' : 'transparent',
  };
  const linkStyle = {
    // layout
    // font
    fontFamily: 'KR_6',
    fontSize: '1rem',
    color: isHovered ? 'white' : '#313131',
    // display
    display: 'flex',
    alignItems: 'center',
    // etc
    textDecoration: 'none', // Remove underline
    color: isHovered ? 'white' : '#313131', // Use the default text colortest
  };

  if (props.external) {
    return (
      <>
        <Button 
          style={buttonStyle}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          href={props.to}><div style={linkStyle}>{props.title}</div></Button>
      </>
    );
  } else {
    return (
      <>
        <Button 
          style={buttonStyle}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}><Link style={linkStyle} to={props.to}>{props.title}</Link></Button>
      </>
    );
  }
}