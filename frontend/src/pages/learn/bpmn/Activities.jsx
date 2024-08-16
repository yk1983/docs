import { Helmet } from 'react-helmet-async';
import { Table, Image } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
// JsonData
import data1 from 'data/bpmn/taskType';
import data2 from 'data/bpmn/taskMaker';

const SectionRender = () => {
    const
        title = "활동(Activities)",
        breadcrumbs = [ "Learn", "BPMN", "Activities" ];

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
                    title="활동"
                    subtitle="Activities"
                >
                    <BsCardText>
                        Task는 프로세스 흐름 상에서 더 이상 상세 레벨로 내려갈 수 없는 가장 작은 단위입니다.
                        일반적으로 사람이나 애플리케이션이 실제로 행동하는 것을 표현하는 단위이기도 합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="Taks Type"
                >
                    <Table bordered size="sm">
                        <thead>
                            <tr>
                                <th>기호</th>
                                <th>의미</th>
                                <th>설명</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data1.map(( item, index ) => (
                            <tr key={ index }>
                                <td>
                                    <Image
                                        src={ process.env.PUBLIC_URL + '/assets/img/bpmn' + item.image }
                                        title={ item.title }
                                    />
                                </td>
                                <td style={{ whiteSpace: "pre-wrap" }}>{ item.name }</td>
                                <td style={{ whiteSpace: "pre-wrap" }}>{ item.description }</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="Taks Maker"
                >
                    <BsCardText>
                        Task는 Loop, Multi-Instance, Compensation 3가지 타입 마커를 넣어서 더 상세하게 표현 할 수 있습니다.
                    </BsCardText>

                    <Table bordered size="sm">
                        <thead>
                            <tr>
                                <th>기호</th>
                                <th>의미</th>
                                <th>설명</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data2.map(( item, index ) => (
                            <tr key={ index }>
                                <td>
                                    <Image
                                        src={ process.env.PUBLIC_URL + '/assets/img/bpmn' + item.image }
                                        title={ item.title }
                                    />
                                </td>
                                <td style={{ whiteSpace: "pre-wrap" }}>{ item.name }</td>
                                <td style={{ whiteSpace: "pre-wrap" }}>{ item.description }</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;