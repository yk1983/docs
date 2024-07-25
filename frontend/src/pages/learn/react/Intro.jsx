import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Alert, Image } from 'react-bootstrap';

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
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i class="bi bi-subtract"></i> 리액트<sup>React</sup>란?
                                </Card.Title>
                                <Card.Text>
                                    <span className="text-primary">리액트(React, React.js 또는 ReactJS)</span>는 자바스크립트
                                    라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용됩니다.
                                    페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수됩니다.<br />
                                    리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있습니다.
                                    대규모 또는 복잡한 리액트 애플리케이션 개발에는 보통 라우팅, API통신 등의 기능이 요구되는데
                                    리액트에는 기본적으로 제공되지 않기 때문에 추가 라이브러리를 사용해야 합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i class="bi bi-subtract"></i> 특징
                                </Card.Title>
                                <Card.Text>
                                    React 프로그래밍의 특징은 <span className="text-primary">선언형, 컴포넌트 기반, 확장성</span>입니다.
                                </Card.Text>
                                <dl>
                                    <dt>
                                        <i class="bi bi-feather"></i> 선언형(Declarative) 프로그래밍
                                    </dt>
                                    <dd>
                                        애플리케이션의 각 상태에 대한 간단한 뷰만 설계하고,
                                        데이터가 변경됨에 따라 적절한 컴포넌트만 효율적으로 갱신하고 렌더링 됩니다.
                                        <br />
                                        전달 속성<span className="text-primary">(props)</span>,
                                        상태<span className="text-primary">(state)</span> 변경 감지 &rarr;
                                        UI갱신<span className="text-primary">(rendering)</span>
                                    </dd>
                                    <dt>
                                        <i class="bi bi-feather"></i> 컴포넌트(Component) 기반 프로그래밍
                                    </dt>
                                    <dd>
                                        스스로 상태를 관리하는 캡슐화된 컴포넌트를 만들어 조합하여 복잡한UI를 만들수 있습니다.
                                        <br />
                                        캡슐화 된 컴포넌트 로직(Logic)은 템플릿(Template)이 아닌,
                                        <span className="text-primary"> JavaScript 또는 JSX(JavaScript + XML)</span>로 작성됩니다.
                                        따라서 다양한 형식의 데이터를 앱 안에서 손쉽게 전달할 수 있으며, DOM과는 별개로 상태를 관리할 수 있습니다.
                                    </dd>
                                    <dt>
                                        <i class="bi bi-feather"></i> 한 번 배워서 어디서나 사용하기
                                    </dt>
                                    <dd>
                                        기술 스택의 나머지 부분에는 관여하지 않기 때문에,
                                        기존 코드를 다시 작성하지 않고도 React의 새로운 기능을 이용해 개발할 수 있습니다.
                                    </dd>
                                </dl>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i class="bi bi-subtract"></i> JSX<sup>Javascript Syntax eXtension</sup>
                                </Card.Title>
                                <Card.Text>
                                    <span className="text-primary">JSX(JavaScript XML)</span>는 XML같은 문법을 사용하는
                                    ECMAScript의 확장된 문법으로, 마크업 문법을 객체 형태로 저장하고 렌더링합니다.
                                    <br />
                                    HTML과 모습이 비슷해 보이는 JSX는 수많은 개발자들에게 친숙한 문법을 사용하여 컴포넌트
                                    렌더링을 구조화하는 방법을 제공합니다.
                                    리액트 컴포넌트들은 일반적으로 JSX를 사용하여 작성되지만 꼭 그렇게 할 필요는 없습니다.
                                    (컴포넌트들은 순수 자바스크립트로 작성할 수도 있습니다.)
                                    <br />
                                    JSX로 작성된 코드는 웹 브라우저가 인식할 수 있기 전에 바벨(@babel)과 같은 도구를 이용한 변환이 필요합니다.
                                    이러한 처리는 일반적으로 애플리케이션이 배포(deploy)되기 전에 소프트웨어 빌드(build) 과정 중에 수행됩니다.
                                </Card.Text>
                                <dl>
                                    <dt>
                                        <i class="bi bi-feather"></i> 반드시 부모 요소 하나가 감싸는 형태
                                    </dt>
                                    <dd>
                                        Virtual DOM에서 컴포넌트 변화를 감지할 때 때 효율적으로 비교할 수 있도록
                                        컴포넌트 내부는 하나의 DOM트리구조로 이루어져야 한다는 규칙이 있기 때문입니다.
                                    </dd>
                                    <dt>
                                        <i class="bi bi-feather"></i> 유효한 모든 JavaScript 표현식
                                    </dt>
                                    <dd>
                                        JSX 안에서도 자바스크립트 표현식을 사용할 수 있습니다.
                                        자바스크립트 표현식을 작성하려면 JSX내부에서 코드를 <code>&#123; &#125;</code>로 감싸주면 됩니다.
                                    </dd>
                                    <dt>
                                        <i class="bi bi-feather"></i> if문(for문) 대신 삼항연산자(조건부연산자) 사용
                                    </dt>
                                    <dd>
                                        if구문과 for루프는 JavaScript 표현식이 아니기 때문에 JSX 내부 자바스크립트
                                        표현식에서는 사용할 수 없습니다.
                                        그렇기 때문에 조건부에 따라 다른 렌더링 시 JSX 주변 코드에서 if문을 사용하거나,
                                        <code>&#123; &#125;</code> 안에서 삼항연산자(조건부연산자)를 사용합니다.
                                    </dd>
                                    <dt>
                                        <i class="bi bi-feather"></i> React DOM은 HTML 어트리뷰트 이름 대신 camelCase
                                        프로퍼티 명명 규칙을 사용
                                    </dt>
                                    <dd>
                                        JSX에서 자바스크립트 문법을 쓰려면 <code>&#123; &#125;</code>를 써야 하기
                                        때문에, 스타일을 적용할 때에도 객체 형태로 넣어 주어야 합니다.
                                        (예를 들어, css style 이나 class속성은 className을 사용)
                                    </dd>
                                    <dt>
                                        <i class="bi bi-feather"></i> JSX 내에서 주석 사용 방법
                                    </dt>
                                    <dd>
                                        JSX 내에서 <code>&#123;/* ... */&#125;</code>와 같은 형식을 사용 합니다.
                                    </dd>
                                </dl>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i class="bi bi-subtract"></i> 컴포넌트<sup>component</sup>
                                </Card.Title>
                                <Card.Text>
                                    <span className="text-primary">컴포넌트(component)</span>는 리액트로 만들어진 앱을 이루는 최소한의 단위입니다.
                                    <br />
                                    기존의 프레임워크는 MVC방식으로 각 요소의 의존성이 높아 재활용이 어려운 단점이 존재합니다.
                                    반면 컴포넌트는 MVC의 뷰를 독립적으로 구성하여 재사용할 수 있으며, 새로운 컴포넌트의 조합을 쉽게 만들 수 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i class="bi bi-subtract"></i> 프로퍼티<sup>props</sup>
                                </Card.Title>
                                <Card.Text>
                                    <span className="text-primary">프로퍼티(props)</span>는 properties의 줄임말로
                                    상위 컴포넌트가 하위 컴포넌트에 값을 전달하기 위해 사용(단방향 데이터의 흐름)하고,
                                    프로퍼티의 값은 수정할 수 없는 read-only 데이터의 성격을 갖습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i class="bi bi-subtract"></i> 상태<sup>state</sup>
                                </Card.Title>
                                <Card.Text>
                                    <span className="text-primary">상태(state)</span>는 컴포넌트의 상태를 나타내며
                                    porps와 반대로 변할 수 있습니다.
                                    (리스트에서 선택된 값, 체크박스에서 체크된 값 등 동적인 데이터를 다룰때 사용됩니다.)
                                    state는 클래스형 컴포넌트에서만 사용할 수 있습니다.
                                    <br />
                                    각각의 state는 독립적이기 때문에 다른 컴포넌트의 직접적인 접근이 불가능 하지만,
                                    상위 state는 state를 변경해주는 함수를 props로 받을 경우 state의 변경이 가능합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i class="bi bi-subtract"></i> 가상 돔<sup>Virtual DOM</sup>
                                </Card.Title>
                                <Card.Text>
                                    브라우저에서 HTML을 열게되면 DOM을 만들게 됩니다. HTML코드의 특정 부분이 변경되면,
                                    전체 DOM을 새롭게 만들게 되므로 매우 비효율적이게 됩니다.
                                    <br />
                                    이를 개선하는 방법으로 리액트는 <span className="text-primary">가상의 DOM</span>을
                                    만들어 실제 DOM과 비교, 변경된 부분만 DOM에 반영하는 방식으로 작업을 수행합니다.
                                    (in-memory에 존재해서 실제 렌더링되지 않습니다.)
                                    <br />
                                    이로써 프로그래머는 마치 모든 페이지가 변경될 때마다 렌더링되는 것처럼 코드를 작성할 수 있는데,
                                    실제로 리액트 라이브러리는 단지 실제로 변경되는 하위 컴포넌트만을 렌더링할 뿐입니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i class="bi bi-subtract"></i> 라이프 사이클<sup>Life Cycle</sup>
                                </Card.Title>
                                <Card.Text>
                                    모든 리액트 컴포넌트는 생명주기가 존재합니다.
                                    <br />
                                    컴포넌트는 <span className="text-primary">생성(Mounting) &rarr; 업데이트(Updating) &rarr;
                                    제거(Unmounting)</span>의 생명주기를 가지며 클래스 컴포넌트는 라이프 사이클 메서드를
                                    활용하고 함수 컴포넌트는 훅(Hook)을 사용합니다.
                                </Card.Text>
                                <Container>
                                    <Row>
                                        <Col lg={6}>
                                            <Image
                                                src={process.env.PUBLIC_URL + '/assets/img/react/life_cycle methods_diagram1.png'}
                                                thumbnail
                                            />
                                        </Col>
                                        <Col lg={6}>
                                            <Image
                                                src={process.env.PUBLIC_URL + '/assets/img/react/life_cycle methods_diagram2.png'}
                                                thumbnail
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                                <Alert variant="info" className="mt-3">
                                    <Alert.Heading>
                                        React Life Cycle을 알아야 하는 이유!
                                    </Alert.Heading>
                                    <p className="mb-0">
                                        * 생명주기를 알고 생명주기에 따라 어떤 작업을 처리해줘야 하는지 지정해줘야 불필요한
                                        리렌더링을 방지할 수 있습니다.
                                    </p>
                                </Alert>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i class="bi bi-subtract"></i> 훅<sup>hook</sup>
                                </Card.Title>
                                <Card.Text>
                                    <span className="text-primary">훅(hook)</span>은 함수 컴포넌트에서 react state와
                                    라이프 사이클 기능을 연동할 수 있게 해주는 함수입니다. 훅(hook)은 class 안에서는
                                    동작하지 않으며 대신 class 없이 React를 사용할 수 있게 해주는 것입니다.
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