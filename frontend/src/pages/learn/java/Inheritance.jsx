import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
// components
import Span from 'components/Span';

const Inheritance = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="상속(Inheritance)"
                depth1="Learn"
                depth2="Java"
                depth3="Inheritance"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 상속<sup>Inheritance</sup>
                                </Card.Title>
                                <Card.Text>
                                    <Span
                                        contents="상속(Inheritance)"
                                    />은 캡슐화, 추상화와 더불어 객체 지향 프로그래밍을
                                    구성하는 중요한 특징중 하나로, 기존의 클래스에 기능을 추가하거나 재정의하여 새로운
                                    클래스를 정의하는 것을 의미합니다.
                                    <br />
                                    상속을 이용하면 기존에 정의되어 있는 클래스의 모든 필드와 메소드를 물려받아,
                                    새로운 클래스를 생성할 수 있습니다.
                                    이때 기존에 정의되어 있던 클래스를
                                    <Span
                                        contents="부모 클래스(parent class) 또는 상위 클래스(super class), 기초 클래스(base class)"
                                    /> 라고 합니다.
                                    그리고 상속을 통해 새롭게 작성되는 클래스를
                                    <Span
                                        contents="자식 클래스(child class) 또는 하위 클래스(sub class), 파생 클래스(derived class)"
                                    />
                                    라고 합니다.
                                    <br />
                                    따라서, 상속을 이용하면 이미 구현되어있는 클래스의 기능을 재사용 또는 재정의해서
                                    만들 수 있기 때문에 효율적이고, 개발시간을 단축시켜 주기 때문에 사용하는 것입니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 상속의 장점
                                </Card.Title>
                                <ul>
                                    <li>기존에 작성된 클래스를 재활용할 수 있습니다.</li>
                                    <li>
                                        자식 클래스 설계 시 중복되는 멤버를 미리 부모 클래스에 작성해 놓으면,
                                        자식 클래스에서는 해당 멤버를 작성하지 않아도 됩니다.
                                    </li>
                                    <li>클래스 간의 계층적 관계를 구성함으로써 다형성의 문법적 토대를 마련합니다.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Inheritance;