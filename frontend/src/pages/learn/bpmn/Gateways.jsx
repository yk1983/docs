import { Helmet } from 'react-helmet-async';
import { Table, Image } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
// JsonData
import data from 'data/bpmn/gateway';

const SectionRender = () => {
    const
        title = "게이트웨이(Gateway)",
        breadcrumbs = [ "Learn", "BPMN", "Gateway" ];

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
                    title="게이트웨이"
                    subtitle="Gateway"
                >
                    <BsCardText>
                        게이트웨이는 시퀀스 흐름이 프로세스 내에서 모이고 흩어지는 방식을 제어하는데 사용합니다.
                        모든 비즈니스 프로세스 흐름을 정의하는데 결정, 분기, 모이기, 복사, 연결 등에 사용할 수 있습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="Gateway Type"
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
                        {data.map(( item, index ) => (
                            <tr key={ index }>
                                <td>
                                    <Image
                                        src={ process.env.PUBLIC_URL + '/assets/img/bpmn' + item.image }
                                        title={ item.title }
                                    />
                                </td>
                                <td
                                    style={{ whiteSpace: "pre-wrap" }}
                                    rowspan={ item.rowspan }
                                >{ item.name }
                                </td>
                                <td
                                    style={{ whiteSpace: "pre-wrap" }}
                                    rowspan={ item.rowspan }
                                >{ item.description }
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </BsCard>

                <BsCard
                    col={ 4 }
                    title="Exclusive Gateway"
                    image={{
                        variant : 'top'
                    ,   src : '/assets/img/bpmn/gateway/exclusive-gateway.jpg'
                    }}
                >
                    <BsCardText>
                        게이트웨이의 조건에 해당하는 한 곳의 토큰을 보냅니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 4 }
                    title="Inclusive Gateway"
                    image={{
                        variant : 'top'
                    ,   src : '/assets/img/bpmn/gateway/inclusive-gateway.jpg'
                    }}
                >
                    <BsCardText>
                        모든 흐름이 평가되고 참인 곳으로 모두 토큰을 보냅니다. 병렬로 흩어진 흐름을 모으는데도 사용됩니다.
                        토큰이 게이트웨이에 도착하면 다른 흐름에서 오는 토큰을 기다릴 수 있습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 4 }
                    title="Parallel Gateway"
                    image={[{
                        variant : 'top'
                    ,   src : '/assets/img/bpmn/gateway/parallel-gateway1.jpg'
                    },
                    {
                        variant : 'top'
                    ,   src : '/assets/img/bpmn/gateway/parallel-gateway2.jpg'
                    }]}
                >
                    <BsCardText>
                        흐름에 대한 평가를 하지 않고 모든 흐름으로 토큰을 보냅니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="Complex Gateway"
                    image={{
                        variant : 'top'
                    ,   src : '/assets/img/bpmn/gateway/complex-gateway.jpg'
                    }}
                >
                    <BsCardText>
                        복잡한 게이트웨이는 복잡한 동기화 동작을 모델링하는 데 사용할 수 있습니다.
                        Expression activationCondition은 정확한 동작을 설명하는 데 사용됩니다.
                        예를 들어,이 표현식은 게이트웨이를 활성화하기 위해 5 개의 수신 시퀀스 흐름 중 3 개의 토큰이
                        필요하도록 지정할 수 있습니다.
                        게이트웨이에서 생성되는 토큰은 포함 게이트웨이의 분할 동작에서와 같이 나가는 시퀀스 흐름의 조건에
                        따라 결정됩니다.
                        토큰이 나머지 두 시퀀스 흐름에 나중에 도착하면 해당 토큰으로 인해 게이트웨이가 재설정되고 나가는
                        시퀀스 흐름에서 새 토큰이 생성 될 수 있습니다.
                        재설정하기 전에 추가 토큰을 기다려야하는지 여부를 판별하기 위해 게이트웨이는 포함 게이트웨이의
                        동기화 의미를 사용합니다.
                        <br />
                        복잡한 게이트웨이는 다른 게이트웨이와 달리 내부 상태가 있으며, 이는 부울 인스턴스 속성
                        waitingForStart로 표시되며, 이는 초기에 true이고 활성화 후 false가됩니다.
                        이 속성은 나가는 시퀀스 흐름의 조건에서 사용되어 활성화시 토큰이 생성되는 위치와 재설정시 토큰이
                        생성되는 위치를 지정할 수 있습니다.
                        나가는 각 시퀀스 흐름은 활성화 또는 재설정시 토큰을 얻지 만 둘 다받는 것이 좋습니다.
                        적어도 하나의 나가는 시퀀스 흐름은 활성화시 토큰을 받아야하지만 토큰은 재설정시 생성되지 않아야합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="Event-Based Gateway"
                    image={{
                        variant : 'top'
                    ,   src : '/assets/img/bpmn/gateway/event-based-gateway.jpg'
                    }}
                >
                    <BsCardText>
                        게이트웨이에 달린 이벤트 들 중에 먼저 온 곳으로 토큰을 보냅니다.
                    </BsCardText>
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;