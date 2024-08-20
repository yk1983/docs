import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
// JsonData
import data from 'data/html/tags';

const SectionRender = () => {
    const
        title = "HTML Element Reference",
        breadcrumbs = [ "Learn", "HTML", "Tags" ];

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
                    title="HTML Element Reference"
                >
                    <BsCardText>
                        HTML 요소들을 정의합니다.
                    </BsCardText>

                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>Tag</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map(( item, index ) => (
                            <tr key={ index }>
                                <td>{ item.tag }</td>
                                <td>{ item.description }</td>
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