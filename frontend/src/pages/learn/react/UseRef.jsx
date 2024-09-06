import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
import Note from 'components/Note';
/**
 * UseRef.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "훅(useRef)",
        breadcrumbs = [ "Learn", "React", "useRef" ];

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
                    title="useRef"
                    subtitle="특정 값을 관리하고 유지"
                >
                    <BsCardText>
                        <code>useRef</code> 는 DOM 요소나 컴포넌트 내부에서 특정 값을 관리하고 유지할때 사용되는 훅입니다.
                        <br />
                        가장 큰 특징은, <code>useRef</code> 를 사용하면 값이 변경되어도 컴포넌트가 리렌더링되지 않으며,
                        값의 변경이 발생해도 상태가 업데이트 되지 않는다는 점입니다.
                    </BsCardText>

                    <Highlight
                        header="input 필드에 포커스를 주는 예제"
                        language="javascript"
                        codestring={[
                            "import React, { useRef } from 'react';"
                        ,   ""
                        ,   "function FocusInput() {"
                        ,   "    const inputRef = useRef(null);"
                        ,   ""
                        ,   "    const handleClick = () => {"
                        ,   "        inputRef.current.focus();"
                        ,   "    };"
                        ,   ""
                        ,   "    return ("
                        ,   "        <div>"
                        ,   "            <input ref={ inputRef } type=\"text\" />"
                        ,   "            <button onClick={ handleClick }>Focus Input</button>"
                        ,   "        </div>"
                        ,   "    );"
                        ,   "}"
                        ,   ""
                        ,   "export default FocusInput;"
                        ].join('\n')}
                    />

                    <UlList
                        header="사용 용도"
                        items={[
                            "DOM 요소에 직접 접근 하거나 조작해야 할 경우"
                        ,   "컴포넌트 리렌더링시에도 이전 값의 변경을 추적하거나 저장해야 할 경우"
                        ]}
                    />

                    <Note
                        variant="danger"
                        title="주의점"
                    >
                        <p>
                            <code>useRef</code> 로 값을 변경해도 컴포넌트는 리렌더링 되지 않습니다.
                            불필요한 리렌더링을 방지할 수 있지만, 리렌더링이 필요한 경우에는 <code>useState</code> 나
                            {' '}<code>useEffect</code> 를 사용하여 리렌더링 시켜주어야 합니다.
                        </p>
                        <p>
                            특히, 리액트에서 DOM을 직접 조작하는것은 주의가 필요합니다.
                            리액트는 가상 DOM을 사용해서 변경사항을 업데이트 하는데, DOM을 직접 조작하는것 자체가 리액트
                            핵심 원칙과 어긋나기 때문입니다.
                        </p>
                        <p>
                            가능하다면 <code>props</code> 와 <code>state</code> 를 활용하여 컴포넌트를 렌더링하고
                            업데이트하는 방식이 좋지만, 필요에 따라 동적 DOM 엘리먼트 조작이 필요하거나 특정 DOM 이벤트
                            핸들링이 필요할 경우 사용할 수 있습니다.
                        </p>
                    </Note>
                </BsCard>
            </BsContainer>
        </>
    );
}
 
export default SectionRender;