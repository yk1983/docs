import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { DlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "SQL결합",
        breadcrumbs = [ "Learn", "SQL", "UNION" ];

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
                    title="결합"
                    subtitle="UNION"
                >
                    <BsCardText>
                        결합(UNION)은 둘 이상의 테이블에 존재하는 같은 성격의 컬럼들을 하나의 쿼리로 검색하는 방법입니다.
                        <br />
                        열의 개수와 순서가 모든 쿼리에서 동일해야 하며, 데이터의 타입이 서로 호환될 수 있어야 합니다.
                    </BsCardText>

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

                    <DlList
                        header="UNION과 UNION ALL"
                        items={[
                            {
                                term : "UNION"
                            ,   description : "두 쿼리를 결합한 결과를 중복값을 제거한 후 검색됩니다."
                            }
                        ,   {
                                term : "UNION ALL"
                            ,   description : "두 쿼리를 결합한 결과를 중복값을 제거하지 않고 모두 검색됩니다."
                            }
                        ]}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;