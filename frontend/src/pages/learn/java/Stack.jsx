import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * Stack.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "Stack Class",
        breadcrumbs = [ "Learn", "Java", "Stack Class" ];

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
                    title="Stack 클래스"
                    subtitle="Class"
                >
                    <UlList
                        items={[
                            "후입선출 LIFO(Last-In-First-Out) 자료구조 (마지막에 들어온 원소가 처음으로 나감)"
                        ,   "들어올때는 push, 나갈때는 pop 용어 사용"
                        ,   "Stack은 Vector를 상속하기 때문에 문제점이 많아 잘 사용하지 않음 (대신 ArrayDeque 사용)"
                        ]}
                    />

                    <Highlight
                        language="java"
                        codestring={[
                            "Stack<Integer> stack = new Stack<>();"
                        ,   ""
                        ,   "stack.push(30);"
                        ,   "stack.push(50);"
                        ,   ""
                        ,   "stack.pop(); // 50"
                        ,   "stack.pop(); // 30"
                        ].join('\n')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;