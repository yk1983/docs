import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Alert } from 'react-bootstrap';
import { BsSubtract, BsFeather, BsPinAngle } from 'react-icons/bs';
import Highlight from 'react-highlight';
import PageTitle from 'layouts/PageTitle';

const Method = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="메서드(Method)"
                depth1="Learn"
                depth2="Java"
                depth3="Method"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 메소드<sup>method</sup>
                                </Card.Title>
                                <Card.Text>
                                    다른 프로그래밍 언어에는 함수가 별도로 존재합니다.
                                    (예를 들어 JavaScript의 function 키워드로 선언된 함수)
                                    하지만 자바는 클래스를 떠나 존재하는 것은 있을 수 없기 때문에 자바의 함수는 따로
                                    존재하지 않고 클래스 내에 존재합니다.
                                    자바는 이러한 클래스 내의 함수를 메서드(method)라고 부른다.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Alert variant="success">
                            <Alert.Heading>
                                <BsPinAngle /> 함수<sup>function</sup>와 메서드<sup>method</sup>
                            </Alert.Heading>
                            <p>
                                함수와 메서드가 공존하는 언어(예를 들어, 파이썬)에서는 두 개를 구분하여 말합니다.
                                하지만 자바는 메서드와 함수를 구분하여 말하지 않습니다.
                            </p>
                        </Alert>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Method;