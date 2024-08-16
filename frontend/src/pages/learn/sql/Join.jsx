import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { DlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "SQL조인",
        breadcrumbs = [ "Learn", "SQL", "JOIN" ];

    return(
        <>
            <Helmet>
                <title>{ title }</title>
            </Helmet>

            <Breadcrumbs
                title={ title }
                breadcrumbs={ breadcrumbs }
            />

            <BsContainer className="section" >
                <BsCard
                    col={ 12 }
                    title="조인"
                    subtitle="JOIN"
                    image={{
                        variant : 'bottom'
                    ,   src : '/assets/img/sql/sql_joins.png'
                    }}
                >
                    <BsCardText>
                        <span className="text-primary">조인(JOIN)</span>은 둘 이상의 테이블을 연결하여 데이터를 검색하는
                        방법으로 서로 연결하려면 적어도 하나의 컬럼을 공유하고 있어야 합니다.
                        <br />
                        서로 공유하고 있는 컬럼을 <span className="text-primary">Primary Key(PK)</span> 또는
                        <span className="text-primary">Foreign Key(FK)</span> 값으로 사용합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="내부 조인"
                    subtitle="INNER JOIN"
                >
                    <BsCardText>
                        두 테이블을 연결할 때 가장 많이 사용하는 것이 <span className="text-primary">내부 조인(INNER JOIN)</span>입니다.
                        그냥 조인이라고 부르면 내부 조인을 의미합니다.
                    </BsCardText>

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

                    <BsCardText>
                        내부 조인은 기준 테이블(table1), 조인 테이블(table2)에 조인 컬럼(column_name)에 해당하는 값이
                        모두 존재하는 경우에만 데이터가 조회(SELECT)됩니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="외부 조인"
                    subtitle="OUTER JOIN"
                >
                    <BsCardText>
                        내부 조인은 두 테이블에 모두 데이터가 있어야만 결과가 나오지만, <span className="text-primary">외부 조인(OUTER JOIN)</span>은
                        한쪽에만 데이터가 있어도 결과가 나옵니다.
                    </BsCardText>

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

                    <DlList
                        header="외부 조인의 종류"
                        items={[
                            {
                                term : "LEFT OUTER JOIN"
                            ,   description : "기준 테이블(왼쪽 테이블)의 모든 값이 출력되는 조인입니다."
                            }
                        ,   {
                                term : "RIGHT OUTER JOIN"
                            ,   description : "조인 테이블(오른쪽 테이블)의 모든 값이 출력되는 조인입니다."
                            }
                        ,   {
                                term : "FULL OUTER JOIN"
                            ,   description : "기준 테이블(왼쪽 테이블)과 조인 테이블(오른쪽 테이블)의 모든 값이 출력되는 조인입니다."
                            }
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="상호 조인"
                    subtitle="CROSS JOIN"
                >
                    <BsCardText>
                        <span className="text-primary">상호 조인(CROSS JOIN)</span>은 한쪽 테이블의 모든 행과 다른 쪽
                        테이블의 모든 행을 조인시키는 기능입니다.
                        상호 조인 결과의 전체 행 개수는 두 테이블의 각 행의 개수를 곱한 수만큼 됩니다.
                        <br />
                        <span className="text-primary">카티션 곱(CARTESIAN PRODUCT)</span>라고도 합니다.
                    </BsCardText>

                    <Highlight
                        language="sql"
                        codestring={[
                            "SELECT <열 목록>"
                        ,   "  FROM <기준 테이블>"
                        ,   " CROSS JOIN <조인 테이블>"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="자체 조인"
                    subtitle="SELF JOIN"
                >
                    <BsCardText>
                        <span className="text-primary">자체 조인(SELF JOIN)</span>은 자기 자신과 조인하므로 1개의 테이블을 사용합니다.
                        <br />
                        별도의 문법이 있는 것은 아니고 1개로 조인하면 자체 조인이 됩니다.
                    </BsCardText>

                    <Highlight
                        language="sql"
                        codestring={[
                            "SELECT <열 목록>"
                        ,   "  FROM <테이블> 별칭A"
                        ,   " INNER JOIN <테이블> 별칭B"
                        ,   "[WHERE 검색 조건]"
                        ].join('\n')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;