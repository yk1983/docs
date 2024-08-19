import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { BsLink45Deg } from 'react-icons/bs';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, OlList, LiItem } from 'components/List';
import Highlight from 'components/ExtHighlight';
/**
 * MultiDimensionalArray.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 8/19/24
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "다차원 배열(Multi Dimensional Arrays)",
        breadcrumbs = [ "Learn", "Java", "Multi Dimensional Arrays" ];

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
                <BsCard>

                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;