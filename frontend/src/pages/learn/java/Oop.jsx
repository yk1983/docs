import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract, BsFeather } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';

const Oop = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="객체지향프로그래밍(object-oriented programming)"
                depth1="Learn"
                depth2="Java"
                depth3="object-oriented programming"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 절차지향프로그래밍<sup>Procedural Programming</sup>
                                </Card.Title>
                                <Card.Text>
                                    Procedural Programming에서 Procedural를 "절차적"으로 번역해버려서 마치 절차적으로
                                    실행하는 것이 중점이 되는 것처럼 보이게 되는데, 실제로 프로그래밍은 왼쪽에서 오른쪽
                                    위에서 아래로 절차적이지 않은 프로그래밍이란 존재하지 않습니다.
                                    (실제로는 Procedural는 "절차"라는 의미가 아닌 프로시저의 의미입니다.)
                                    <br />
                                    따라서 절차적 프로그래밍이란 단순히 순차적인 명령 수행이 아니라
                                    <span className="text-primary">
                                        루틴, 서브루틴, 메소드, 함수 등(이를 통틀어 프로시저라고 합니다.)
                                    </span>을
                                    이용한 프로그래밍 패러다임을 뜻합니다. (명령형 프로그래밍의 일종입니다.)
                                    <br />
                                    이 패러다임에서는 프로시저 콜, 즉 함수 호출을 통해서 추상화와 재사용성을 얻어내는 것이
                                    본질이기 때문입니다.
                                </Card.Text>

                                <h6>
                                    <BsFeather /> 장점
                                </h6>
                                <ul>
                                    <li>함수를 통해 코드의 재활용성이 높아짐</li>
                                    <li>프로그램 흐름을 쉽게 볼 수 있으므로 코드의 가독성이 높아짐</li>
                                    <li>모듈화와 구조화가 더 용이해짐</li>
                                </ul>

                                <h6>
                                    <BsFeather /> 단점
                                </h6>
                                <ul>
                                    <li>프로시저를 호출하는 것은 그냥 코드를 쓰는 것보다 시간이 매우 많이 소모됨</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 객체지향프로그래밍<sup>object-oriented programming</sup>
                                </Card.Title>
                                <Card.Text>
                                    객체 지향 프로그래밍(<abbr title="Object-Oriented Programming">OOP</abbr>)은
                                    현실 세계의 사물을 객체로 추상화하여 프로그램에 적용하는 프로그램을 객체들의 집합으로
                                    모델링하여, 객체 간의 상호작용을 통해 로직을 구성하는 프로그래밍 패러다임입니다.
                                    (즉, 모든 데이터를 객체(Object)로 취급합니다.)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 객체<sup>Object</sup>
                                </Card.Title>
                                <Card.Text>
                                    객체를 정의하면, 넓은 의미로 객체는 실세계에 존재하거나 생각할 수 있는 것을 뜻합니다.
                                    <br />
                                    <br />
                                    컴퓨터 공학에서의 객체는 <span className="text-primary">변수, 자료 구조, 함수, 메서드,
                                    식별자에 의해 참조된 메모리상의 값</span>등을 의미하고, 객체 지향 프로그래밍에서의 객체는  <wbr />
                                    <span className="text-primary">변수, 함수, 자료 구조의 조합이 될 수 있는데, 특히
                                    객체지향 프로그래밍에서 클래스를 기반으로 한 변수를 클래스의 인스턴스</span>라고 정의합니다.
                                    <br />
                                    <br />
                                    자바 언어 설명서 (The java Language Specification)에서는 객체란 클래스의 인스턴스나
                                    배열을 말한다고 정의되어 있습니다.
                                    (우리가 개발할 자바 프로그래밍에서의 객체는 속성과 기능을 가지는 프로그램의 단위를 정의합니다.)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 클래스<sup>Class</sup>
                                </Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 인스턴스<sup>Instance</sup>
                                </Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 메서드<sup>Method</sup>
                                </Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Oop;