import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
import Highlight from 'components/ExtHighlight';

const SectionRender = () => {
    const
        title = "논리형(Boolean Types)",
        breadcrumbs = [ "Learn", "Java", "Boolean Types" ];

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
                    title="논리형"
                    subtitle="Boolean Types"
                >
                    <BsCardText>
                        논리형은 참(<code>true</code>)이나 거짓(<code>false</code>) 중 한 가지 값만을 가질 수 있는
                        불리언 타입을 의미합니다.
                        <br />
                        <code>boolean</code> 형의 기본값은 <code>false</code>이며, 기본 타입 중 가장 작은 크기인 1바이트의 크기를 가집니다.
                    </BsCardText>

                    <UlList
                        items={[
                            "boolean"
                        ]}
                    />

                    <Highlight
                        language="java"
                        codestring={[
                            "boolean checked = true;"
                        ,   "boolean power = FALSE;    // 에러. 자바에서는 대소문자를 구별되기 때문에 소문자를 사용해야합니다."
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="논리형 타입에 따른 메모리의 크기 및 데이터의 표현 범위"
                >
                    <Table striped bordered hover size="sm" variant="dark">
                        <thead>
                            <tr>
                                <th>타입</th>
                                <th>할당 크기</th>
                                <th>표현 범위</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>boolean</td>
                                <td>1byte</td>
                                <td>true 또는 false</td>
                            </tr>
                        </tbody>
                    </Table>
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;