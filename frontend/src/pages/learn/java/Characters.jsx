import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "문자형(Characters Types)",
        breadcrumbs = [ "Learn", "Java", "Characters" ];

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
                    title="문자형"
                    subtitle="Characters Types"
                >
                    <BsCardText>
                        자바에서 문자형 데이터는 <code>char</code> 한 가지 자료형 뿐입니다.
                        자바에서 문자형 데이터란 <span className="text-primary">작은 정수나 문자 하나를 표현할 수 있는
                        타입을 의미하며 단 하나의 문자만을 저장</span>합니다.
                    </BsCardText>

                    <UlList
                        items={[
                            "char"
                        ]}
                    />

                    <Highlight
                        language="java"
                        codestring={[
                            "char ch = 'A';         // 문자 'A'를 char 타입의 변수 ch 에 저장합니다."
                        ,   "char ch = 65;          // 문자의 코드를 직접 변수에 저장합니다."
                        ,   "int code = (int) ch;   // ch에 저장된 값을 int타입으로 변환하여 저장합니다. (문자의 유니코드를 알 수 있습니다.)"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="문자형 타입에 따른 메모리의 크기 및 데이터의 표현 범위"
                >
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>타입</th>
                                <th>할당 크기</th>
                                <th>표현 범위</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>char</td>
                                <td>2byte</td>
                                <td>0 ~ 2<sup>16</sup></td>
                            </tr>
                        </tbody>
                    </Table>
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;