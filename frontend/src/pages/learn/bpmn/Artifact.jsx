import { Helmet } from 'react-helmet-async';
import { Table, Image } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
// JsonData
import data from 'data/bpmn/artifact';

const SectionRender = () => {
    const
        title = "아티팩트(Artifact)",
        breadcrumbs = [ "Learn", "BPMN", "Artifact" ];

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
                    title="아티팩트"
                    subtitle="Artifact"
                >
                    <BsCardText>
                        아티팩트(Artifact)는 프로세스 실행에 영향을 미치지 않고 프로세스 다이어그램에만 표현하는 구문적인 정보를 말합니다.
                        BPMN에서는 다음과 같은 2가지 아티팩트를 가집니다.
                    </BsCardText>

                    <UlList
                        header="아티팩트(Artifact) 종류"
                        items={[
                            "그룹(Group)"
                        ,   "주석(Annotation)"
                        ]}
                    />

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
                                <td style={{ whiteSpace: "pre-wrap" }}>{ item.name }</td>
                                <td style={{ whiteSpace: "pre-wrap" }} rowspan={ item.rowspan }>{ item.description }</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table> {/* End tables */}
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;