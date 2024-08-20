import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
// JsonData
import data from 'data/html/tags';

const SectionRender = () => {
    const
        title = "HTML Global Attributes",
        breadcrumbs = [ "Learn", "HTML", "Attributes" ];

    return (
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
                    title="HTML Global Attributes"
                >
                    <BsCardText>
                        HTML 요소들의 전역 속성을 정의합니다.
                    </BsCardText>

                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item, index) => (
                            <tr key={ index }>
                                <td>{ item.attribute }</td>
                                <td>{ item.description }</td>
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