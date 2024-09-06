import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * ArrayList.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "ArrayList Class",
        breadcrumbs = [ "Learn", "Java", "ArrayList Class" ];

    return(
        <>
            <Helmet>
                <title>{ title }</title>
            </Helmet>

            <Breadcrumbs
                title={ title }
                breadcrumbs={ breadcrumbs }
            />

            <BsContainer className="section">
                <BsCard
                    col={ 12 }
                    title="ArrayList 클래스"
                    subtitle="Class"
                >
                    <UlList
                        items={[
                            "배열을 이용하여 만든 리스트"
                        ,   "데이터의 저장순서가 유지되고 중복을 허용"
                        ,   "데이터량에 따라 공간(capacity)가 자동으로 가변적"
                        ,   "단방향 포인터 구조로 자료에 대한 순차적인 접근에 강점이 있어 검색 속도가 빠름"
                        ,   "삽입 / 삭제가 느림 (단, 순차적으로 추가/삭제 하는 경우에는 가장 빠름)"
                        ]}
                    />

                    <Highlight
                        language="java"
                        codestring={[
                            "List<String> arrayList = new ArrayList<>();"
                        ,   ""
                        ,   "arrayList.add(\"Hello\");"
                        ,   "arrayList.add(\"World\");"
                        ,   ""
                        ,   "arrayList.get(0) // Hello"
                        ].join('\n')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;