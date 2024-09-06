import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { Table } from 'react-bootstrap';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { DlList, DtItem, DdItem, UlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * Hooks.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "훅",
        breadcrumbs = [ "Learn", "React", "Hook" ];

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
                    title="훅이란?"
                    subtitle="Hook"
                >
                    <BsCardText>
                        훅은 리액트(React) 16.8버전부터 도입된 개념으로, 클래스 컴포넌트에서만 가능했던 상태 관리 및 생명 주기
                        메서드를 함수형 컴포넌트에서도 사용할 수 있도록 도와주는 기능입니다.
                    </BsCardText>

                    <DlList
                        header="훅(Hook)의 종류"
                    >
                        <DtItem>useState</DtItem>
                        <DdItem>
                            가장 자주 사용되는 <code>useState</code> 는 함수형 컴포넌트에서 상태(state) 를 관리할 수
                            있게 해주는 훅으로, <span className="text-primary">상태값을 변경하고 업데이트</span> 할 수
                            있습니다.
                        </DdItem>
                        <DtItem>useEffect</DtItem>
                        <DdItem>
                            컴포넌트 <span className="text-primary">렌더링 이후 특정 작업(data fetching, DOM 조작 등)
                            을 수행</span> 할 수 있게 해줍니다.
                        </DdItem>
                        <DtItem>useContext</DtItem>
                        <DdItem>
                            리액트의 Context API 를 사용하여, 컴포넌트 트리 안에서 전역적인 상태 공유를 도와줍니다.
                        </DdItem>
                        <DtItem>useCallback</DtItem>
                        <DdItem>
                            함수를 메모이제이션(memoization)하여 성능 최적화를 도와줍니다.
                            부모 컴포넌트가 리렌더링되어도 함수를 새로 생성하지 않고 재사용해야 할 경우 사용됩니다.
                        </DdItem>
                        <DtItem>useMemo</DtItem>
                        <DdItem>
                            값 을 메모이제이션하여 성능 최적화를 도와줍니다.
                            계산 비용이 큰 연산을 수행하거나, 동일한 값을 여러번 계산하지 않도록 할 때 사용됩니다.
                        </DdItem>
                        <DtItem>useRef</DtItem>
                        <DdItem>
                            컴포넌트에서 DOM 요소를 선택하거나 참조할 때 사용됩니다.
                            <code>ref</code> 객체를 생성하여 DOM 요소에 접근할 수 있습니다.
                        </DdItem>
                        <DtItem>useLayoutEffect</DtItem>
                        <DdItem>
                            <code>useEffect</code> 와 유사하게 작동하지만, 렌더링 된 후 동기적으로 실행됩니다.
                            보통 DOM 조작과 관련된 작업에 사용됩니다.
                        </DdItem>
                    </DlList>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="Hook 사용 규칙"
                >
                    <BsCardText>
                        리액트에서 훅을 사용하기 위해서는 두가지 규칙을 지켜야 합니다.
                    </BsCardText>

                    <UlList
                        items={[
                            "최상위 레벨에서만 훅을 호출할 것"
                        ,   "리액트 함수 컴포넌트 내에서 훅을 호출할 것"
                        ]}
                    />

                    <BsCardText>
                        첫번째로 훅은 항상 함수형 컴포넌트의 최상위 레벨에서 호출되어야 합니다.
                        <br />
                        리액트에서는 컴포넌트가 렌더링 될 때 마다 동일한 순서로 훅을 호출하기 때문입니다.
                        (즉, 리액트가 훅이 호출되는 순서에 의존하기 때문입니다.)
                    </BsCardText>

                    <Highlight
                        language="javascript"
                        codestring={[
                            "import React, { useState } from 'react';"
                        ,   ""
                        ,   "function Counter() {"
                        ,   "    const [count, setCount] = useState(0);"
                        ,   ""
                        ,   "    return ("
                        ,   "        ..."
                        ,   "    );"
                        ,   "}"
                        ,   ""
                        ,   "export default Counter;"
                        ].join('\n')}
                    />

                    <BsCardText>
                        조건문이나 반복문 내에서 훅을 호출하게 될 경우 렌더링마다 훅의 호출 순서가 달라져 컴포넌트의
                        상태관리 및 렌더링이 예측 불가하게 동작할 수 있기 때문에, 반드시 최상위 레벨에서 호출함으로써
                        컴포넌트의 상태와 렌더링을 안정적으로 관리할 수 있습니다.
                    </BsCardText>

                    <BsCardText>
                        두번째로 훅은 리액트 함수 컴포넌트 내부에서만 사용되어야 합니다.
                        <br />
                        훅이 당연하게도 리액트 내부에서만 동작하도록 설계되었기 때문입니다.
                        (컴포넌트 외부에서 호출시 동작하지 않습니다.)
                    </BsCardText>

                    <Highlight
                        language="javascript"
                        codestring={[
                            "const age = useState(0); // 동작 X"
                        ,   "function Component() {"
                        ,   "    // ..."
                        ,   "}"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="React 컴포넌트 초기 렌더링과 리렌더링 과정"
                >
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>단계</th>
                                <th>초기 렌더링</th>
                                <th>리렌더링</th>
                            </tr>
                        </thead>
                        <tbody>
                        {[
                            {   step : "1. 함수 컴포넌트 호출"
                            ,   cn1 : "컴포넌트 함수가 호출됨"
                            ,   cn2 : "컴포넌트 함수가 재호출됨"
                            }
                        ,   {   step : "2. 구현부 실행"
                            ,   cn1 : "Props를 취득하고, Hook 실행, 내부 변수 및 함수 생성"
                            ,   cn2 : "Props를 취득하고, Hook 재실행, 내부 변수 및 함수 재생성"
                            }
                        ,   {   step : "3. return 실행"
                            ,   cn1 : "렌더링 시작"
                            ,   cn2 : "렌더링 시작"
                            }
                        ,   {   step : "4. 렌더링 실행"
                            ,   cn1 : "새로운 가상 DOM 생성 후 이전 가상 DOM과 비교하여 변경 사항 탐색, 실제 DOM에 반영할 부분 결정"
                            ,   cn2 : "변경된 부분을 가상 DOM과 비교하여 변경 사항 탐색, 실제 DOM에 반영할 부분 결정"
                            }
                        ,   {   step : "5. 커밋 단계"
                            ,   cn1 : "변경된 부분을 실제 DOM에 반영"
                            ,   cn2 : "변경된 부분을 실제 DOM에 반영"
                            }
                        ,   {   step : "6. useLayoutEffect 실행"
                            ,   cn1 : "동기적으로 실행됨"
                            ,   cn2 : "동기적으로 실행됨 (state나 전역 상태값 변경 시 추가 실행 가능)"
                            }
                        ,   {   step : "7. paint"
                            ,   cn1 : "실제 DOM을 화면에 그림"
                            ,   cn2 : "실제 DOM을 화면에 그림"
                            }
                        ,   {   step : "8. useEffect 실행"
                            ,   cn1 : "Mount 되어 브라우저에 그려진 후 비동기적으로 실행됨 (return이 있는 경우 실행됨)"
                            ,   cn2 : "비동기적으로 실행됨 (return이 있는 경우 실행됨)"
                            }
                        ].map(item => (
                            <tr>
                                <td>{ item.step }</td>
                                <td>{ item.cn1 }</td>
                                <td>{ item.cn2 }</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;