import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText, BsImage } from 'components/Article';
import { UlList } from 'components/List';

const SectionRender = () => {
    const
        title = "스윔레인(Swimlane)",
        breadcrumbs = [ "Learn", "BPMN", "Swimlane" ];

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
                        title="스윔레인"
                        subtitle="Swimlane"
                    >
                        <BsCardText>
                            BPMN으로 그린 맵 캔버스는 레인과 풀로 구성됩니다.
                            <br />
                            스윔레인은 BPMN 다이어그램의 프로세스의 측면을 정리하는 데 사용됩니다.
                            스윔레인은 개체를 레인으로 시각적으로 그룹화하며, 프로세스의 각 측면을 별도의 레인에 추가합니다.
                            이러한 요소는 가로 또는 세로로 정렬할 수 있습니다.
                            <br />
                            스윔레인은 활동을 개별 카테고리로 정리할 뿐 아니라, 지연, 비효율 및 프로세스의 각 단계를
                            담당하는 작업자도 나타낼 수 있습니다.
                        </BsCardText>

                        <UlList
                            header="구성"
                            items={[
                                "Pool"
                            ,   "Swimlane"
                            ,   "Column"
                            ,   "Blackbox Pool"
                            ]}
                        />

                        <BsContainer>
                            <BsImage
                                src={ process.env.PUBLIC_URL + '/assets/img/bpmn/swimlane/swimlane.jpg' }
                                title="Swimlane"
                            />
                        </BsContainer>
                    </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;