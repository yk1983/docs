import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { DlList, DtItem, DdItem } from 'components/List';

const SectionRender = () => {
    const
        title = "비즈니스 프로세스 모델링 표기법",
        breadcrumbs = [ "Learn", "BPMN", "Introduction" ];

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
                    col={ 6 }
                    title="비즈니스 프로세스 모델링 표기법이란?"
                    subtitle="Business Process Modeling Notation(BPMN)"
                >
                    <BsCardText>
                        액티비티 다이어그램이 가진 부족한 점을 보완하기 위한 비즈니스 프로세스 관점에서 프로세스를 표현합니다.
                        <br />
                        소프트웨어 프로젝트 문서를 작성하면서 사용자가 어떻게 사용하며, 시스템이 어떻게 작동하는지
                        그림으로 표현을 해야 할 때, 사용자에서 어느 시점에서 무엇을 해야하고, 시스템에서 어떤 입력을 받아
                        어떻게 실행 하는지 그림으로 그리기 위해서 Flow Chart(1921년부터 사용, 1985년 ISO 표준 제정)와
                        UML을 많이 사용했습니다.
                        <br />
                        그러나 Flow Chart와 UML은 표현방식과 내용에 한계가 있어 2005년에 UML의 복잡성을 과감하게
                        단순화(Simplify)시킨 새로운 표준으로 BPMN이 나왔습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="BPMN의 구성"
                >
                    <DlList
                        header="BPMN의 구성"
                    >
                        <DtItem>
                            Basic
                        </DtItem>
                        <DdItem>
                            가장 기초적인 구성으로 도형도 간단하고 기술자가 아닌 사람들도 인지하고 바로 적용할 수 있을
                            정도로 쉽게 표현합니다.
                        </DdItem>
                        <DtItem>
                            Core
                        </DtItem>
                        <DdItem>
                            SW엔지니어들이 보기 시작하는 단계이며 Basic에서 더 세분화된 구성입니다.
                            시스템을 구현할때 필요로 하는 Activity에 대한 세부 분류가 표현 가능하고, 예외 처리도 표현
                            가능합니다.
                        </DdItem>
                        <DtItem>
                            Advaned
                        </DtItem>
                        <DdItem>
                            실제 코드를 다이어그램으로 표현합니다.
                            Core보다 더 SW 엔지니어링에 가깝도록 세분화 되어 있으며, 이 수준은 BPM 시스템에 구현하면
                            실제로 동작하는 단계로 표현합니다.
                        </DdItem>
                    </DlList>
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;