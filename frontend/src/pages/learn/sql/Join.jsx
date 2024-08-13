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
                title="조인(JOIN)"
                depth1="Learn"
                depth2="SQL"
                depth3="JOIN"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 조인 <Sup text="Join" className="text-uppercase" />
                                </Card.Title>

                                <Card.Text>
                                    조인(JOIN)은 둘 이상의 테이블을 연결하여 데이터를 검색하는 방법으로 서로 연결하려면 적어도 하나의 컬럼을 공유하고 있어야 합니다.
                                    <br />
                                    서로 공유하고 있는 컬럼을 Primary Key(PK) 또는 Foreign Key(FK) 값으로 사용합니다.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img
                                variant="bottom"
                                src={ process.env.PUBLIC_URL + '/assets/img/sql/sql_joins.png' }
                            />
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 내부 조인 <Sup text="Inner Join" className="text-uppercase" />
                                </Card.Title>

                                <Card.Text>
                                    두 테이블을 연결할 때 가장 많이 사용하는 것이 내부 조인입니다.
                                    그냥 조인이라고 부르면 내부 조인을 의미합니다.
                                </Card.Text>

                                <Highlight
                                    language="sql"
                                    codestring={[
                                        "SELECT <열 목록>"
                                    ,   "  FROM <기준 테이블>"
                                    ,   " INNER JOIN <조인 테이블>"
                                    ,   "    ON <조인 조건>"
                                    ,   "[WHERE 검색 조건]"
                                    ].join('\n')}
                                />

                                <Card.Text>
                                    INNER JOIN은 기준 테이블(table1), 조인 테이블(table2)에 조인 컬럼(column_name)에
                                    해당하는 값이 모두 존재하는 경우에만 데이터가 조회(SELECT)됩니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 외부 조인 <Sup text="Outer Join" className="text-uppercase" />
                                </Card.Title>

                                <Card.Text>
                                    내부 조인은 두 테이블에 모두 데이터가 있어야만 결과가 나오지만,
                                    외부 조인은 한쪽에만 데이터가 있어도 결과가 나옵니다.
                                </Card.Text>

                                <Highlight
                                    language="sql"
                                    codestring={[
                                        "SELECT <열 목록>"
                                    ,   "  FROM <기준 테이블(LEFT 테이블)>"
                                    ,   "<LEFT | RIGHT | FULL> OUTER JOIN <조인 테이블(RIGHT 테이블)>"
                                    ,   "    ON <조인 조건>"
                                    ,   "[WHERE 검색 조건]"
                                    ].join('\n')}
                                />

                                <dl>
                                    <dt><BsPinAngle /> LEFT OUTER JOIN</dt>
                                    <dd>기준 테이블(왼쪽 테이블)의 모든 값이 출력되는 조인입니다.</dd>
                                    <dt><BsPinAngle /> RIGHT OUTER JOIN</dt>
                                    <dd>조인 테이블(오른쪽 테이블)의 모든 값이 출력되는 조인입니다.</dd>
                                    <dt><BsPinAngle /> FULL OUTER JOIN</dt>
                                    <dd>기준 테이블(왼쪽 테이블)과 조인 테이블(오른쪽 테이블)의 모든 값이 출력되는 조인입니다.</dd>
                                </dl>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 상호 조인 <Sup text="Cross Join" className="text-uppercase" />
                                </Card.Title>

                                <Card.Text>
                                    한쪽 테이블의 모든 행과 다른 쪽 테이블의 모든 행을 조인시키는 기능입니다.
                                    상호 조인 결과의 전체 행 개수는 두 테이블의 각 행의 개수를 곱한 수만큼 됩니다.
                                    카티션 곱(CARTESIAN PRODUCT)라고도 합니다.
                                </Card.Text>

                                <Highlight
                                    language="sql"
                                    codestring={[
                                        "SELECT <열 목록>"
                                    ,   "  FROM <기준 테이블>"
                                    ,   " CROSS JOIN <조인 테이블>"
                                    ].join('\n')}
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 자체 조인 <Sup text="Self Join" className="text-uppercase" />
                                </Card.Title>

                                <Card.Text>
                                    자체 조인은 자기 자신과 조인하므로 1개의 테이블을 사용합니다.
                                    별도의 문법이 있는 것은 아니고 1개로 조인하면 자체 조인이 됩니다.
                                </Card.Text>

                                <Highlight
                                    language="sql"
                                    codestring={[
                                        "SELECT <열 목록>"
                                    ,   "  FROM <테이블> 별칭A"
                                    ,   " INNER JOIN <테이블> 별칭B"
                                    ,   "[WHERE 검색 조건]"
                                    ].join('\n')}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default SectionRender;