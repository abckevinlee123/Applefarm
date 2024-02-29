import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Showcase(props) {
    const colors = {
        one: '#52534D',
        two: '#A2999E',
        three: '#A89AA2',
        four: '#846A6A',
        five: '#353B3C'
    };
    const cardStyle = {
        width: '84vw',
        paddingBottom: '10vh'
    };
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    };
    const cardTitleStyle = {
        paddingTop: '2vh',
        paddingBottom: '2vh',
        paddingLeft: '3vw',
        paddingRight: '3vw',
        fontFamily: 'KR_6',
        fontSize: '2rem',
        color: 'black',
    };
    const cardTextStyle = {
        margin: '0px 0px 0px 0px',
        paddingBottom: '2vh',
        paddingLeft: '3vw',
        paddingRight: '3vw',
        fontFamily: 'KR_4',
        fontSize: '1.4rem',
        color: 'black',
    };
    const cardImgStyle = {
        width: '50vw',
        height: 'auto',
        borderRadius: '1rem'
    };
    const cardInnerRightStyle = {
        textAlign: 'right',
        // background: '#C6C7C4',
        width: '30vw', //(props.cardInnerWidth)
        height: 'auto',
    };
    const cardInnerLeftStyle = {
        textAlign: 'Left',
        // background: '#C6C7C4',
        width: '30vw', //(props.cardInnerWidth)
        height: 'auto',
    };
    // const cardBodyStyle {

    // };
    if (props.flip) {
        return (
            <>
                <Card style={cardStyle}>
                    <Container style={containerStyle}>
                        <Card.Img style={cardImgStyle} src={props.image}/>
                        <Card.Body style={cardInnerRightStyle}>
                            <Card.Title style={cardTitleStyle}>{props.person}</Card.Title>
                            <Card.Text style={cardTextStyle}> 
                            사과는 사과나무(Malus spp., 그중에는 국내산 사과 또는 과수원 사과, Malus Domestica)에서 생산되는 둥근 식용 과일입니다. 사과나무는 전 세계적으로 재배되며 Malus 속에서 가장 널리 재배되는 종입니다. 이 나무는 야생 조상인 Malus sieversii가 여전히 발견되는 중앙아시아가 원산지입니다. 사과는 아시아와 유럽에서 수천 년 동안 재배되어 왔으며
                            </Card.Text>
                        </Card.Body>
                    </Container>
                </Card>
            </>
        );
    } else {
        return (
            <>
                <Card style={cardStyle}>
                    <Container style={containerStyle}>
                        <Card.Body style={cardInnerLeftStyle}>
                            <Card.Title style={cardTitleStyle}>{props.person}</Card.Title>
                            <Card.Text style={cardTextStyle}> 
                            사과는 사과나무(Malus spp., 그중에는 국내산 사과 또는 과수원 사과, Malus Domestica)에서 생산되는 둥근 식용 과일입니다. 사과나무는 전 세계적으로 재배되며 Malus 속에서 가장 널리 재배되는 종입니다. 이 나무는 야생 조상인 Malus sieversii가 여전히 발견되는 중앙아시아가 원산지입니다. 사과는 아시아와 유럽에서 수천 년 동안 재배되어 왔으며
                            </Card.Text>
                        </Card.Body>
                        <Card.Img style={cardImgStyle} src={props.image}/>
                    </Container>
                </Card>
            </>
        );
    }
}