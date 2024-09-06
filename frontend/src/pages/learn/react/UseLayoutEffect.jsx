import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
import Note from 'components/Note';
/**
 * UseLayoutEffect.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "훅(useLayoutEffect)",
        breadcrumbs = [ "Learn", "React", "useLayoutEffect" ];

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
                    title="useLayoutEffect"
                >
                    <BsCardText>
                        <code>useLayoutEffect</code> 는 컴포넌트의 렌더링이 화면에 실제로 그려진 후에 동기적으로 실행되는
                        효과를 만들기 위해 사용됩니다.
                        일반적으로 <span className="text-primary">브라우저 레이아웃과 관련된 작업을 수행하거나 DOM 요소의
                        크기와 위치를 측정하는 등의 작업에 사용</span>됩니다.
                    </BsCardText>

                    <Highlight
                        language="javascript"
                        codestring={[
                            "useLayoutEffect(() => {"
                        ,   "    function updateWidth() {"
                        ,   "        setWidth(window.innerWidth);"
                        ,   "    }"
                        ,   ""
                        ,   "    updateWidth(); // 초기 렌더링 시에 크기를 업데이트"
                        ,   "    window.addEventListener('resize', updateWidth); // 브라우저 크기 변경 시 크기 업데이트"
                        ,   ""
                        ,   "    return () => {"
                        ,   "        window.removeEventListener('resize', updateWidth); // 컴포넌트 언마운트 시 이벤트 리스너 해제"
                        ,   "    };"
                        ,   "}, []);"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="useEffect와 useLayoutEffect의 차이"
                >
                    <BsCardText>
                        두 훅 모두 컴포넌트 렌더링 후에 실행되지만, <code>useEffect</code> 는 비동기 적으로 실행되고
                        {' '}<code>useLayoutEffect</code> 는 브라우저가 레이아웃을 계산한 뒤 동기적으로 실행된다는 점에
                        차이가 있습니다.
                    </BsCardText>

                    <BsCardText>
                        <code>useEffect</code> 는 컴포넌트가 render(DOM Tree 를 구성하기 위해 각 엘리먼트의 스타일 속성을
                        계산하는 과정)와 paint(실제 브라우저에 레이아웃을 그리는 과정) 과정이 완료된 후 비동기적으로 실행됩니다.
                        페인트 후에 동작하므로 만약 DOM을 조작하는 코드가 있을경우, 사용자가 깜빡임을 경험할 수 있습니다.
                    </BsCardText>

                    <BsCardText>
                        <code>useLayoutEffect</code> 는 컴포넌트가 render(DOM Tree를 구성하기 위해 각 엘리먼트의 스타일
                        속성을 계산하는 과정) 된 후 paint 과정을 거치기 전에 동기적으로 실행됩니다.
                        <code>useLayoutEffect</code> 의 내부 코드가 동기적으로 실행된 뒤 페인트 과정을 거치기 때문에,
                        복잡한 로직이 있을 경우 사용자가 레이아웃을 보기까지 시간이 오래 걸릴수 있어 대부분의 경우 <code>
                        useEffect</code> 를 사용하여 처리하되, 대표적으로 화면 깜빡임을 개선해야 할 때 사용하는 것이
                        권장됩니다.
                    </BsCardText>
                </BsCard>
            </BsContainer>
        </>
    );
}
 
export default SectionRender;