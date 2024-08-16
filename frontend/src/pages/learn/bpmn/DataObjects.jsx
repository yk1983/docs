import { Helmet } from 'react-helmet-async';
import { Table, Image } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
// JsonData
import data1 from 'data/bpmn/dataObjectType';
import data2 from 'data/bpmn/dataStore';

const SectionRender = () => {
    const
        title = "데이터 객체(Data Object)",
        breadcrumbs = [ "Learn", "BPMN", "Data Object" ];

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
                    title="데이터 객체"
                    subtitle="Data Object"
                >
                    <BsCardText>
                        데이터 객체(Data Object)는 프로세스 흐름에서 처리되는 데이터 구조와 정보를 표현하며,
                        다음과 같은 5가지 데이터 모델 요소를 사용할 수 있습니다.
                    </BsCardText>

                    <UlList
                        header="데이터 객체의 종류"
                        items={[
                            "데이터 객체(Data Object)"
                        ,   "입력 데이터(Data Input)"
                        ,   "출력 데이터(Data Output)"
                        ,   "데이터 수집(Data Collection)"
                        ,   "데이터 저장소(Data Store)"
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="Data Object Type"
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
                                <td
                                    style={{ whiteSpace: "pre-wrap" }}
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
                    col={ 12 }
                    title="Data Store"
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
                                <td
                                    style={{ whiteSpace: "pre-wrap" }}
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
            </BsContainer>
        </>
    );
}

export default SectionRender;