import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * Iterable.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "Iterable Interface",
        breadcrumbs = [ "Learn", "Java", "Iterable Interface" ];

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
                    title="Iterable 인터페이스"
                    subtitle="Interface"
                >
                    <UlList
                        items={[
                            "컬렉션 인터페이스들의 가장 최상위 인터페이스입니다."
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
                                <td>default void forEach(Consumer&lt;? super T&gt; action)</td>
                                <td>함수형 프로그래밍 전용 루프 메서드</td>
                            </tr>
                            <tr>
                                <td>Iterator&lt;T&gt; iterator()</td>
                                <td>컬렉션에서 이터레이터를 구현</td>
                            </tr>
                            <tr>
                                <td>default Spliterator&lt;T&gt; splierator()</td>
                                <td>파이프라이닝 관련 메소드</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Note
                        title="팁"
                    >
                        <p>
                            <code>Map</code> 은 <code>iterable</code> 인터페이스를 상속받지 않기 때문에 iterator() 와
                            spliterator() 는 Map 컬렉션에 구현이 되어 있지 않습니다.
                            따라서 직접적으로 Map 컬렉션을 순회할수는 없고 스트림(Stream)을 사용하거나 간접적으로 키(Key)
                            를 Collection 으로 반환하여 루프문으로 순회하는 구문으로 이용합니다.
                        </p>
                    </Note>
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;