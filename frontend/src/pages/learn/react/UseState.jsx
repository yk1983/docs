import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { DlList, DtItem, DdItem, UlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * UseState.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "훅(useState)",
        breadcrumbs = [ "Learn", "React", "useState" ];

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
                    title="useState"
                    subtitle="상태 관리"
                >
                    <BsCardText>
                        <code>useState</code>는 함수형 컴포넌트에서 상태를 관리하는 데 사용됩니다.
                        컴포넌트의 상태값을 추가하고, 값을 변경할 수 있습니다.
                        <br />
                        배열을 반환하며, 첫번째 요소는 상태값, 두번째 요소는 해당 상태값을
                        업데이트하는 함수입니다.
                        구조분해할당 문법을 사용하여 주로 다음과 같이 사용합니다.
                    </BsCardText>

                    <Highlight
                        language="javascript"
                        codestring={["const [state, setState] = useState('')"]}
                    />

                    <BsCardText>
                        리액트는 상태를 업데이트 하는 과정에서 <code>setState</code> 같은 상태관리 함수 호출이 여러번
                        호출될 경우 불필요한 렌더링을 줄이기 위해 <code>state</code> 를 즉시 변경하지 않고,
                        리액트 엔진에 의해 일괄적으로 처리하는데, 이를 <span className="text-primary">배치(batch)</span>
                        라고 합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="배치"
                    subtitle="batch"
                >
                    <BsCardText>
                        리액트의 배치는 여러 상태 업데이트를 하나로 묶어서 처리하는 메커니즘입니다.
                        이벤트 핸들러 내에서의 상태 업데이트 또한 일괄 처리합니다.
                        즉, 동일한 이벤트 핸들러 내에서 여러번의 상태 업데이트가 발생해도 한번의 렌더링으로 처리됩니다.
                    </BsCardText>

                    <Highlight
                        language="javaascript"
                        codestring={[
                            "import React, { useState } from 'react';"
                        ,   ""
                        ,   "function Counter() {"
                        ,   "    const [count1, setCount1] = useState(0);"
                        ,   "    const [count2, setCount2] = useState(0);"
                        ,   "    const handleIncrement = () => {"
                        ,   "        // 여러 상태 업데이트가 발생하지만, 일괄 처리됨"
                        ,   "        setCount1(count1 + 1);"
                        ,   "        setCount2(count2 + 1);"
                        ,   "    };"
                        ,   "    return ("
                        ,   "        <button onClick={handleIncrement}>버튼</button>"
                        ,   "    );"
                        ,   "}"
                        ,   ""
                        ,   "export default Counter;"
                        ].join('\n')}
                    />

                    <BsCardText>
                        이처럼 비동기적으로 동작하는 <code>useState</code> 를 동기적으로 사용하기 위해서는 주로
                        {' '}<code>useEffect</code> 훅을 이용해 dependency 에 특정 <code>state</code>를 넣고 해당 상태가
                        변경될때마다 원하는 동작을 실행시키는 방법이 가장 많이 사용됩니다.
                    </BsCardText>
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;