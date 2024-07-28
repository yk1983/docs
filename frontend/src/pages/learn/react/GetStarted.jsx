import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract, BsLink45Deg } from 'react-icons/bs';

import PageTitle from 'layouts/PageTitle';

const Setting = () => {
    return(
        <>
            <Helmet>
                <title>Learn React</title>
            </Helmet>

            <PageTitle
                title="시작하기(Getting started)"
                depth1="Learn"
                depth2="React"
                depth3="시작하기(Getting started)"
            />

            <section className="section">
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> Node.js 설치 (MacOS)
                                </Card.Title>
                                <Card.Text>
                                    React 프로젝트를 생성하기 위해서는 Node.js가 먼저 설치되어 있어야 합니다.
                                </Card.Text>
                                <ol>
                                    <li>
                                        <Link to="https://nodejs.org/ko/" target="_blank">
                                            <BsLink45Deg /> Node.js
                                        </Link>로 접속합니다.
                                    </li>
                                    <li>
                                        LTS pkg파일을 다운로드 받아 실행시켜 Node.js 설치를 실행합니다.
                                    </li>
                                    <li>
                                        터미널에서 <code>$ node --v</code> 명령을 입력하여 설치된 node.js 버전을 확인합니다.
                                    </li>
                                    <li>
                                        터미널에서 <code>$ npm --v</code> 명령을 입력하여 npm이 설치되었는지 확인합니다.
                                    </li>
                                </ol>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> NPM<sup>Node Package Manager</sup>
                                </Card.Title>
                                <Card.Text>
                                    <span className="text-primary">NPM(Node Package Manager)</span>은 자바스크립트
                                    라이브러리를 관리 할 수 있습니다. (Node.js를 설치하면 자동으로 설되됩니다.)
                                    <br />
                                    Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지
                                    설치 및 관리를 위한 CLI(Command line interface)를 제공합니다.
                                    자신이 작성한 패키지를 공개할 수도 있고 필요한 패키지를 검색하여 재사용할 수도 있습니다.
                                    <br />
                                    <code>node_modules</code>폴더에 라이브러리를 저장하고, <code>package.json</code>에
                                    관련 라이브러리 정보를 저장합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> yarn
                                </Card.Title>
                                <Card.Text>
                                    <span className="text-primary">yarn</span>은 npm의 단점을 보완, 성능 및 속도를
                                    개선한 것이라고 할 수 있습니다.
                                </Card.Text>
                                <ol>
                                    <li>터미널에서 <code>$ npm install --global yarn</code> 명령을 입력하여 설치할 수 있습니다.</li>
                                    <li>터메널에서 <code>$ yarn -v</code> 명령을 입력하여 설치된 버전을 확인할 수 있습니다.</li>
                                </ol>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> CRA<sup>Create-React-App</sup> 설치
                                </Card.Title>
                                <Card.Text>
                                    리액트 프로젝트를 시작하는데 필요한 개발 환경을 세팅해주는 도구입니다.
                                    이것은 개발 환경을 설정하고, 최신 JavaScript를 사용하게 해주며, 좋은 개발 경험과
                                    프로덕션 앱 최적화를 해줍니다.
                                    Node 14.0.0 혹은 상위 버전 및 npm 5.6 혹은 상위 버전이 필요합니다.
                                    <br />
                                    리액트를 개발하고자 하는 프로젝트 위치에서 새로운 프로젝트를 만들기 위해 아래의
                                    명령어를 실행합니다.
                                    <br />
                                    (아래 명령의 frontend가 설치될 프로젝트의 폴더이고, <code>--typescript</code> 명령어 옵션이
                                    있으면 타입스크립트 설정이 적용된 프로젝트가 생성되고 확장자는 <code>.ts</code>
                                    또는 <code>.tsx</code>를 사용합니다.)
                                    <br />
                                    <code>$ npx create-react-app frontend [--typescript]</code>
                                    <br />
                                    <code>$ cd frontend</code>
                                    <br />
                                    <code>$ npm start</code>
                                    <br />
                                    리액트를 실행하면
                                    <Link to="http://localhost:3000/">
                                        <BsLink45Deg /> 로컬(http://localhost:3000/)
                                    </Link>으로 접속되어 확인할 수 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Setting;