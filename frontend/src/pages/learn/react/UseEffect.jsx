import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { DlList, DtItem, DdItem, UlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
import Note from 'components/Note';
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
        title = "훅(useEffect)",
        breadcrumbs = [ "Learn", "React", "useEffect" ];

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
                    title="useEffect"
                    subtitle="컴포넌트 렌더링 이후 특정 작업 수행"
                >
                    <BsCardText>
                        <code>useEffect</code> 는 컴포넌트 렌더링 이후 특정 작업을 수행할수 있게 해주는 훅입니다.
                        컴포넌트가 마운트 될 때, 업데이트 될 때, 언마운트 될 때 호출이 가능합니다.
                    </BsCardText>

                    <Highlight
                        header="기본형태"
                        language="javascript"
                        codestring={[ "useEffect(function, deps)" ]}
                    />

                    <BsCardText>
                        <code>function</code> 은 수행하고자 하는 작업 함수이며, <code>deps</code> 는 배열 형식이고,
                        배열 안에는 검사하고자 하는 특정 값 또는 배열을 기술합니다.
                    </BsCardText>

                    <Highlight
                        language="javascript"
                        codestring={[
                            "import React, { useState, useEffect } from 'react';"
                        ,   ""
                        ,   "function Example() {"
                        ,   "    const [count, setCount] = useState(0);"
                        ,   ""
                        ,   "    useEffect(() => {"
                        ,   "        document.title = `${count}`;"
                        ,   "    });"
                        ,   ""
                        ,   "    return ("
                        ,   "        <div>"
                        ,   "            <p>Count: { count }</p>"
                        ,   "            <button onClick={ () => setCount(count + 1) }>Increase</button>"
                        ,   "        </div>"
                        ,   "    );"
                        ,   "}"
                        ].join('\n')}
                    />

                    <BsCardText>
                        이 함수는 컴포넌트가 렌더링 될때마다 실행됩니다.
                        만약 특정 <code>state</code> 가 변할때나, 컴포넌트 처음 렌더링 시 등 특정 상황에서만 사용하고
                        싶다면 두번째 인자로 의존성 배열(dependency array)을 넘겨 제어가 가능합니다.
                    </BsCardText>

                    <Note
                        variant="danger"
                        title="주의점"
                    >
                        <p>
                            여러개의 useEffect를 호출할 경우, 컴포넌트 렌더링시마다 모든 useEffect가 실행되기 때문에
                            순서를 명확하게 지정해주어야 합니다.
                            또한, 비동기 작업 수행시 컴포넌트 언마운트 또는 업데이트 경우에 해당 작업 관리에 유의해야
                            합니다. 이를 위해 <code>clean-up</code> 함수를 리턴하거나 의존성 배열을 활용할 수 있습니다.
                        </p>
                    </Note>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="컴포넌트가 마운트 되었을 때 (처음 렌더링)"
                    subtitle="마운트"
                >
                    <Highlight
                        language="javascript"
                        codestring={[
                            "useEffect(() => {"
                        ,   "    console.log('마운트 될 때만 실행됩니다.');"
                        ,   "}, []); // 빈 배열"
                        ,   ""
                        ,   "useEffect(() => {"
                        ,   "    console.log('렌더링 될 때마다 실행됩니다.');"
                        ,   "});"
                        ].join('\n')}
                    />

                    <BsCardText>
                        컴포넌트가 화면에 가장 처음 렌더링 될 때 한번만 실행하고 싶은 경우 <code>deps</code> 위치에
                        빈 배열(<code>[]</code>)을 넣습니다.
                        <br />
                        만약 <code>deps</code> 의 값을 생략한다면 렌더링이 될 때마다 실행됩니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="컴포넌트가 업데이트 되었을 때"
                    subtitle="특정 props, state 가 변경될 때"
                >
                    <Highlight
                        language="javascript"
                        codestring={[
                            "useEffect(() => {"
                        ,   "    console.log(state);"
                        ,   "    console.log('state 값이 변경 될 때마다 실행됩니다.');"
                        ,   "}, [state]);"
                        ].join('\n')}
                    />

                    <BsCardText>
                        특정값이 업데이트 될 때 실행하고 싶은 경우에는 <code>deps</code> 위치의 배열 안에 검사하고 싶은
                        값을 넣어주면 됩니다. (의존값이 들어있는 배열을 deps 이라고 합니다.)
                        <br />
                        업데이트 될 때만 실행하는 것이 아닌 마운트 될 때도 실행됩니다.
                    </BsCardText>

                    <Highlight
                        header="업데이트 될 때만 특정 함수를 실행하는 방법"
                        language="javascript"
                        codestring={[
                            "const mounted = useRef(false);"
                        ,   ""
                        ,   "useEffect(() => {"
                        ,   "    if (!mounted.current) {"
                        ,   "        mounted.current = true;"
                        ,   "    }"
                        ,   "    else {"
                        ,   "        // ajax"
                        ,   "    }"
                        ,   "}, [바뀌는 값]);"
                        ].join('\n')}
                    />

                    <BsCardText>
                        컴포넌트가 마운트 될 때는 <code>if</code> 문에서 아무것도 실행하지 않고 mounted 값만 바꿉니다.
                        <code>else</code> 에서 배열 안에 있는 값이 바뀌면, ajax 서버 통신이라던가 원하는 코드를 실행합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="컴포넌트가 언마운트 되었을 때 (사라지거나 업데이트 되기 직전에)"
                    subtitle="언마운트"
                >
                    <Highlight
                        language="javascript"
                        codestring={[
                            "useEffect(() => {"
                        ,   "    console.log('effect');"
                        ,   "    console.log(state);"
                        ,   "    return() => {"
                        ,   "        console.log('cleanup');"
                        ,   "        console.log(state);"
                        ,   "    }"
                        ,   "}, []);"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="clean-up 함수"
                >
                    <BsCardText>
                        <code>useEffect</code> 내부에서 리턴되는 함수를 의미하며 컴포넌트가 언마운트 될 때,
                        의존성 배열(dependency array) 내의 특정 값이 변경되기 전에 실행할 작업을 지정할 수 있습니다.
                    </BsCardText>

                    <Highlight
                        language="javascript"
                        codestring={[
                            "useEffect(() => {"
                        ,   "    const timer = setInterval(() => {"
                        ,   "        setCount(prevCount => prevCount + 1);"
                        ,   "    }, 1000);"
                        ,   ""
                        ,   "    // clean-up 함수"
                        ,   "    return () => {"
                        ,   "        clearInterval(timer); // 타이머 해제"
                        ,   "    };"
                        ,   "}, []); // 빈 의존성 배열: 마운트될 때에만 실행"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="deps 파라메터 값"
                    subtitle="deps"
                >
                    <BsCardText>
                        <code>deps</code> 에 특정 값을 넣게 되면 컴포넌트가 처음 마운트 될 때, 지정한 값이 바뀔 때,
                        언마운트 될 때, 값이 바뀌기 직전에 모두 호출되게 됩니다.
                        <br />
                        <code>useEffect</code> 안에서 사용하는 <code>state</code> 나 <code>props</code> 가 있다면,
                        {' '}<code>useEffect</code> 의 <code>deps</code> 에 넣어줘야 하는 것이 규칙입니다.
                        만약 사용하는 값을 넣어주지 않는다면 <code>useEffect</code> 안의 함수가 실행될 때 최신
                        <code>state</code>, <code>props</code> 를 가르키지 않습니다.
                        <br />
                        <code>deps</code> 파라메터를 생략하면 컴포넌트가 렌더링 될 때마다 <code>useEffect</code> 함수가
                        호출되어 무한루프에 빠질 수 있습니다.
                    </BsCardText>
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;