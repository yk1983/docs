import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';

import PageTitle from 'layouts/PageTitle';

const Intro = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="자바(Java)"
                depth1="Learn"
                depth2="Java"
                depth3="Introduction"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 자바의 소개
                                </Card.Title>
                                <Card.Text>
                                    자바(Java)는 객체 지향적 프로그래밍 언어이며,
                                    자바 가상 머신(JVM, Java Virtual Machine)을 사용하여,
                                    운영체제와는 독립적으로 동작할 수 있습니다.<br />
                                    <br />
                                    2024년도 3월 TIOBE Index에서는
                                    Python, C, C++, Java, C#순으로 가장 인기 있는 프로그래밍 언어 top 5로 선정되었으며,
                                    이러한 추세는 몇 년간 지속되고 있습니다.<br />
                                    PYPL Index에서는 Python, Java, JavaScript, C#, C/C++이 가장 인기 있는
                                    언어 5개로 선정되었습니다.<br />
                                    <br />
                                    자바의 사용 점유율이 많이 내려간 추세이지만 아직까지 자바는 많이 사용되고 있으며,
                                    현재까지 개발되어 유지보수 및 앞으로 추가적으로 자바로 개발되는 어플리케이션들이 많은 만큼
                                    자바는 아직도 매력적인 시장이라 할 수 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 자바의 장점
                                </Card.Title>
                                <ul>
                                    <li>운영체제와는 독립적으로 실행할 수 있습니다.</li>
                                    <li>불필요한 기능을 과감히 제거하여 다른 언어에 비해 배우기가 쉽습니다.</li>
                                    <li>자동 메모리 관리(Garbage Collection) 등을 지원하여 다른 언어에 비해 안정성이 높습니다.</li>
                                    <li>연산자 오버로딩을 금지하고 제네릭을 도입함으로써 코드의 가독성을 높였습니다.</li>
                                    <li>네트워크와 분산처리를 지원합니다.</li>
                                    <li>멀티쓰레드를 지원합니다.</li>
                                    <li>동적 로딩(Dynamic Loading)을 지원합니다.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 자바의 단점
                                </Card.Title>
                                <ul>
                                    <li>
                                        성능 : 자바는 해석형 언어로, 컴파일형 언어에 비해 실행 속도가 상대적으로 느릴 수 있습니다.
                                        이는 성능에 민감한 애플리케이션 개발에 제한을 둘 수 있습니다.
                                    </li>
                                    <li>
                                        메모리 소비 : 자바의 자동 메모리 관리 기능인 가비지 컬렉션은 메모리를 자동으로 회수하지만,
                                        이로 인해 추가적인 CPU 자원이 필요하며 때로는 메모리 사용량이 늘어날 수 있습니다.
                                    </li>
                                    <li>
                                        메모리 소비 : 자바의 자동 메모리 관리 기능인 가비지 컬렉션은 메모리를 자동으로 회수하지만,
                                        이로 인해 추가적인 CPU 자원이 필요하며 때로는 메모리 사용량이 늘어날 수 있습니다.
                                    </li>
                                    <li>
                                        반응형 애플리케이션 개발의 한계 : 자바는 기본적으로 블로킹 I/O 모델을 사용하기 때문에,
                                        이벤트 기반의 반응형 애플리케이션 개발에는 한계가 있을 수 있습니다.
                                    </li>
                                    <li>
                                        상대적으로 복잡한 문법 : 자바는 C++와 비슷한 문법을 가지고 있으며,
                                        특히 초보자에게는 배우기 어렵다는 지적이 있습니다.
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 자바 가상 머신<sup>Java Virtual Machine(JVM)</sup>
                                </Card.Title>
                                <Card.Text>
                                    자바로 개발한 프로그램을 컴파일하여 만들어지는 바이트코드를 실행시키기 위한 가상머신입니다.
                                    (OS에 종속받지 않고 CUP가 자바를 인식, 실행할 수 있게 하는 가상의 컴퓨터)
                                    그렇기 때문에, 자바 언어는 JVM에 의해 "운영체제에 독립적"이라는 장점을 가질 수 있게됩니다.
                                    JRE(Java Runtime Environment)에 포함되어 있으며, 자바 컴파일러가 프론트엔드를 담당한다면
                                    자바 가상 머신은 코드 최적화와 백엔드를 담당합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 가비지 컬렉터<sup>Garbage Collector(GC)</sup>
                                </Card.Title>
                                <Card.Text>
                                    자바 가상 머신(JVM)에 의해 구동되는 자바 프로그램은 메모리 관리를 개발자가
                                    직접 명시적으로 수행하지 않고 자동 메모리 관리 기능을 지원합니다.
                                    가비지 컬렉션은 자바의 메모리 관리 방법 중의 하나로 자바 가상 머신의 Heap 영역에서
                                    동적으로 할당했던 메모리 중 필요 없게 된 메모리 객체를 모아 주기적으로 제거하는 프로세스를 말한다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 자바 개발 키트<sup>Java Development Kit(JDK)</sup>
                                </Card.Title>
                                <Card.Text>
                                    자바를 사용하기 위해 필요한 모든 기능을 갖춘 자바용 SDK (Software Development Kit)입니다.
                                    JDK는 JRE를 포함하고 있으며, JRE에 있는 모든 것 뿐만 아니라 컴파일러(javac)와 jdb, javadoc 과 같은 도구도 있습니다.
                                    즉, JDK는 프로그램을 생성, 실행, 컴파일할 수 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 자바 런타임 환경<sup>Java Runtime Environment(JRE)</sup>
                                </Card.Title>
                                <Card.Text>
                                    JVM + 자바 클래스 라이브러리(Java Class Library) 등으로 구성되어 있습니다.
                                    컴파일 된 자바 프로그램을 실행하는데 필요한 패키지입니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 소프트웨어 개발 키트<sup>Software Development Kit(SDK)</sup>
                                </Card.Title>
                                <Card.Text>
                                    하드웨어 플랫폼, 운영체제 또는 프로그래밍 언어 제작사가 제공하는 툴입니다.
                                    키트의 요소는 제작사마다 다릅니다.
                                    SDK의 대표적인 예로, JDK 등이 있습니다.
                                    SDK를 활용하여 애플리케이션을 개발할 수 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Intro;