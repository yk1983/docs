import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
import Note from 'components/Note';
/**
 * UseCallback.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "훅(useCallback)",
        breadcrumbs = [ "Learn", "React", "useCallback" ];

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
                    title="useCallback"
                >
                    <BsCardText>
                        <code>useCallback</code> 은 성능 최적화를 위해 함수를 메모이제이션하고 재사용할 수 있는 훅입니다.
                        컴포넌트 리렌더링시 불필요한 함수 재생성을 방지하고, 렌더링 성능을 개선할 수 있습니다.
                    </BsCardText>

                    <Highlight
                        language="javascript"
                        codestring={[
                            "import React, { useState, useCallback } from 'react';"
                        ,   ""
                        ,   "function Counter() {"
                        ,   "    const [count, setCount] = useState(0);"
                        ,   ""
                        ,   "    const handleClick = useCallback(() => {"
                        ,   "        setCount(count + 1);"
                        ,   "    }, [count]); // count가 변경될 때만 메모이제이션된 함수를 업데이트"
                        ,   ""
                        ,   "    return ("
                        ,   "        <div>"
                        ,   "            <p>Count: { count }</p>"
                        ,   "            <button onClick={ handleClick }>Increment</button>"
                        ,   "        </div>"
                        ,   "    );"
                        ,   "}"
                        ,   ""
                        ,   "export default Counter;"
                        ].join('\n')}
                    />

                    <BsCardText>
                        <code>handleClick</code> 함수는 count 값에 의존하고 있기 때문에, count 가 변할때만 함수가 재생성되어
                        재사용됩니다.
                        주로 자주 변경되지 않는 이벤트 핸들러나 콜백함수를 메모이제이션해 최적화하는 데 유용하게 사용됩니다.
                    </BsCardText>
                </BsCard>
            </BsContainer>
        </>
    );
}
 
export default SectionRender;