import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * ListIF.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "List Interface",
        breadcrumbs = [ "Learn", "Java", "List Interface" ];

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
                    title="List 인터페이스"
                    subtitle="Interface"
                >
                    <UlList
                        items={[
                            "저장 순서가 유지되는 컬렉션을 구현하는 데 사용"
                        ,   "같은 요소의 중복 저장을 허용"
                        ,   "배열과 마찬가지로 인덱스(index)로 요소에 접근"
                        ,   "리스트와 배열의 가장 큰 차이는 리스트는 자료형 크기가 고정이 아닌 데이터 양에 따라 동적으로 늘어났다 줄어들수 있음. (가변)"
                        ,   "요소 사이에 빈공간을 허용하지 않아 삽입/삭제 할때마다 배열 이동이 일어남"
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
                                <td>
                                    void add(int index, Object element)
                                    <br />
                                    boolean addAll(int index, Collection c)
                                </td>
                                <td>지정된 위치(index)에 객체(element) 또는컬렉션에 포함된 객체들을 추가</td>
                            </tr>
                            <tr>
                                <td>Object remove(int index)</td>
                                <td>지정된 위치(index)에 있는 객체를 삭제하고 삭제된 객체를 반환</td>
                            </tr>
                            <tr>
                                <td>Object get(int index)</td>
                                <td>지정된 위치(index)에 있는 객체를 반환</td>
                            </tr>
                            <tr>
                                <td>Object set(int index, Object element)</td>
                                <td>지정된 위치(index)에 객체(element)를 저장</td>
                            </tr>
                            <tr>
                                <td>int indexOf(Object o)</td>
                                <td>지정된 객체의 위치(index)를 반환 (순방향)</td>
                            </tr>
                            <tr>
                                <td>int lastIndexOf(Object o)</td>
                                <td>지정된 객체의 위치(index)를 반환 (역방향)</td>
                            </tr>
                            <tr>
                                <td>List subList(int fromIndex, int toIndex)</td>
                                <td>지정된 범위(from ~ to)에 있는 객체를 반환</td>
                            </tr>
                            <tr>
                                <td>
                                    ListIterator listIterator()
                                    <br />
                                    ListIterator listIterator(int index)
                                </td>
                                <td>List의 객체에 접근할 수 있는 ListIterator를 반환</td>
                            </tr>
                            <tr>
                                <td>void sort(Comparator c)</td>
                                <td>지정된 비교자(comparator)로 List를 정렬</td>
                            </tr>
                        </tbody>
                    </Table>
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;