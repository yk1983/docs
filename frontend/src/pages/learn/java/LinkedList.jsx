import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * LinkedList.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "LinkedList Class",
        breadcrumbs = [ "Learn", "Java", "LinkedList Class" ];

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
                    title="LinkedList 클래스"
                    subtitle="Class"
                >
                    <UlList
                        items={[
                            "노드(객체)를 연결하여 리스트 처럼 만든 컬렉션 (배열이 아님)"
                        ,   "데이터의 중간 삽입, 삭제가 빈번할 경우 빠른 성능을 보장"
                        ,   "하지만 임의의 요소에 대한 접근 성능은 저하"
                        ,   "자바의 LinkedList는 Doubly LinkedList(양방향 포인터 구조)로 이루어짐"
                        ,   "LinkedList는 리스트 용도 이외에도, 스택, 큐, 트리 등의 자료구조의 근간"
                        ]}
                    />

                    <Highlight
                        language="java"
                        codestring={[
                            "List<String> linkedList = new LinkedList<>();"
                        ,   ""
                        ,   "linkedList.add(\"Hello\");"
                        ,   "linkedList.add(\"World\");"
                        ,   ""
                        ,   "linkedList.get(0); // Hello"
                        ].join('\n')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;