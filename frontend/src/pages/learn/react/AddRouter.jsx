import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';

import PageTitle from 'layouts/PageTitle';

const Router = () => {
    return(
        <>
            <Helmet>
                <title>Learn React</title>
            </Helmet>

            <PageTitle
                title="Adding Router(Router 적용)"
                depth1="Learn"
                depth2="React"
                depth3="Router"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> 라우터<sup>Router</sup>
                                </Card.Title>
                                <Card.Text>
                                    라우팅은 사용자가 요청한 링크주소 즉, URL에 맞는 페이지를 찾아서 보여주는 것이라고 할 수 있습니다.
                                    MPA 방식에서는 여러페이지를 분리해두고 페이지간의 이동으로 이 라우트 시스템을 구축을 하지만,
                                    그러나 SPA 방식의 리액트에서 라우트 시스템을 구축하기위해 React Router를 사용을 하는 것 입니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={process.env.PUBLIC_URL + '/assets/img/react/spa_lifecycle.png'}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> SPA<sup>Single Page Application</sup>
                                </Card.Title>
                                <Card.Text>
                                    모던 웹의 패러다임으로, 한 개의 페이지로 구성된 어플리케이션입니다.
                                    <br />
                                    서버로부터 완전한 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써
                                    사용자와 소통하는 앱 어플리케이션이나 웹사이트를 말합니다.
                                    SPA의 핵심 가치는 사용자 경험(UX) 향상에 있으며 부가적으로 애플리케이션 속도의 향상도
                                    기대할 수 있어서 모바일 퍼스트(Mobile First) 전략에 부합니다.
                                </Card.Text>

                                <h6><i className="bi bi-feather"></i> 작동방식</h6>
                                <ul>
                                    <li>
                                        SPA는 웹 에플리케이션에 필요한 모든 정적 리소스를 최초 접근 시 단 한번만 다운로드
                                    </li>
                                    <li>
                                        이후 새로운 페이지 요청 시, 페이지 갱신에 필요한 데이터만을 JSON으로 전달받아 페이지를 갱신하여
                                        기존 페이지의 내부를 수정해서 보여주는 방식
                                    </li>
                                    <li>
                                        SPA를 일반적으로 CSR(Client Side Rendering) 방식으로 렌더링
                                    </li>
                                </ul>

                                <h6><i className="bi bi-feather"></i> 장점</h6>
                                <ul>
                                    <li>
                                        <strong>속도 및 응답시간 : </strong>
                                        속도는 전반적인 사용자 경험을 향상시키는 데 중요한 요소입니다.
                                        전체 페이지를 다시 렌더링하지 않고 변경되는 부분만을 갱신하므로 새로고침이 발생하지 않아
                                        네이티브 앱과 유사한 사용자 경험을 제공할 수 있습니다.
                                    </li>
                                    <li>
                                        <strong>모바일 친화적 : </strong>
                                        모바일 앱도 SPA와 동일한 아키텍처에서 개발되므로 모바일 개발을 염두해두면 동일한
                                        백엔드 코드를 재사용하도록 할 수 있습니다.
                                    </li>
                                    <li>
                                        <strong>개발 간소화 : </strong>
                                        서버에서 페이지를 렌더링하기 위해 코드를 작성할 필요가 없습니다.
                                        SPA는 보다 "현대적인" 것으로 간주되며 오늘날의 민첩한 개발 요구 사항에 적합합니다.
                                    </li>
                                    <li>
                                        <strong>로컬 스토리지 캐시 : </strong>
                                        SPA는 모든 로컬 스토리지를 효과적으로 캐시할 수 있습니다.
                                        애플리케이션은 하나의 요청만 보내고 모든 데이터를 저장한 다음 이 데이터를
                                        사용할 수 있으며 오프라인에서도 작동합니다.
                                    </li>
                                </ul>

                                <h6><i className="bi bi-feather"></i> 단점</h6>
                                <ul>
                                    <li>
                                        <strong>초기 구동 속도 : </strong>
                                        SPA는 웹 애플리케이션에 필요한 모든 정적 리소스를 최초 접근시 단 한번 다운로드하기
                                        때문에 초기 구동 속도가 상대적으로 느리게됩니다.
                                    </li>
                                    <li>
                                        <strong>SEO(검색엔진 최적화) 이슈 : </strong>
                                        SPA는 JavaScript로 구축됩니다.(CSR 방식)
                                        자바스크립트를 읽지 못하는 검색엔진에 대해서 크롤링이 되지않아 색인이 되지 않는
                                        문제가 발생할 수 있습니다.
                                    </li>
                                    <li>
                                        <strong>보안 문제 : </strong>
                                        XSS(교차 사이트 스크립팅)로 인해 공격자가 다른 사용자가 웹 응용 프로그램에
                                        클라이언트 측 스크립트를 삽입할 수 있는 위험이 있습니다.
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={process.env.PUBLIC_URL + '/assets/img/react/mpa_lifecycle.png'}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> MPA<sup>Multiple Page Application</sup>
                                </Card.Title>
                                <Card.Text>
                                    웹 앱을 개발하는 전통적인 방식으로, 여러 개의 페이지로 구성된 어플리케이션입니다.
                                </Card.Text>
                                <h6><i className="bi bi-feather"></i> 작동방식</h6>
                                <ul>
                                    <li>
                                        새로운 페이지를 요청할 때마다 서버에서 렌더링된 정적 리소스(HTML, CSS, JavaScript)가 다운로드
                                    </li>
                                    <li>
                                        페이지 이동하거나 새로고침하면 전체 페이지를 다시 렌더링
                                    </li>
                                    <li>
                                        MPA는 SSR(Server Side Application) 방식으로 렌더링
                                    </li>
                                </ul>

                                <h6><i className="bi bi-feather"></i> 장점</h6>
                                <ul>
                                    <li>
                                        <strong>SEO 친화적 : </strong>
                                        MPA를 사용하여 여러 페이지를 생성할 수 있기 때문에 훨씬 더 많은 수의 키워드를 타겟팅할 수 있습니다.
                                        이렇게 하면 Google에서 얻을 수 있는 유기적 트래픽의 양이 자동으로 향상됩니다.
                                        더 많은 페이지로 인해 여러 HTML 파일이 존재하는데, HTML 다운로드하여 페이지를
                                        크롤링하기 때문에 검색 엔진이 작동하는 방식에 더 적합합니다.
                                    </li>
                                    <li>
                                        <strong>확장성 : </strong>
                                        다중 페이지로 원하는 만큼 페이지를 추가할 수 있습니다.
                                        (ex. Amazon 플랫폼에서 사용할 수 있는 제품의 수는 원하는 만큼 콘텐츠를 추가)
                                    </li>
                                </ul>

                                <h6><i className="bi bi-feather"></i> 단점</h6>
                                <ul>
                                    <li>
                                        <strong>페이지 이동 시 느린 속도 : </strong>
                                        사용자가 새로운 페이지를 이동하면 전체 페이지를 다시 렌더링하기 때문에 HTML, CSS, JS와
                                        같은 리소스들이 새로 고쳐져서 속도에 영향을 받습니다.
                                    </li>
                                    <li>
                                        <strong>복잡한 개발 : </strong>
                                        개발자는 클라이언트 측과 서버 측 모두에 프레임워크를 사용해야 합니다.
                                        그 결과 애플리케이션 개발 시간이 더 길어집니다.
                                    </li>
                                    <li>
                                        <strong>보안 및 유지보수 : </strong>
                                        개발자는 모든 페이지가 안전한지 확인 해야하는데 페이지가 많아서 지속적으로 유지보수
                                        하는 것이 어려움이 있습니다.
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> React-Router-Dom
                                </Card.Title>
                                <Card.Text>
                                    React로 생성된 SPA 내부에서 페이지 이동이 가능하도록 만들어주는 라이브러리입니다.
                                </Card.Text>
                                <dl>
                                    <dt><i className="bi bi-feather"></i> BrowserRouter</dt>
                                    <dd>
                                        history API를 활용해 history객체를 생성합니다.
                                        history API는 내부적으로 스택 자료구조의 형태를 띄기 때문에 사용자가 방문한
                                        url 기록들을 차곡차곡 쌓는 형태로 저장해둔다고 생각하면 됩니다.
                                        라우팅을 진행할 컴포넌트 상위에 BrowserRouter 컴포넌트를 생성하고 감싸주어야 합니다.
                                    </dd>
                                    <dt><i className="bi bi-feather"></i> Route</dt>
                                    <dd>
                                        현재 브라우저의 location(window.href.location 정보를 가져옵니다.) 상태에 따라 다른
                                        요소를 렌더링합니다.
                                        <br />
                                        <code>Route.element</code> : 조건이 맞을 때 렌더링할 요소, &lt;Element /&gt; 의 형식으로 전달됩니다.
                                        <br />
                                        <code>Route.path</code> : 현재 path값이 url과 일치하는지 확인해 해당 url에 매칭된 요소를 렌더링해줍니다.
                                    </dd>
                                    <dt><i className="bi bi-feather"></i> Routes</dt>
                                    <dd>
                                        모든 Route의 상위 경로에 존재해야 하며, location변경 시 하위에 있는 모든 Route를
                                        조회해 현재 location과 맞는 Route를 찾아줍니다.
                                    </dd>
                                </dl>
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
                                    터미널에서 해당 프로젝트 경로에 아래와 같이 명령을 실행합니다.
                                    <br />
                                    <code>$ npm i react-router-dom</code>
                                    <br />
                                    또는
                                    <br />
                                    <code>$ yarn add react-router-dom</code>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> 적용<sup>Apply</sup>
                                </Card.Title>
                                <Card.Text>
                                    아래와 같이 적용합니다.
                                </Card.Text>
                                <ol>
                                    <li>
                                        라이브러리를 임포트합니다.
                                        <br />
                                        <code>import &#123; BrowserRouter, Routes, Route &#125; from 'react-router-dom';</code>
                                    </li>
                                    <li>
                                        BrowserRouter 컴포넌트 사용하기 :
                                        <br />
                                        <code>index.jsx</code> 최상단 &lt;BrowserRouter&gt;태그로 감싸기
                                    </li>
                                    <li>
                                        Routes, Route 컴포넌트 사용하기 :
                                        <br />
                                        &lt;Routes&gt;컴포넌트는 여러 Route를 감싸서 그 중에서 해당되는 Route를 렌더링 해주는 역할을 합니다.
                                        그리고 &lt;Route&gt;는 path 속성에는 경로를 element 속성에는 보여주고 싶은 컴포넌트를 넣어주면 됩니다.
                                    </li>
                                    <li>
                                        Link를 이용한 이동 :
                                        <br />
                                        html 페이지에서는 링크를 넣어줄 때 &lt;a&gt;태그를 사용하지만,
                                        리액트 라우터를 사용하는 프로젝트에서는 &lt;a&gt;태그를 바로 사용하면 안됩니다.
                                        왜냐하면 &lt;a&gt;태그를 클릭하여 페이지를 이동할 때 브라우저에서는 페이지를
                                        새로 불러오게 되기 때문입니다.
                                        <br />
                                        따라서 Link를 사용해야합니다.
                                        Link 컴포넌트 역시 &lt;a&gt;태그를 사용하긴 하지만, 페이지를 새로 불러오는 것을 막고
                                        History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있습니다.
                                    </li>
                                </ol>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Router;