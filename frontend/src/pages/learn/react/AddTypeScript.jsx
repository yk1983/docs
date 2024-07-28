import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';

import PageTitle from 'layouts/PageTitle';

const AddTypeScript = () => {
    return(
        <>
            <Helmet>
                <title>Learn React</title>
            </Helmet>

            <PageTitle
                title="Adding TypeScript(TypeScript 적용)"
                depth1="Learn"
                depth2="React"
                depth3="TypeScript"
            />

            <section className="section">
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 타입스크립트<sup>TypeScript</sup>
                                </Card.Title>
                                <Card.Text>
                                    <span className="text-primary">타입스크립트(TypeScript)</span>는 마이크로소프트에서
                                    구현한 JavaScript의 슈퍼셋(Superset) 프로그래밍 언어입니다.
                                    확장자로는 <code>.ts</code>를 사용하며, 컴파일의 결과물로 JavaScript 코드를 출력합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 자바스크립트와 차이점
                                </Card.Title>
                                <Card.Text>
                                    타입스크립트에서는 버그가 일어나기 쉬운 요소의 타입을 선언하여 버그가 일어나는 것을 방지해줍니다.
                                    예를 들어 타입을 명시하여 선언해주어서 계산이 작동되지 못하게 하거나, 컴파일 전에 오류 메세지를 띄우게 합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 리액트 컴포넌트 타입스크립트로 작성
                                </Card.Title>
                                <Card.Text>
                                    새로운 프로젝트를 시작하려면 아래와 같이 터미널에 명령을 입력합니다.
                                    <br />
                                    <code>$ &#123;npx|yarn&#125; create-react-app frontend [--typescript]</code>
                                    <br />
                                    터미널에 리액트 생성 명령 입력시 <code>--typescript</code>가 있으면 타입스크립트 설정이
                                    적용된 프로젝트가 생성됩니다.
                                    <br />
                                    이미 만든 프로젝트에 타입스크립트를 적용하고 싶으면, 아래와 같이 설치합니다.
                                    <br />
                                    <code>$ npm install --save typescript @types/node @types/react @types/react-dom @types/jest</code>
                                    <br />
                                    또는
                                    <br />
                                    <code>$ yarn add typescript @types/node @types/react @types/react-dom @types/jest</code>
                                    <br />
                                    다음으로 모든 파일의 이름을 TypeScript파일<code>(.js &rarr; .ts / .jsx &rarr; .tsx)</code>로 바꾸고
                                    개발 서버를 다시 시작합니다.
                                    프로젝트를 빌드하기 전에 이러한 유형 오류를 수정해야 합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default AddTypeScript;