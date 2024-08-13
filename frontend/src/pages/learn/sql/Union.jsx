import { BsSubtract, BsPinAngle } from 'react-icons/bs';
import { Row, Col, Card } from 'react-bootstrap';
import { Title, Sup } from 'components/elements/Elements'; // Components
import PageTitle from 'layouts/PageTitle';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    return(
        <>
            <Title
                text="Learn SQL"
            />

            <PageTitle
                title="결합(UNION)"
                depth1="Learn"
                depth2="SQL"
                depth3="UNION"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 결합 <Sup text="Union" className="text-uppercase" />
                                </Card.Title>

                                <Card.Text>
                                    결합(UNION)은 둘 이상의 테이블에 존재하는 같은 성격의 컬럼들을 하나의 쿼리로 검색하는 방법입니다.
                                    <br />
                                    열의 개수와 순서가 모든 쿼리에서 동일해야 하며, 데이터의 타입이 서로 호환될 수 있어야 합니다.
                                </Card.Text>

                                <Highlight
                                    language="sql"
                                    codestring={[
                                        "SELECT <열 목록>"
                                    ,   "  FROM <테이블1>"
                                    ,   " <UNION | UNION ALL>"
                                    ,   "SELECT <열 목록>"
                                    ,   "  FROM <테이블2>"
                                    ].join('\n')}
                                />

                                <dl>
                                    <dt><BsPinAngle /> UNION</dt>
                                    <dd>두 쿼리를 결합한 결과를 중복값을 제거한 후 검색됩니다.</dd>
                                    <dt><BsPinAngle /> UNION ALL</dt>
                                    <dd>두 쿼리를 결합한 결과를 중복값을 제거하지 않고 모두 검색됩니다.</dd>
                                </dl>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default SectionRender;