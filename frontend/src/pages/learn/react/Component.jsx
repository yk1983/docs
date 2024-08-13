import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    return(
        <>
            <Helmet>
                <title>Learn React</title>
            </Helmet>

            <PageTitle
                title="컴포넌트(Component)"
                depth1="Learn"
                depth2="React"
                depth3="Component"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 컴포넌트<sup>Component</sup>
                                </Card.Title>
                                <Card.Text>
                                    컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있습니다.
                                </Card.Text>
                                <ul>
                                    <li>하나의 레고 블럭이라 이해하면 됩니다.</li>
                                    <li>공통적인 부분들을 여러 레고 블럭처럼 만들어 재사용하는 개념입니다.</li>
                                    <li>개념적으로 컴포넌트는 함수와 유사합니다.</li>
                                    <li>props라는 매개변수를 받아서 jsx에 넘겨주면 화면에 표시가 가능합니다.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 클래스 컴포넌트
                                </Card.Title>
                                <Card.Text>
                                    클래스 컴포넌트는 JavaScript의 클래스 문법을 사용해 만드는 컴포넌트입니다.
                                </Card.Text>
                                <Highlight
                                    language="javascript"
                                    codestring={[
                                        "class MyComponent extends React.Component {",
                                        "    render() {",
                                        "        return <div>Hello, I am a class component!</div>;",
                                        "    }",
                                        "}"
                                    ].join('\n')}
                                />

                                <Card.Title>
                                    <BsSubtract /> 장점
                                </Card.Title>
                                <ul>
                                    <li>상태(state)와 생명주기 메서드(lifecycle methods)를 쉽게 사용할 수 있습니다.</li>
                                    <li>오랫동안 사용되어왔기 때문에 많은 예제와 자료를 찾을수 있습니다.</li>
                                </ul>

                                <Card.Title>
                                    <BsSubtract /> 단점
                                </Card.Title>
                                <ul>
                                    <li>코드가 길어질 수 있습니다.</li>
                                    <li>함수 컴포넌트보다 조금 더 복잡해집니다.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 함수 컴포넌트
                                </Card.Title>
                                <Card.Text>
                                    함수 컴포넌트는 JavaScript 함수로 만든 컴포넌트입니다.
                                </Card.Text>
                                <Highlight
                                    language="javascript"
                                    codestring={[
                                        "function MyComponent() {",
                                        "    return <div>Hello, I am a function component!</div>;",
                                        "}"
                                    ].join('\n')}
                                />

                                <Card.Title>
                                    <BsSubtract /> 장점
                                </Card.Title>
                                <ul>
                                    <li>코드가 짧고 간단합니다.</li>
                                    <li>함수 컴포넌트에서도 상태(state)를 사용할 수 있는 useState와 같은 훅(Hooks)을 사용할 수 있습니다.</li>
                                    <li>이해하고 사용하기 쉽습니다.</li>
                                </ul>

                                <Card.Title>
                                    <BsSubtract /> 단점
                                </Card.Title>
                                <ul>
                                    <li>
                                        <del>클래스 컴포넌트만큼 기능이 많지 않습니다.</del> (지금은 거의 다 사용 가능합니다.)
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

export default SectionRender;