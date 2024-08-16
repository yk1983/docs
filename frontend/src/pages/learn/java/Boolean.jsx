import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import BsTable from 'components/Table';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';

const SectionRender = () => {
    const
        title = "논리형(Boolean)",
        breadcrumbs = [ "Learn", "Java", "Boolean" ];

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
                    subtitle="Boolean"
                >
                    <BsCardText>
                        논리형은 참(<code>true</code>)이나 거짓(<code>false</code>) 중 한 가지 값만을 가질 수 있는
                        불리언 타입을 의미합니다.
                        <br />
                        <code>boolean</code> 형의 기본값은 false이며, 기본 타입 중 가장 작은 크기인 1바이트의 크기를 가집니다.
                    </BsCardText>
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