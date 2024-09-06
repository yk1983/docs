import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * CollectionIF.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "Collection Interface",
        breadcrumbs = [ "Learn", "Java", "Collection Interface" ];

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
                    title="Collection 인터페이스"
                    subtitle="Interface"
                >
                    <UlList
                        items={[
                            "List, Set, Queue에 상속을하는 실질적인 최상위 컬렉션 타입"
                        ,   "업캐스팅으로 다양한 종류의 컬렉션 자료형을 받아 자료를 삽입하거나 삭제, 탐색 기능 (다형성)"
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
                                    boolean add(Object o)
                                    <br />
                                    boolean addAll(Collection c)
                                </td>
                                <td>
                                    지정된 객체(Object) 또는 컬렉션(Collection)의 객체들을 컬렉션에 추가
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    boolean contains(Object o)
                                    <br />
                                    boolean containsAll(Collection c)
                                </td>
                                <td>
                                    지정된 객체(Object) 또는 컬렉션(Collection)의 객체들이 컬렉션에 포함되어 있는지 확인
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    boolean remove(Object o)
                                    <br />
                                    boolean removeAll(Collection c)
                                </td>
                                <td>
                                    지정된 객체(Object) 또는 지정된 컬렉션(Collection)에 포함된 객체들을 삭제
                                </td>
                            </tr>
                            <tr>
                                <td>boolean retainAll(Collection c)</td>
                                <td>
                                    지정된 컬렉션(Collection)에 포함된 객체만을 남기고 다른 객체들은 컬렉션(Collection)
                                    에서 삭제.
                                    <br />
                                    사실상 removeAll 의 대칭 버전. (교집합 동작) 이 작업으로 컬렉션(Collection)에 변화가
                                    있으면 <code>true</code> 를 없으면 <code>false</code> 를 반환
                                </td>
                            </tr>
                            <tr>
                                <td>void clear()</td>
                                <td>Collection의 모든 객체를 삭제</td>
                            </tr>
                            <tr>
                                <td>boolean equals(Object o)</td>
                                <td>동일한 컬렉션인지 비교</td>
                            </tr>
                            <tr>
                                <td>int hashCode()</td>
                                <td>컬렉션(Collection)의 hash code를 반환</td>
                            </tr>
                            <tr>
                                <td>boolean isEmpty()</td>
                                <td>컬렉션(Collection)이 비어있는지 확인</td>
                            </tr>
                            <tr>
                                <td>Iterator iterator()</td>
                                <td>컬렉션(Collection)의 iterator 를 얻어서 반환 (상위 Iterable 인터페이스를 상속)</td>
                            </tr>
                            <tr>
                                <td>int size()</td>
                                <td>컬렉션(Collection)에 저장된 객체의 개수를 반환</td>
                            </tr>
                            <tr>
                                <td>Object[] toArray()</td>
                                <td>컬렉션()에 저장된 객체를 객체배열(Object[])로 반환</td>
                            </tr>
                            <tr>
                                <td>Object[] toArray(Object[] a)</td>
                                <td>지정된 배열에 컬렉션(Collection)의 객체를 저장해서 반환</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Note
                        title="팁"
                        content={[
                            "JDK 1.8부터는 함수형 프로그래밍을 위해 parallelStream, removeIf, stream, forEach 디폴트(default) 메서드가 추가되었습니다."
                        ]}
                    />

                    <Highlight
                        language="java"
                        codestring={[
                            "Collection<Number> col1 = new ArrayList<>();"
                        ,   "col1.add(1);"
                        ,   ""
                        ,   "Collection<Number> col2 = new HashSet<>();"
                        ,   "col1.add(1);"
                        ,   ""
                        ,   "Collection<Number> col3 = new LinkedList<>();"
                        ,   "col1.add(1);"
                        ].join('\n')}
                    />

                    <Note
                        title="팁"
                        content={[
                            "컬렉션(Collection) 인터페이스의 메서드를 보면 요소(객체)에 대한 추가, 삭제, 탐색은 다형성 기능으로 사용이 가능하지만,"
                        ,   "데이터를 get 하는 메서드는 보이지 않습니다."
                        ,   "\n왜냐하면 각 컬렉션 자료형 마다 구현하는 자료 구조가 제각각 이기 때문에 최상위 타입으로 조회하기 까다롭기 때문입니다."
                        ].join(' ')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;