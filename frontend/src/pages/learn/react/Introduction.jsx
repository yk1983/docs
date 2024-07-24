import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';

import PageTitle from 'layouts/PageTitle';

const Intro = () => {
    return(
        <>
            <Helmet>
                <title>Learn React</title>
            </Helmet>

            <PageTitle
                title="리액트(React)"
                depth1="Learn"
                depth2="React"
                depth3="Introduction"
            />

            <section className="section">
                <Row>
                    {/* Bootstrap Card components sample
                    <div className="col-lg-12">
                        <Card>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    */}

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>리액트의 소개</Card.Title>
                                <Card.Text>
                                    <span className="text-primary">리액트(React, React.js 또는 ReactJS)</span>는
                                    자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용됩니다.
                                    페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수됩니다.<br />
                                    리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있습니다.
                                    대규모 또는 복잡한 리액트 애플리케이션 개발에는 보통 라우팅, API통신 등의 기능이 요구되는데
                                    리액트에는 기본적으로 제공되지 않기 때문에 추가 라이브러리를 사용해야 합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>JSX(JavaScript XML)</Card.Title>
                                <Card.Text>
                                    <span className="text-primary">JSX(JavaScript XML)</span>는 XML같은 문법을 사용하는 ECMAScript의
                                     확장입니다.
                                    HTML과 모습이 비슷해 보이는 JSX는 수많은 개발자들에게 친숙한 문법을 사용하여 컴포넌트
                                    렌더링을 구조화하는 방법을 제공합니다.
                                    리액트 컴포넌트들은 일반적으로 JSX를 사용하여 작성되지만 꼭 그렇게 할 필요는 없습니다.
                                    (컴포넌트들은 순수 자바스크립트로 작성할 수도 있습니다.)<br />
                                    JSX로 작성된 코드는 웹 브라우저가 인식할 수 있기 전에 바벨과 같은 도구를 이용한 변환이 필요합니다.
                                    이러한 처리는 일반적으로 애플리케이션이 디플로이되기 전에 소프트웨어 빌드 과정 중에 수행됩니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>가상 DOM</Card.Title>
                                <Card.Text>
                                    다른 저명한 기능은 가상 문서 객체 모델, 즉 <span className="text-primary">가상 DOM</span>의 사용입니다.
                                    리액트는 인 메모리 데이터 구조 캐시를 만들고 결과 차이를 계산한 다음 브라우저에
                                    표시되는 DOM을 효과적으로 업데이트합니다.
                                    이로써 프로그래머는 마치 모든 페이지가 변경될 때마다 렌더링되는 것처럼 코드를 작성할 수 있는데,
                                    실제로 리액트 라이브러리는 단지 실제로 변경되는 하위 컴포넌트만을 렌더링할 뿐입니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>스테이트풀 컴포넌트</Card.Title>
                                <Card.Text>
                                    상태를 컴포넌트를 통해 값을 보관하며 props를 통해 차일드 컴포넌트로 전달할 수 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>라이프사이클 메서드</Card.Title>
                                <Card.Text>
                                    라이프사이클 메서드들은 컴포넌트가 생존하는 동안 셋 포인트(set point)에 코드를
                                    실행할 수 있게 하는 훅(hook)입니다.<br />
                                    후킹(hooking)은 소프트웨어 공학 용어로, 운영 체제나 응용 소프트웨어 등의 각종
                                    컴퓨터 프로그램에서 소프트웨어 구성 요소 간에 발생하는 함수 호출, 메시지, 이벤트 등을
                                    중간에서 바꾸거나 가로채는 명령, 방법, 기술이나 행위를 말합니다.<br />
                                    이때 이러한 간섭된 함수 호출, 이벤트 또는 메시지를 처리하는 코드를 훅(hook)이라고 합니다.
                                </Card.Text>
                                <ul>
                                    <li>
                                        <code>shouldComponentUpdate</code>는 렌더가 불필요한 경우 false를 반환함으로써 개발자가
                                        컴포넌트의 불필요한 재렌더링을 막을 수 있게 합니다.
                                    </li>
                                    <li>
                                        <code>componentDidMount</code>는 컴포넌트가 '마운트'(mount)되면 호출됩니다.
                                        (대개 컴포넌트 DOM 노드와 연결함으로써 사용자 인터페이스에서 만들어집니다)
                                        API를 통해 원격 소스로부터 로드되는 데이터를 트리거(trigger)하기 위해 보통 사용됩니다.
                                    </li>
                                    <li>
                                        <code>render</code>는 가장 중요한 라이프사이클 메서드이며 어떠한 컴포넌트에서도 최소한의 필요 조건입니다.
                                        컴포넌트의 상태가 업데이트될 때마다 호출되는 것이 보통이며 사용자 인터페이스의 변경사항을 반영합니다.
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Intro;