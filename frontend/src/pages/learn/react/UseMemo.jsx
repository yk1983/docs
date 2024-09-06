import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
import Note from 'components/Note';
/**
 * UseMemo.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "훅(useMemo)",
        breadcrumbs = [ "Learn", "React", "useMemo" ];

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
                    title="useMemo"
                >
                    <BsCardText>
                        <code>useMemo</code> 는 계산 비용이 큰 연산을 수행하거나, 동일한 값을 여러번 계산하지 않도록 할
                        때 사용됩니다.
                        같은 연산을 반복하여 수행하지 않고, 이전에 계산한 결과를 재사용하여 불필요한 작업을 줄일 수 있습니다.
                    </BsCardText>

                    <Highlight
                        language="javascript"
                        codestring={["const memoizedValue = useMemo(() => getValue(a, b), [a, b]);"]}
                    />

                    <BsCardText>
                        의존성 배열이 변경될때에만 새로운 값을 계산하고, 그 외의 경우 메모이제이션한 값을 사용합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="메모이제이션"
                    subtitle="Memoization"
                >
                    <BsCardText>
                        메모이제이션(Memoization)은 이전에 계산한 결과를 저장하고, 동일한 입력이 주어질 경우 미리 계산한
                        값을 반환하여 불필요한 연산을 줄이는 최적화 기법입니다.
                        계산 비용이 크거나, 반복적으로 수행되는 작업을 최적화하는 데 사용됩니다.
                    </BsCardText>

                    <Note
                        variant="danger"
                        title="주의점"
                    >
                        <p>
                            성능 최적화를 위해 사용하는 훅이지만, 메모이제이션을 위해 따로 메모리를 사용하기 때문에 과도한
                            사용은 피하는게 좋습니다.
                            말그대로 복잡하고 비용이 많이 드는 연산을 수행할 때 사용해야 합니다.
                        </p>
                        <p>
                            만약 단순한 값을 계산하거나 간단한 변수를 할당하는 경우, 의존생 배열 안의 값이 자주 변하는
                            경우에 사용한다면 불필요한 메모이제이션을 유발해 오히려 성능이 저하될 수 있습니다.
                        </p>
                    </Note>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="useCallback과 useMemo의 차이"
                >
                    <BsCardText>
                        <code>useCallback</code> 과 <code>useMemo</code> 는 둘 다 메모이제이션을 통해 성능 최적화를
                        도와주는 훅이지만 <code>useCallback</code> 은 함수 를 재사용하고, <code>useMemo</code> 는 값을
                        재사용한다는 차이가 있습니다.
                    </BsCardText>
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;