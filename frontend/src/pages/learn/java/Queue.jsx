import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * Queue.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "Queue Interface",
        breadcrumbs = [ "Learn", "Java", "Queue Interface" ];

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
                    title="Queue 인터페이스"
                    subtitle="Interface"
                >
                    <UlList
                        items={[
                            "선입선출 FIFO(First-In-First-Out) 구조 (처음 들어온 원소가 가장 먼저 나감)"
                        ,   "자바에서는 Queue 는 인터페이스이고 필요에 따라 큐 컬렉션을 선택 사용"
                        ]}
                    />

                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>메서드</th>
                                <th>설명</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>boolean add(Object o)</td>
                                <td>지정된 객체를 Queue에 추가저장공간 부족 시 IllegalStateException 발생</td>
                            </tr>
                            <tr>
                                <td>Object remove()</td>
                                <td>Queue에서 객체를 꺼내 반환비어있을 경우 NoSuchElementException 발생</td>
                            </tr>
                            <tr>
                                <td>Object element()</td>
                                <td>삭제없이 요소를 읽어온다비어있을 경우 NosuchElementException 발생</td>
                            </tr>
                            <tr>
                                <td>boolean offer(Object o)</td>
                                <td>Queue에 객체를 저장</td>
                            </tr>
                            <tr>
                                <td>Object poll()</td>
                                <td>Queue에서 객체를 꺼내서 반환비어있을 경우 null을 반환</td>
                            </tr>
                            <tr>
                                <td>Object peek()</td>
                                <td>삭제없이 요소를 읽어온다비어있을 경우 null을 반환</td>
                            </tr>
                        </tbody>
                    </Table>
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;