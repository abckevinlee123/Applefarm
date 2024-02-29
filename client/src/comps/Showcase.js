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
        fontFamily: 'KR_5',
        fontSize: '2.25rem',
        color: 'black',
    };
    const cardTextStyle = {
        paddingBottom: '2vh',
        paddingLeft: '3vw',
        paddingRight: '3vw',
        fontFamily: 'KR_4',
        fontSize: '1.5rem',
        color: 'black',
    };
    const cardImgStyle = {
        width: '50vw',
        height: 'auto',
        borderRadius: '1rem'
    };
    const cardInnerRightStyle = {
        borderRadius: '1.25rem',
        textAlign: 'right',
        // background: '#C6C7C4',
        width: '30vw', //(props.cardInnerWidth)
        height: 'auto',
    };
    const cardInnerLeftStyle = {
        borderRadius: '1.25rem',
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
                            사과는 사과나무(Malus spp., 그중에는 국내산 사과 또는 과수원 사과, Malus Domestica)에서 생산되는 둥근 식용 과일입니다. 사과나무는 전 세계적으로 재배되며 Malus 속에서 가장 널리 재배되는 종입니다. 이 나무는 야생 조상인 Malus sieversii가 여전히 발견되는 중앙아시아가 원산지입니다. 사과는 아시아와 유럽에서 수천 년 동안 재배되어 왔으며 유럽 식민지 개척자들에 의해 북미로 소개되었습니다. 사과는 북유럽, 그리스, 유럽의 기독교 전통을 포함한 많은 문화에서 종교적, 신화적 의미를 가지고 있습니다.

씨앗에서 자란
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
                        <Card style={cardInnerLeftStyle}>
                            <Card.Title style={cardTitleStyle}>{props.person}</Card.Title>
                            <Card.Body style={cardTextStyle}> 
                            사과는 사과나무(Malus spp., 그중에는 국내산 사과 또는 과수원 사과, Malus Domestica)에서 생산되는 둥근 식용 과일입니다. 사과나무는 전 세계적으로 재배되며 Malus 속에서 가장 널리 재배되는 종입니다. 이 나무는 야생 조상인 Malus sieversii가 여전히 발견되는 중앙아시아가 원산지입니다. 사과는 아시아와 유럽에서 수천 년 동안 재배되어 왔으며 유럽 식민지 개척자들에 의해 북미로 소개되었습니다. 사과는 북유럽, 그리스, 유럽의 기독교 전통을 포함한 많은 문화에서 종교적, 신화적 의미를 가지고 있습니다.

씨앗에서 자란
                            </Card.Body>
                        </Card>
                        <Card.Img style={cardImgStyle} src={props.image}/>
                    </Container>
                </Card>
            </>
        );
    }
}