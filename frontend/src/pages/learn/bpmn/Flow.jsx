import { Helmet } from 'react-helmet-async';
import { Table, Image } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard } from 'components/Article';
// JsonData
import data from 'data/bpmn/flow';

const SectionRender = () => {
    const
        title = "흐름(Flow)",
        breadcrumbs = [ "Learn", "BPMN", "Flow" ];

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
                    title="흐름"
                    subtitle="Flow"
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