import { Helmet } from 'react-helmet-async';
import { Table, Image } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
// JsonData
import data1 from 'data/bpmn/startEvent';
import data2 from 'data/bpmn/endEvent';
import data3 from 'data/bpmn/intermedidateEvent';

const SectionRender = () => {
    const
        title = "이벤트(Event)",
        breadcrumbs = [ "Learn", "BPMN", "Event" ];

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
                    title="이벤트"
                    subtitle="Event"
                >
                    <BsCardText>
                        BPMN에서 이벤트(Event)는 비즈니스 프로세스 전반에 걸쳐 발생하는 것입니다.
                        항상 원으로 표시되며 해당 원 안에 아이콘을 포함하여 이벤트를 보다 자세히 설명할 수 있습니다.
                        다이어그램에는 항상 시작 및 종료 이벤트 기호도 포함되어야 합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="시작 이벤트"
                    subtitle="Start Event"
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
                    title="종료 이벤트"
                    subtitle="End Event"
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

                <BsCard
                    col={ 12 }
                    title="중간 이벤트"
                    subtitle="Intermedidate Event"
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
                        {data3.map(( item, index ) => (
                            <tr key={ index }>
                                <td>
                                    <Image
                                        src={ process.env.PUBLIC_URL + '/assets/img/bpmn' + item.image }
                                        title={ item.title }
                                    />
                                </td>
                                <td style={{ whiteSpace: "pre-wrap" }}>{ item.name }</td>
                                <td style={{ whiteSpace: "pre-wrap" }} rowspan={ item.rowspan }>{ item.description }</td>
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