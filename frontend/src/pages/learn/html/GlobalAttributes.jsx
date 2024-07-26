import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table } from 'react-bootstrap';

import PageTitle from 'layouts/PageTitle';

const GlobalAttributes = () => {
    const data = [
        { attribute : 'accesskey', description : '현재 요소에 대한 키보드 단축키를 생성할 때 사용할 힌트를 제공합니다. accesskey 속성의 값은 반드시 출력 가능한 단일 문자(키보드로 입력할 수 있는 글자)여야 합니다.' },
        { attribute : 'class', description : '공백으로 구분한 요소 클래스의 목록으로, 대소문자를 구분하지 않습니다.' },
        { attribute : 'contenteditable', description : '사용자가 요소를 편집할 수 있는지 나타내는 열거형 특성입니다.' },
        { attribute : 'data-*', description : '사용자 지정 데이터 특성(custom data attributes)이라는 특성 클래스를 형성함으로써 임의의 데이터를 스크립트로 HTML과 DOM 사이에서 교환할 수 있는 방법입니다.' },
        { attribute : 'dir', description : '요소의 쓰기 방향을 나타내는 열거형 특성입니다.' },
        { attribute : 'draggable', description : '요소의 드래그 가능 여부를 나타내는 열거형 특성으로, 네이티브 브라우저 동작 방식과 HTML Drag and Drop API 모두 통제합니다.' },
        { attribute : 'enterkeyhint', description : 'Specifies the text of the enter-key on a virtual keybord' },
        { attribute : 'hidden', description : '해당 요소가 아직, 또는 더 이상 관련이 없음을 나타내는 불리언 특성입니다. 브라우저는 hidden 속성을 설정한 요소를 렌더링 하지 않습니다.' },
        { attribute : 'id', description : '문서 전체에서 유일한 고유식별자(ID)를 정의합니다. 고유식별자의 목적은 프래그먼트 식별자를 사용해 요소를 가리킬 때와 스크립트 및 스타일 적용 시 특정 요소를 식별하기 위함입니다.' },
        { attribute : 'inert', description : 'Specifies that the browser should ignore this section' },
        { attribute : 'inputmode', description : '사용자가 요소나 요소의 콘텐츠를 편집할 때 입력할 수 있는 데이터 유형의 힌트를 제공하는 열거형 특성입니다.' },
        { attribute : 'lang', description : '요소 내의 수정 불가한 텍스트의 언어와, 수정 가능한 텍스트가 사용해야 하는 언어를 정의합니다.' },
        { attribute : 'popover', description : 'Specifies a popover element' },
        { attribute : 'spellcheck', description : '요소의 맞춤법 검사 여부를 지정하는 열거형 특성입니다.' },
        { attribute : 'style', description : '요소에 적용할 CSS 스타일 선언을 담습니다. 스타일은 별도의 파일에 정의하는 것이 권장된다는 점을 참고하세요. 이 특성과 <style> 요소는 주로 테스트 등 빠른 스타일링을 위한 목적으로 사용됩니다.' },
        { attribute : 'tabindex', description : '요소가 포커스 가능함을 나타내며, 이름에서도 알 수 있듯, 주로 Tab키를 사용하는 연속적인 키보드 탐색에서 어느 순서에 위치할지 지정합니다.' },
        { attribute : 'title', description : '요소와 관련된 추가 정보를 제공하는 텍스트를 나타냅니다.' },
        { attribute : 'translate', description : '페이지를 지역화할 때 요소의 Text 노드 자식 및 번역 가능한 특성의 값을 번역해야 되는지, 아니면 그대로 유지해야 하는지 나타내는 열거형 속성입니다.' }
    ];
    return(
        <>
            <Helmet>
                <title>Learn HTML</title>
            </Helmet>

            <PageTitle
                title="HTML Global Attributes"
                depth1="Learn"
                depth2="HTML"
                depth3="Global Attributes"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> HTML Global Attributes
                                </Card.Title>
                                {/* tables */}
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Attribute</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((item, index) => (
                                        <tr>
                                            <td>{ item.attribute }</td>
                                            <td>{ item.description }</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table> {/* End tables */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default GlobalAttributes;