import { Row, Col } from 'react-bootstrap';
import { Title, Span, Sup, Code, List } from 'components/elements/Elements'; // Components
import BsCard from 'components/BsCard';
import PageTitle from 'layouts/PageTitle';

const PageRender = () => {
    return(
        <>
            <Title
                text="Learn SPRING"
            />

            <PageTitle
                title="제어의 역전(IoC)"
                depth1="Learn"
                depth2="Spring"
                depth3="IoC"
            />

            <section className="section">
                <Row>
                    <BsCard
                        title="제어의 역전"
                        content={[
                            '자바스크립트 -> 리액트 모듈 -> 컴포넌트(조각) -> 화면에 퍼즐을 조합'
                        ]}
                    />
                </Row>
            </section>
        </>
    );
};

export default PageRender;