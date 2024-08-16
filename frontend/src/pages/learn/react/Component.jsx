import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "컴포넌트",
        breadcrumbs = [ "Learn", "React", "Component" ];

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
                    title="컴포넌트"
                    subtitle="Component"
                >
                    <BsCardText>
                        컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있습니다.
                    </BsCardText>
                    
                    <UlList
                        header=""
                        items={[
                            "하나의 레고 블럭이라 이해하면 됩니다."
                        ,   "공통적인 부분들을 여러 레고 블럭처럼 만들어 재사용하는 개념입니다."
                        ,   "개념적으로 컴포넌트는 함수와 유사합니다."
                        ,   "props라는 매개변수를 받아서 jsx에 넘겨주면 화면에 표시가 가능합니다."
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="클래스 컴포넌트"
                    subtitle="Class Component"
                >
                    <BsCardText>
                        클래스 컴포넌트는 JavaScript의 클래스 문법을 사용해 만드는 컴포넌트입니다.
                    </BsCardText>

                    <Highlight
                        language="javascript"
                        codestring={[
                            "class MyComponent extends React.Component {",
                            "    render() {",
                            "        return <div>Hello, I am a class component!</div>;",
                            "    }",
                            "}"
                        ].join('\n')}
                    />

                    <UlList
                        header="장점"
                        items={[
                            "상태(state)와 생명주기 메서드(lifecycle methods)를 쉽게 사용할 수 있습니다."
                        ,   "오랫동안 사용되어왔기 때문에 많은 예제와 자료를 찾을수 있습니다."
                        ]}
                    />

                    <UlList
                        header="단점"
                        items={[
                            "코드가 길어질 수 있습니다."
                        ,   "함수 컴포넌트보다 조금 더 복잡해집니다."
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="함수 컴포넌트"
                    subtitle="Function Component"
                >
                    <BsCardText>
                        함수 컴포넌트는 JavaScript 함수로 만든 컴포넌트입니다.
                    </BsCardText>

                    <Highlight
                        language="javascript"
                        codestring={[
                            "function MyComponent() {",
                            "    return <div>Hello, I am a function component!</div>;",
                            "}"
                        ].join('\n')}
                    />

                    <UlList
                        header="장점"
                        items={[
                            "코드가 짧고 간단합니다."
                        ,   "함수 컴포넌트에서도 상태(state)를 사용할 수 있는 useState와 같은 훅(Hooks)을 사용할 수 있습니다."
                        ,   "이해하고 사용하기 쉽습니다."
                        ]}
                    />

                    <UlList
                        header="단점"
                    >
                        <LiItem>
                            <del>클래스 컴포넌트만큼 기능이 많지 않습니다.</del> (지금은 거의 다 사용 가능합니다.)
                        </LiItem>
                    </UlList>
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;