import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

import PageTitle from 'layouts/PageTitle';

const AddBootstrap = () => {
    return(
        <>
            <Helmet>
                <title>Learn React</title>
            </Helmet>

            <PageTitle
                title="Adding Bootstrap(Bootstrap 적용)"
                depth1="Learn"
                depth2="React"
                depth3="Bootstrap"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> 부트스트랩<sup>Bootstrap</sup>
                                </Card.Title>
                                <Card.Text>
                                    트위터에서 시작된 오픈 소스 프론트엔드 프레임워크입니다.
                                    각종 레이아웃, 버튼, 입력창 등의 디자인과 기능을 CSS와 JavaScript로 만들어 놓은 것으로
                                    글자, 인용문, 목록, 표, 입력폼, 버튼, 이미지, 아이콘 등의 자잘한 것뿐만 아니라, 드롭다운 메뉴,
                                    내비게이션 바, 버튼, 탭, 리스트, 페이지 이동 바, 알림 메시지, 썸네일, 진행 바 등의
                                    웹 페이지에서 많이 쓰이는 요소를 거의 전부 내장하고 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> 설치<sup>Installation</sup>
                                </Card.Title>
                                <Card.Text>
                                    <ol>
                                        <li>
                                            <Link to="https://react-bootstrap.github.io" target="_blank">
                                                <i className="bi bi-link-45deg"></i> 리액트 부트스트랩
                                            </Link> 사이트에 접속합니다.
                                        </li>
                                        <li>Get started 버튼 클릭합니다.</li>
                                        <li>
                                            Installation에 npm으로 설치하라는게 나오는데 터미널에서 해당 프로젝트 경로에
                                            아래와 같이 명령을 실행합니다.
                                            <br />
                                            <code>$ npm install react-boostrap bootstrap</code>
                                        </li>
                                        <li>
                                            리액트에서 부트스트랩을 사용하기 위해서는 index.js나 App.js에서 아래
                                            bootstrap 라이브러리를 import해줘야 적용됩니다.
                                            <br />
                                            <code>import 'bootstrap/dist/css/bootstrap.min.css';</code>
                                        </li>
                                    </ol>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> 임포트 컴포넌트<sup>Importing Components</sup>
                                </Card.Title>
                                <Card.Text>
                                    라이브러리 전체가 아닌 <code>react-bootstrap/Button</code>과 같은 각각의 컴포넌트
                                    구성 요소를 가져올 수 있습니다. 이렇게 사용하면 컴포넌트 요소만 불러와 클라이언트에
                                    보내는 코드와 양을 크게 줄일 수 있습니다.
                                    <br />
                                    아래와 같이 import하는 방법은 두가지가 있습니다.
                                </Card.Text>
                                <ul>
                                    <li><code>import Button from 'react-bootstrap/Button';</code></li>
                                    <li><code>import &#123; Button &#125; from 'react-bootstrap';</code></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default AddBootstrap;